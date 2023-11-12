<script lang="ts">
	import { Task, Timer } from '$lib/classes'
	import {
		getAuth
	} from 'firebase/auth';
	import { firebaseApp } from '$lib/firebase';

	console.log(firebaseApp)
	console.log('hELLO?')	
	let loading = true;
	const auth = getAuth(firebaseApp);

	const user = {
		name: '',
		email: auth.currentUser ? auth.currentUser.email : '',
		password: '',
		isLoggedIn: auth.currentUser ? true : false,
		cred: auth.currentUser
	};
	auth.onAuthStateChanged(function (e) {
		if (e) {
			console.log(e)
			// @ts-ignore
			user.cred = e.auth.currentUser;
			user.isLoggedIn = true;
			user.name = user.cred?.email?.split("@")[0] || "";
		}
		loading = false;
	});
	function login(e: Event) {
		e.preventDefault()

	}	
	let arr = [
		{
			id: 1,
			name: 'get ready',
			timeLeft: 2100,
			icon: '/summer-camp/breakfast2.png',
			doneIcon: '/summer-camp/breakfast.png',
			subTasks: [
				{ name: 'make breakfast', isDone: false },
				{ name: 'eat breakfast', isDone: false },
				{ name: 'clean up', isDone: false },
				{ name: 'brush teeth', isDone: false },
				{ name: 'get dressed', isDone: false },
				{ name: 'make beds', isDone: false} 
			]
		},
		{
			id: 2,
			name: 'morning walk',
			timeLeft: 2100,
			icon: '/summer-camp/walking-2.png',
			doneIcon: '/summer-camp/walking.png',
			subTasks: []
		},
		{
			id: 3,
			name: 'read at least 10 minutes',
			timeLeft: 2100,
			icon: '/summer-camp/read2.png',
			doneIcon: '/summer-camp/read.png',
			subTasks: []
			
		},
		{
			id: 4,
			name: 'play together',
			timeLeft: 2100,
			icon: '/summer-camp/playground2.png',
			doneIcon: '/summer-camp/playground.png',
			subTasks: []
		},
		{
			id: 5,
			name: 'lunch',
			timeLeft: 2100,
			icon: '/summer-camp/cooking2.png',
			doneIcon: '/summer-camp/cooking.png',
			subTasks: [
				{ name: 'make lunch', isDone: false },
				{ name: 'eat lunch', isDone: false },
				{ name: 'clean up', isDone: false },
			]
		},
		{
			id: 6,
			name: 'draw',
			timeLeft: 2100,
			icon: '/summer-camp/draw2.png',
			doneIcon: '/summer-camp/father.png',
			subTasks: []
		},
		{
			
			id: 7,
			name: 'workbook',
			timeLeft: 2100,
			icon: '/summer-camp/open-book2.png',
			doneIcon: '/summer-camp/open-book.png',
			subTasks: [
				{ name: '1 page', isDone: false },
				{ name: '1 page', isDone: false },
				{ name: '1 page', isDone: false },
				{ name: '1 page', isDone: false },
				{ name: '1 page', isDone: false },
				{ name: '1 page', isDone: false },
			]
		},
		{
			id: 8,
			name: 'study Korean',
			timeLeft: 2100,
			icon: '/summer-camp/student2.png',
			doneIcon: '/summer-camp/student.png',
			subTasks: []
		},
		{
			id: 9,
			name: 'yoga',
			timeLeft: 2100,
			icon: '/summer-camp/yoga2.png',
			doneIcon: '/summer-camp/yoga.png',
			subTasks: []
		},
		{
			id: 10,
			name: 'play outside',
			timeLeft: 2100,
			icon: '/summer-camp/playground2.png',
			doneIcon: '/summer-camp/playground.png',
			subTasks: []
		},
		{
			id: 11,
			name: 'evening walk',
			timeLeft: 2100,
			icon: '/summer-camp/walking-2.png',
			doneIcon: '/summer-camp/walking.png',
			subTasks: []
		},
		


	];
	let taskId: number = -1

	const tasks = arr.map((a) => {
		return new Task(a.id, a.name, a.timeLeft, a.icon, a.doneIcon, a.subTasks);
	});
	let showModal = false
	function finishTask(currentTask: Task) {
		showModal = !showModal
		taskId = currentTask.id
	}
	let pinValue = ''
	let select = (num:number) => {
		pinValue = pinValue + num
		console.log(pinValue)
	}
	$: if (pinValue == "2345") {
		tasks[taskId - 1].isDone = true
		showModal = false
		console.log(tasks[taskId - 1].name)
	}
</script>

{#if showModal}
{#if user.email}
<div class="modal">
	<h3>Verify pin</h3>
	<div class="button-grid">
		<button on:click={() => select(1)}>1</button>
		<button on:click={() => select(2)}>2</button>
		<button on:click={() => select(3)}>3</button>
		
		<button on:click={() => select(4)}>4</button>
		<button on:click={() => select(5)}>5</button>
		<button on:click={() => select(6)}>6</button>

		<button on:click={() => select(7)}>7</button>
		<button on:click={() => select(8)}>8</button>
		<button on:click={() => select(9)}>9</button>

		<button on:click={() => pinValue = ""}>clear</button>
		<button on:click={() => select(0)}>0</button>
		<button on:click={() => showModal = false}>close</button>
	</div>
</div>
{/if}

<div class="big-grid">
	{#each tasks as task }
		<div class="task">
			<h5>{task.name}</h5>
			<img src={task.isDone ? task.doneIcon : task.icon} alt={"icon of " + task.name} class="task-image"/>
			<ul>
				{#each task.subTasks as subTask}
				<li><input type="checkbox" bind:checked={subTask.isDone} />
					{subTask.name}</li>
				{/each}
			</ul>
			{#if task.isDone == false}
				<button 
					disabled={!task.canBeDone} 
					class={task.canBeDone ? "green-button" : "grey-button"}
					on:click={() => finishTask(task)}
					>
						{task.canBeDone ? "✔️" : ""} Done
				</button>
			{/if}
		</div>
	{/each}
		

</div>
{:else}
	<form on:submit={login}>
		<label for="email">Email</label>
		<input id="email" />
		<label for="password">Password</label>
		<input id="password" type="password" 
		/>
	</form>
{/if}

<style>
	
	.big-grid {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}
	.button-grid {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}
	.task {
		border: 2px solid black;
		border-radius: 1em;
		padding: 1em;
		min-width: 300px;
		margin-bottom: 2em;
		margin-right: 2em;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}
	.task-image {
		max-width: 160px;
	}
	ul {
		list-style-type: none;
	}
	li {
		display: flex;
		justify-content: flex-start;
	}
	button {
		border: 2px solid black;
		background-color: transparent;
		padding: 1em;
		border-radius: 1em;
		margin-bottom: 1em;
		margin-right: .5em;
		width: 26%
	}
	.green-button {
		background-color: #50d092;
		border: 2px solid black;
		border-radius: .5em;
		padding: .5em 1em
	}
	.grey-button {
		background-color: #e9f3ee;
		border: 2px solid #999;
		color: #999;
		border-radius: .5em;
		padding: .5em 1em
	}
	.modal {
		position: absolute;
		top: 25%;
		left: calc(50% - 160px);
		width: 320px;
		border: 2px solid black;
		background-color: #e45b35;
	}
</style>