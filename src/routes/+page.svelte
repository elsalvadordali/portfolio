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

	const links = [
		{ name: 'Abracadabra', href: '/abracadabra', current: false },
		{ name: 'Bunny Money', href: '/bunny-money', current: false },
		{ name: 'Happy Garden', href: '/happy-garden', current: false }
	];
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
	<Sidebar logoColor="#f5f7fc" backgroundColor="#f19c79" {links} />
	{#if $showLilyPads}
		<svg class="bg" in:fly={{ x: 500, duration: 900 }}>
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
		<article in:fly={{ x: -100, duration: 1000 }} out:fly={{ x: 100 }}>
			<h1>I'm Tijana</h1>

			<p>I’m always tinkering on a project or two.</p>

			<h4>My Skills</h4>
			<div class="grid">
				<p>TypeScript</p>
				<p>CSS</p>
				<p>Next.js</p>
				<p>React Native</p>
				<p>Sveltekit</p>
				<p>Git</p>
				<p>Swift</p>
				<p>UX design</p>
			</div>

			<div class="arrow" />
			<h4>My current project</h4>
			<p>I'm currently finishing up my CS degree, and working on an iOS app.</p>

			<footer>
				<h4>My Contact Info</h4>
				<p>
					Are you looking for a developer? Or do you just wanna reach out? Either way, I'd love to
					connect!
				</p>

				<a href="mailto:tijano@gmail.com">email me</a> &middot;
				<a href="https://www.linkedin.com/in/tijaname/">LinkedIn</a>
			</footer>
		</article>
	{/if}
</div>

<style>
	.bg {
		background-color: #16446d;
		height: 100vh;
		width: calc(100vw - 260px);
		margin-left: 260px;
	}
	h1,
	p {
		margin-bottom: 4vh;
	}
	.small {
		stroke-width: 2;
		stroke: #000;
		transition: 1s;
		cursor: pointer;
	}
	.grid {
		width: 100%;
		display: flex;
		flex-flow: row wrap;
	}
	.grid p {
		width: 25%;
		margin-bottom: 1vw;
	}
	h4 {
		font-size: 1.75em;
		margin: 0;
		margin-top: 2em;
	}
	footer {
		padding-bottom: 8vw;
	}
	@media (max-width: 799px) {
		.bg {
			margin-left: 0;
			width: 100vw;
		}

		p {
			font-size: 16px;
			margin-bottom: 32px;
			line-height: 24px;
		}
		.grid p {
			width: 50%;
		}
	}
</style>
