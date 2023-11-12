<script lang="ts">
	import { Task, Timer } from '$lib/classes';
    import {
		getAuth
	} from 'firebase/auth';
	import { firebaseApp } from '$lib/firebase';

    const auth = getAuth(firebaseApp);
	const user = {
		email: auth.currentUser ? auth.currentUser.email : '',
		password: '',
		isLoggedIn: auth.currentUser ? true : false,
		cred: auth.currentUser
	};

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
				{ name: 'make beds', isDone: false }
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
				{ name: 'clean up', isDone: false }
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
				{ name: '1 page', isDone: false }
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
		}
	];
	let taskId: number = -1;

	const tasks = arr.map((a) => {
		return new Task(a.id, a.name, a.timeLeft, a.icon, a.doneIcon, a.subTasks);
	});

	function finishTask(currentTask: Task) {
		//showModal = !showModal
		taskId = currentTask.id;
	}
</script>

<div class="big-grid">
	{#each tasks as task}
		<div class="task">
			<h5>{task.name}</h5>
			<img
				src={task.isDone ? task.doneIcon : task.icon}
				alt={'icon of ' + task.name}
				class="task-image"
			/>
			<ul>
				{#each task.subTasks as subTask}
					<li>
						<input type="checkbox" bind:checked={subTask.isDone} />
						{subTask.name}
					</li>
				{/each}
			</ul>
			{#if task.isDone == false}
				<button
					disabled={!task.canBeDone}
					class={task.canBeDone ? 'green-button' : 'grey-button'}
					on:click={() => finishTask(task)}
				>
					{task.canBeDone ? '✔️' : ''} Done
				</button>
			{/if}
		</div>
	{/each}
</div>
