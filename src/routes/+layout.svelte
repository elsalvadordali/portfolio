<script lang="ts">
	import { onMount } from 'svelte';
	import {
		changeColor,
		generateLilyPads,
		HEIGHT,
		wave,
		MAX_NUMBER_OF_HORIZONTAL_LILY_PADS,
		MAX_NUMBER_OF_VERTICAL_LILY_PADS,
		PADS_SVG_PATHS,
		WIDTH,
		COLORS,
		coords
	} from '../lib/pond';
	import type { LilyPadType } from '../lib/types';
	let lilyPads: LilyPadType[] = [];
	let waves: [number, number][] = [];
	let open = false;
	$: console.log(waves);
	onMount(async () => {
		const firstWave = [];
		const secondWave = [];
		for (let i = 0; i < MAX_NUMBER_OF_VERTICAL_LILY_PADS; i++) {
			for (let j = 0; j < MAX_NUMBER_OF_HORIZONTAL_LILY_PADS; j++) {
				let lilyPad = generateLilyPads(i, j, false);
				firstWave.push(lilyPad);
			}
		}
		for (let i = 0; i < MAX_NUMBER_OF_VERTICAL_LILY_PADS; i++) {
			for (let j = 0; j < MAX_NUMBER_OF_HORIZONTAL_LILY_PADS; j++) {
				let lilyPad = generateLilyPads(i, j, true);
				secondWave.push(lilyPad);
			}
		}
		for (let i = 0; i < firstWave.length; i++) {
			lilyPads = [...lilyPads, firstWave[i], secondWave[i]];
		}
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Tijana Jung: Creative Frontend Developer</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<svg
	width={WIDTH}
	height={HEIGHT}
	on:click={(e) => (waves = wave(e, lilyPads, waves))}
	on:keypress={() => console.log('key pressed')}
>
	{#each waves as wave}
		<circle cx={wave[0]} cy={wave[1]} class="wave" />
	{/each}
	{#if lilyPads.length == 0}
		<path
			d={'M ' + WIDTH / 2 + ',' + HEIGHT / 5 + PADS_SVG_PATHS[1]}
			class="small float-5"
			fill={COLORS[2]}
		/>
	{/if}
	{#each lilyPads as pad, i}
		<path
			d={'M ' + pad.x + ',' + pad.y + PADS_SVG_PATHS[pad.pathIndex]}
			class={pad.css}
			fill={COLORS[pad.colorIndex]}
			on:click={() => (pad = changeColor(pad))}
			on:keydown={() => console.log('pressed key')}
		/>
	{/each}
</svg>

<main>
	{#if open}
		<header>
			<button class="link" on:click={() => (open = !open)}>X</button>
		</header>
		<slot />
		<footer>Hello</footer>
	{:else}
		<button on:click={() => (open = !open)}>Open</button>
	{/if}
</main>

<style>
	main {
		padding: 0 1rem;
		z-index: 1;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		overflow-y: scroll;
		min-height: 100vh;
		max-height: 200vh;
	}
	header {
		width: 100vw;

		background-color: white;
		padding: 1rem;
	}
	footer {
		background: white;
		width: 100vw;
		padding: 1rem;
	}
	.small {
		stroke-width: 2;
		stroke: black;
		transition: 1s;
	}
	.link {
		background-color: transparent;
		border: none;
		padding: 0.25rem;
		box-shadow: none;
	}
</style>
