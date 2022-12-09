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
		COLORS
	} from '../../lib/pond'
	import type { LilyPadType } from '../../lib/types';
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
	class='pond'
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
		
		<slot />
		<footer>
			Created by Tijana ♡
			<a href='https://github.com/elsalvadordali'><svg viewBox="0 0 128 128" class='icon'>
			<button class="link big" on:click={() => (open = !open)}>✖</button>

			<g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
			</svg></a> 			
			<button class="link big" on:click={() => (open = !open)}>✖</button>
		</footer>
	{:else}
		<button id='open-button' on:click={() => (open = !open)}>Open</button>
	{/if}
</main>

<style>
	.pond {
		background: rgb(44, 126, 139);
		background: radial-gradient(circle, rgba(44, 126, 139, 1) 4%, rgba(122, 154, 159, 1) 100%);
		border: 2px solid black;
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		overflow-x: hidden;
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
		width: 100vw;
		padding: 1rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		bottom: 0
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
	
</style>
