<script lang="ts">
	import { fly } from 'svelte/transition';

	export let logoColor: string = 'black';

</script>

<div class="button">
	<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
		><path
			d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
		/></svg
	>
</div>
<div class="wrapper">
	<div class="brand">
		<a href="/">
			<h2 class="name" in:fly={{ y: -200, duration: 200 }}>Ti</h2>
			<h2 class="name" in:fly={{ x: -300, duration: 300 }}>ja</h2>
			<h2 class="name" in:fly={{ x: -600, duration: 600 }}>na</h2>
		</a>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		width: 100%;
	}
	.brand {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		align-self: center;
		width: 100%;
	}

	.name {
		font-weight: 600;
		text-transform: uppercase;
		font-size: 4rem;
		border-bottom: 2px solid black;
		margin-top: 0.325em;
		width: fit-content;
	}
	a {
		text-decoration: none;
		width: fit-content;
	}
	@media (prefers-color-scheme: dar) {
		.name {
			color: white;
			stroke: white;
		}
	}
	@media (max-width: 799px) {
		.brand {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
	@media (min-width: 800px) {
		.button {
			display: none;
		}
	}
</style>
