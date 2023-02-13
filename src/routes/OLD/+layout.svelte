<script lang="ts">
	export const prerender = true;

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
		COLORS
	} from '../../lib/pond'
	import type { LilyPadType } from '../../lib/types';
	let lilyPads: LilyPadType[] = [];
	let waves: [number, number][] = [[0,0], [0,0,], [0,0]];
	let open = false;
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
		var c = document.getElementById("pond");
		var ctx = c.getContext("2d");
		for (let i = 0; i < firstWave.length; i++) {
			//lilyPads = [...lilyPads, firstWave[i], secondWave[i]];
			ctx.moveTo(firstWave[i].x, firstWave[i].y);

			ctx.strokeStyle = '#000';
			ctx.lineWidth = 1;
			ctx.fillStyle = '#000'

			var p = new Path2D(PADS_SVG_PATHS[firstWave[i].pathIndex]);
			ctx.stroke(p);
			ctx.fill(p);
		}
		
		
	});


</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Tijana Jung: Creative Frontend Developer</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<canvas
	id='pond'
	class='pond'
	width={WIDTH}
	height={HEIGHT}
	on:click={(e) => (wave(e, lilyPads, waves))}
	on:keypress={() => console.log('key pressed')}
<<<<<<< HEAD:src/routes/(app)/+layout.svelte
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
	{#each lilyPads as pad}
		<path
			d={'M ' + pad.x + ',' + pad.y + PADS_SVG_PATHS[pad.pathIndex]}
			class={pad.css}
			fill={COLORS[pad.colorIndex]}
			on:click={() => (pad = changeColor(pad))}
			on:keydown={() => console.log('pressed key')}
		/>
	{/each}
</svg>
=======
/>
>>>>>>> ux:src/routes/OLD/+layout.svelte

<main>
	{#if open}
		<slot />
		<footer>
			<p>Created by <a href='mailto:tijano@gmail.com'>Tijana ♡</a></p>
			<a href='https://github.com/elsalvadordali'>
				<i class="devicon-github-original colored"></i>
			</a> 
			<a href='https://www.linkedin.com/in/tijaname/'>
				<i class="devicon-linkedin-plain colored"></i>
			</a>		
			<button class="link big" on:click={() => (open = !open)}>✖</button>
		</footer>
	{:else}
		<button id='open-button' on:click={() => (open = !open)}>Open</button>
	{/if}
</main>

<style>
	.pond {
		margin: 0;
		z-index: 0;
	}
	main {
		padding: 0 1rem;
		z-index: 1;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		box-sizing: content-box;
	}
	footer {
		background: white;
		width: 100%;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		bottom: 0
	}
	footer p, footer a {
		margin-right: 1rem
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
	.big {
		font-size: 24px;
		padding: 0 1rem;
		margin: 0;
		cursor: pointer;
	}
	.big:hover {
		margin: 0
	}
	#open-button {
		position: sticky;
		top: calc(100vh - 30px);
		left: calc(100vw - 75px)
	}
	.icon {
		height: 24px;
		background-color: white;
	}
	
	.epicenter {
		stroke: navy;
		fill: navy
	}
	@media screen and (min-width: 800px) {
		main {
			padding: 0
		}
	}
</style>
