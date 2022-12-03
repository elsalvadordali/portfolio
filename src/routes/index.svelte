<script lang="ts">
	import { onMount } from 'svelte';
	import Info from './projects/new/Info.svelte';
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
		waves
	} from './pond';
	import type { LilyPadType } from 'src/types';
	let lilyPads: LilyPadType[] = [];


	onMount(async () => {
		for (let i = 0; i < MAX_NUMBER_OF_VERTICAL_LILY_PADS; i++) {
			for (let j = 0; j < MAX_NUMBER_OF_HORIZONTAL_LILY_PADS; j++) {
				let lilyPad = generateLilyPads(i, j, false);
				lilyPads = [...lilyPads, lilyPad]
			}
		}
		for (let i = 0; i < MAX_NUMBER_OF_VERTICAL_LILY_PADS; i++) {
			for (let j = 0; j < MAX_NUMBER_OF_HORIZONTAL_LILY_PADS; j++) {
				let lilyPad = generateLilyPads(i, j, true);
				lilyPads = [...lilyPads, lilyPad]
			}
		}
	});
	function clearClasses() {
		if (lilyPads.length > 0 && lilyPads[0].direction) {
			setTimeout(() => {
				console.log('clearing??')
				lilyPads.forEach((pad) => {
					pad.css = `small float-${pad.floatAnimation}`
				})
				lilyPads = lilyPads
			}, 15100)
		}
	}
	$: if (lilyPads.length > 0 && lilyPads[0].css.length > 13) clearClasses()
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Tijana Jung: Creative Frontend Developer</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<svg width={WIDTH} height={HEIGHT} on:click={(e) => (lilyPads = wave(e, lilyPads))}>
	<path
			d={'M ' + WIDTH / 2 + ',' + HEIGHT / 5 + PADS_SVG_PATHS[1]}
			class='small float-5'
			fill={COLORS[2]}
		/>
	{#each waves as wave}
		<circle cx={wave[0]} cy={wave[1]} class="wave" />
	{/each}
	{#each lilyPads as pad}
		<path
			d={'M ' + pad.x + ',' + pad.y + PADS_SVG_PATHS[pad.pathIndex]}
			class={pad.css}
			fill={COLORS[pad.colorIndex]}
			on:click={() => (pad = changeColor(pad))}
		/>
		
	{/each}
</svg>
<Info />
<footer>Color the lily pads. It's fun!</footer>

<style>
	
	svg {
		overflow: hidden;
	}
	.small {
		stroke: rgb(0, 0, 0);
		stroke-width: 2;
		transition: 1s;
	}

	.wave {
		stroke-width: 1px;
		fill: transparent;
		animation: animated-wave 15s 1;
		animation-timing-function: ease-in-out;
	}
	@keyframes animated-wave {
		0% {
			r: 0px;
			stroke: black;
		}
		100% {
			r: 200vw;
			stroke: transparent;
		}
	}
	footer {
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 2px solid #272f34;
	}

	@media (prefers-color-scheme: dark) {
		
		footer {
			background-color: #272f34;
			color: white;
		}
	}
</style>
