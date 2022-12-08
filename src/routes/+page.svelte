<script>
	import { fade } from "svelte/types/runtime/transition"
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Tijana Jung: Creative Frontend Developer</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>


<div class="container" in:fade >
	<div class='project'>
		BUNNY MONEY
	</div>
</div>

<style>
	.container {
		width: 100%
	}
	.project {
		background-color: white;
		width: 80%;
		padding: 1rem;
	}
</style>