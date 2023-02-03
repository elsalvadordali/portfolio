<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import {
		changeColor,
		generateLilyPads,
		MAX_NUMBER_OF_HORIZONTAL_LILY_PADS,
		MAX_NUMBER_OF_VERTICAL_LILY_PADS,
		PADS_SVG_PATHS,
		COLORS
	} from '$lib/pond';
	import Sidebar from './Sidebar.svelte';
	import { showLilyPads } from '$lib/store';
	import type { LilyPadType } from '$lib/types';

	let lilyPads: LilyPadType[] = [];

	for (let i = 0; i < MAX_NUMBER_OF_VERTICAL_LILY_PADS; i++) {
		for (let j = 0; j < MAX_NUMBER_OF_HORIZONTAL_LILY_PADS; j++) {
			let lilyPad = generateLilyPads(i, j, false);
			lilyPads.push(lilyPad);
		}
	}
	for (let i = 0; i < MAX_NUMBER_OF_VERTICAL_LILY_PADS; i++) {
		for (let j = 0; j < MAX_NUMBER_OF_HORIZONTAL_LILY_PADS; j++) {
			let lilyPad = generateLilyPads(i, j, true);
			lilyPads.push(lilyPad);
		}
	}
	console.log(lilyPads);
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Tijana Jung: Software Engineer</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="body">
	<Sidebar />
	{#if $showLilyPads}
		<svg class="bg">
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
	{:else}
		<article in:fly={{ x: -100 }} out:fly={{ x: 100 }}>
			<h1>Hi</h1>
			<h2>I'm Tijana</h2>
			<h2>A software engineer from Columbus, OH.</h2>
			<p>I love creating impactful pages that are fast, responsive and fun to look at.</p>
			<p>When I'm not coding, I love to read, paint and travel.</p>
			<h5>Click around on the left to see more</h5>
		</article>
	{/if}
</div>

<style>
	.bg {
		background-color: #6aa5a9;
		height: 99vh;
		width: 88vw;
	}

	article {
		margin-left: 12vw;
		margin-top: 4vw;
		max-width: 600px;
	}

	h1,
	h2 {
		font-weight: 300;
	}

	.small {
		stroke-width: 2;
		stroke: #000;
		transition: 1s;
	}
</style>
