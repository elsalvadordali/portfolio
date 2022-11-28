<script lang="ts">
	import Happy from './Happy.svelte';
	import Bunny from './Bunny.svelte';
	import Stats from './Stats.svelte';
	import About from './About.svelte';

	let hideAll = false;
	let page = 0;
</script>

<div class="top white">
    {#if !hideAll}
	<button class="link" on:click={() => (page = 0)}>1. About</button>
	<button class="link" on:click={() => (page = 1)}>2. Happy Garden</button>
	<button class="link" on:click={() => (page = 2)}>3. Bunny Money</button>
	<button class="link" on:click={() => (page = 3)}>4. Gender Pay Gap</button>
    {/if}
	<button class="link" on:click={() => (hideAll = !hideAll)}>{hideAll ? '(open)' : 'X'}</button>
</div>
{#if !hideAll}
<div class="full">
	<div class="info">
		<div>
			{#if page == 3}
				<Stats />
			{:else if page == 2}
				<Bunny />
			{:else if page == 1}
				<Happy />
			{:else}
				<About />
			{/if}
		</div>
		<div class="nav white">
			{#if page >= 1}
				<button on:click={() => (page = page - 1)}>{'<'}</button>
			{/if}
			{#if page < 3}
				<button on:click={() => (page = page + 1)}>{'>'}</button>
			{/if}
		</div>
	</div>
</div>
{/if}

<style>
	.link {
		padding: 0;
		margin: 0;
		border: 0;
		box-shadow: none;
		background-color: transparent;
		border-bottom: 2px solid black;
		margin-right: 0.325rem;
		padding-bottom: 0.25rem;
		cursor: pointer;
		box-sizing: border-box;
	}
	.full {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		padding: 0;
		border-right: 2px solid white;
	}
	.top {
		width: 100vw;
		height: 5vh;
		padding: 1rem;
		border-bottom: 2px solid black;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
	.nav {
		padding: 1rem;
		display: flex;
		min-height: 10vh;
		display: flex;
		justify-content: space-evenly;
	}
	.white {
		background-color: white;
	}
	@media (min-width: 850px) {
		.info {
			height: 75vh;
			width: 45vw;
			box-sizing: border-box;
		}
		.full {
			width: 45vw;
			height: fit-content;
			top: 10vh;
		}
		.nav {
			height: 15vh;
			width: 45vw;
			box-sizing: border-box;
			max-height: 100px;
		}
		.top {
			padding-right: 2rem;
			height: 10vh;
		}
		.link {
			margin-right: 1rem;
		}
	}
	@media (prefers-color-scheme: dark) {
		.white {
			background-color: #272f34;
		}
		.info, .link {
			color: white;
            border-color: white;
		}
        
	}
</style>
