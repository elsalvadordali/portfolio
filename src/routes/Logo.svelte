<script lang="ts">
	import { fly } from 'svelte/transition';
	import { showLilyPads } from '$lib/store';
	import { COLORS, HEIGHT, PADS_SVG_PATHS, WIDTH } from '../lib/pond';
	import { toggleLilyPads } from '$lib/store';

	export let logoColor;
	export let handleMobileIconClick;

	console.log('COLOR', logoColor);
</script>

<div class="button">
	<button on:click={handleMobileIconClick}
		><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
			><path
				d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
			/></svg
		></button
	>
</div>
<div class="wrapper" in:fly={{ x: -600, duration: 900 }}>
	<div class="brand" in:fly={{ x: -300, duration: 300 }}>
		<svg on:click={toggleLilyPads} on:keydown={toggleLilyPads}>
			<path
				d={'m ' + 11 + ',' + 44 + PADS_SVG_PATHS[2]}
				class="logo float-5"
				fill={$showLilyPads ? 'none' : logoColor}
			/>
		</svg>
		<a href="/"><h2 class="name">Tijana</h2></a>
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
	.brand svg {
		height: 80px;
		width: 80px;
		transform: scale(0.33);
		background-color: transparent;
		cursor: pointer;
	}
	.logo {
		stroke-width: 7;
		stroke: #000;
		transition: 1s;
	}
	.name {
		font-family: 'DM Mono', monospace;
		font-weight: 600;
		text-transform: uppercase;
		font-size: 2rem;
		border-bottom: 2px solid black;
		margin-top: 0.325em;
		width: fit-content;
	}
	a {
		text-decoration: none;
		width: fit-content;
	}
	.button button {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background-color: transparent;
		border: none;
		box-shadow: none;
		padding: 6px 12px;
	}
	@media (prefers-color-scheme: dar) {
		.logo,
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
