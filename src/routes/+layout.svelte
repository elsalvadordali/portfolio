<script lang='ts'>
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
	let waves: [number, number][] = []
    let open = false
	$: console.log(waves)
	onMount(async () => {
		const firstWave = []
		const secondWave = []
		for (let i = 0; i < MAX_NUMBER_OF_VERTICAL_LILY_PADS; i++) {
			for (let j = 0; j < MAX_NUMBER_OF_HORIZONTAL_LILY_PADS; j++) {
				let lilyPad = generateLilyPads(i, j, false);
				firstWave.push(lilyPad)
			}
		}
		for (let i = 0; i < MAX_NUMBER_OF_VERTICAL_LILY_PADS; i++) {
			for (let j = 0; j < MAX_NUMBER_OF_HORIZONTAL_LILY_PADS; j++) {
				let lilyPad = generateLilyPads(i, j, true);
				secondWave.push(lilyPad)
			}
		}	
		for (let i = 0; i < firstWave.length; i++) {
			lilyPads = [...lilyPads, firstWave[i], secondWave[i]]
		}
	});
</script>

<svg 
	width={WIDTH} 
	height={HEIGHT} 
	on:click={(e) => waves = wave(e, lilyPads, waves)} 
	on:keypress={() => console.log('key pressed')}
>
	{#each waves as wave}
		<circle cx={wave[0]} cy={wave[1]} class='wave' />
	{/each}
	{#if lilyPads.length == 0}
	<path
			d={'M ' + WIDTH / 2 + ',' + HEIGHT / 5 + PADS_SVG_PATHS[1]}
			class='small float-5'
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
        <slot></slot>
    {:else}
        <button on:click={() => open = !open}>Open</button>
    {/if}
</main>


<style>
    main {
        padding: 1rem;
        z-index: 1;
        display: flex;
    }
    .small {
        stroke-width: 2;
        stroke: black;		
        transition: 1s;
    }

</style>
