<script lang="ts">
	import { each } from 'svelte/internal';

	let arr = [
		{
			id: 1,
			name: 'eat breakfast',
			timeLeft: 2100,
			icon: '/summer-camp/breakfast.png',
			doneIcon: '/summer-camp/breakfast2.png',
			subTasks: [
				{ name: 'make breakfast', isDone: false },
				{ name: 'eat breakfast', isDone: false },
				{ name: 'clean up', isDone: false },
				{ name: 'brush teeth', isDone: false }
			]
		}
	];
	
	
	function ping() {
		Notification.requestPermission().then(perm => {
			if (perm === 'granted') {
				new Notification('Hello, world!', {
					body: 'This is a notification from the Svelte tutorial'
				});
			}
		})
	}
	// const tasks = arr.map((t) => new Task(t.id, t.name, t.timeLeft, t.icon, t.doneIcon, t.subTasks));
</script>

<div>
	<button on:click={ping}>SEND NOTIFICATION</button>
</div>
