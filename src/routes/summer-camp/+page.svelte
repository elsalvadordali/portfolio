<script>
	import {
		getAuth,
		setPersistence,
		signInWithEmailAndPassword,
		browserLocalPersistence
	} from 'firebase/auth';
	import { firebaseApp } from '$lib/firebase';
	let loading = true;
	const auth = getAuth(firebaseApp);
	const user = {
		email: auth.currentUser ? auth.currentUser.email : '',
		password: '',
		isLoggedIn: auth.currentUser ? true : false,
		cred: auth.currentUser
	};
	let taskInProgress = 0;
	let minutes = 25;
	let seconds = 0;
	let timer = null;
	let tasks = [
		{
			id: 1,
			name: 'eat breakfast',
			timeLeft: 1500,
			icon: '/summer-camp/breakfast.png',
			doneIcon: '/summer-camp/breakfast2.png'
		},
		{
			id: 2,
			name: 'get ready',
			timeLeft: 1500,
			icon: '/summer-camp/brushing-teeth.png',
			doneIcon: '/summer-camp/brushing-teeth2.png'
		},
		{
			id: 3,
			name: 'study',
			timeLeft: 5,
			icon: '/summer-camp/open-book.png',
			doneIcon: '/summer-camp/open-book2.png'
		},
		{
			id: 4,
			name: 'yoga',
			timeLeft: 1500,
			icon: '/summer-camp/yoga.png',
			doneIcon: '/summer-camp/yoga2.png'
		},
		{
			id: 5,
			name: 'play',
			timeLeft: 1500,
			icon: '/summer-camp/playground.png',
			doneIcon: '/summer-camp/playground2.png'
		},
		{ id: 6, name: 'draw', timeLeft: 1500, icon: '/summer-camp/father.png' },
		{ id: 7, name: 'korean', timeLeft: 1500, icon: '/summer-camp/student.png' },
		{
			id: 8,
			name: 'eat lunch',
			timeLeft: 5,
			icon: '/summer-camp/cooking.png',
			doneIcon: '/summer-camp/cooking2.png'
		}
	];
	auth.onAuthStateChanged(function (e) {
		if (e) {
			user.cred = e;
			user.isLoggedIn = true;
		}
		loading = false;
	});
	function authUser(e) {
		if (e) e.preventDefault();
		if (user.email && user.password) {
			setPersistence(auth, browserLocalPersistence).then(() => {
				return signInWithEmailAndPassword(auth, user.email, user.password)
					.then((userCredential) => {
						user.isLoggedIn = true;
						user.cred = userCredential.user;
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						console.log(errorMessage);
					});
			});
		}
	}
	function checkDate() {
		let checkedDate =
			//localStorage.getItem('date') !== null
			//? JSON.parse(localStorage.getItem('date'))
			//:
			new Date().valueOf();
		const SECONDS_IN_DAY = 86400;
		if (new Date().valueOf() - SECONDS_IN_DAY > checkedDate) {
			localStorage.setItem('date', JSON.stringify(new Date().valueOf()));
			tasks.forEach((task) => (task.timeLeft = 1500));
		}
	}
	checkDate();
	function startTask(task) {
		if (taskInProgress === task.id) {
			taskInProgress = 0;
			clearInterval(timer);
			minutes = '00';
			seconds = '00';
			tasks = tasks;
		} else if (taskInProgress) return;
		else {
			taskInProgress = task.id;
			task.started = new Date();
			startTimer(task.id - 1);
		}
	}
	function startTimer(i) {
		//minutes = parseInt(task.timeLeft / 60) ? parseInt(task.timeLeft / 60) : '00';
		//seconds = task.timeLeft % 60 ? task.timeLeft % 60 : '00';
		timer = setInterval(() => {
			tasks[i].timeLeft -= 1;
			minutes = Math.floor(tasks[i].timeLeft / 60) ? Math.floor(tasks[i].timeLeft / 60) : '00';
			seconds =
				tasks[i].timeLeft % 60
					? tasks[i].timeLeft % 60 < 10
						? '0' + (tasks[i].timeLeft % 60).toString()
						: tasks[i].timeLeft % 60
					: '00';
			if (tasks[i].timeLeft <= 0) {
				const sound = new Audio('/summer-camp/sound.mp3');
				sound.play();
				//play sound effect??
				// show notification
				console.log('done');
				tasks[i].timeLeft = -1;
				clearInterval(timer);
			}
			if (seconds % 60 <= 0) {
				localStorage.setItem('tasks', JSON.stringify(tasks));
			}
		}, 1000);
	}
</script>

{#if loading}
	<div>
		<h3>Loading...</h3>
	</div>
{:else if user.isLoggedIn}
	<div class={user ? 'eda' : 'ilia'}>
		<div>
			<h3>logged in!</h3>
			{#each tasks as task, i}
				<div
					class={task.timeLeft <= 0
						? 'task finished-task'
						: task.id === taskInProgress
						? 'task current-task'
						: 'task'}
				>
					<label for={'task-' + i}>
						<div class="row">
							<img src={task.timeLeft <= 0 ? task.doneIcon : task.icon} alt="" />
							<input type="checkbox" id={'task-' + i} on:click={() => startTask(task)} hidden />
							<div>
								<h3 class={task.timeLeft > 0 ? '' : 'grey'}>{task.name}</h3>
								<h6>
									{task.timeLeft > 0
										? task.id === taskInProgress
											? minutes + ':' + seconds
											: ''
										: ''}
								</h6>
							</div>
						</div>
					</label>
				</div>
			{/each}
		</div>
	</div>
{:else}
	<div>
		<form>
			<label for="email">email:</label>
			<input type="text" bind:value={user.email} id="email" />
			<br />
			<label for="password">password:</label>
			<input type="password" id="password" bind:value={user.password} />
			<button on:click={(e) => authUser(e)}>Login</button>
		</form>
	</div>
{/if}

<style>
	.eda {
		background-color: rgb(99, 14, 58);
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		width: 90px;
		height: 90px;
		margin-right: 24px;
	}
	.task {
		border: 2px solid black;
		border-radius: 6px;
		margin-bottom: 24px;
		padding: 24px;
		width: 300px;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-items: space-between;
	}
	.current-task {
		background-color: #f0f0f0;
		border-color: #6ba292;
	}
	.finished-task {
		border-color: #abb0b1;
		background-color: #e8edf0;
		border-radius: 6px;
	}
	h3 {
		margin: 0.25rem;
	}
	h6 {
		font-family: 'DM Mono', monospace;
		margin: 0.25rem;
		font-size: 1rem;
	}
	.grey {
		color: #abb0b1;
	}
</style>
