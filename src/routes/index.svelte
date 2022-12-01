<script lang="ts">
	import Info from './projects/new/Info.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	let count = 0;
	let total = 0;
	let page = 0;
	let svg;
	const pads = [
		' c0,0,3.232,18.653,21.278,19.704c18.047,1.051,28.551,-6.568,30.167,-9.984c1.617,-3.415,10.084,-9.195,5.775,-24.695c-4.31,-15.5,-19.242,-19.966,-19.242,-19.966c0,0,-15.891,-4.992,-23.972,0c-8.08,4.991,-13.834,16.344,-15.181,22.912c-1.347,6.568,1.175,12.029,1.175,12.029z',
		' c0,0,0,6.137,6.161,11.573c0,0,4.96,-3.419,2.999,3.376c11.202,7.067,19.405,10.6,31.167,3.805c0,0,-1.68,-7.682,4.201,-1.702c14.842,-11.687,14.965,-20.314,14.965,-26.837c0,0,-11.202,-0.407,0,-3.668c-5.601,-17.396,-19.166,-22.153,-19.166,-22.153c0,0,-5.881,6.975,-5.041,-1.994c-20.163,0,-23.524,5.256,-26.885,7.702c0,0,3.081,5.708,-3.64,3.533c-7.561,12.775,-4.761,26.365,-4.761,26.365z',
		' c0,0,-2.92,8.767,5.864,18.65c0,0,18.668,-17.374,5.491,3.489c16.745,16.471,37.883,0,37.883,0c0,0,16.197,-9.529,7.961,-32.863c-8.235,-23.334,-24.706,-20.589,-24.706,-20.589c0,0,-18.393,-1.098,-26.629,9.609c-8.235,10.706,-5.864,21.704,-5.864,21.704z',
		' c0,0,6.929,-3.879,13.916,-2.073c0,0,-1.165,17.013,5.49,1.088c8.484,2.134,11.146,5.91,13.641,8.866c2.495,2.955,8.661,10.999,7.33,20.686c-1.331,9.686,-5.667,16.747,-8.328,19.867c-2.662,3.119,-11.612,11.655,-26.917,8.207c-15.305,-3.447,-22.337,-11.656,-23.834,-21.343c-1.497,-9.686,-0.986,-17.074,4.171,-24.298c5.157,-7.224,10.314,-9.358,12.476,-10.179c2.163,-0.821,2.055,-0.821,2.055,-0.821z',
		' c3.927,-15.582,7.769,-20.699,19.27,-24.948c1.523,-0.563,3.012,-0.977,4.449,-1.271c9.407,-1.927,16.573,1.271,16.573,1.271c0,0,14.306,5.383,17.953,17.565c3.646,12.182,0,20.815,0,20.815c0,0,-2.805,8.58,-8.696,11.98c-5.891,6.232,-17.391,8.226,-21.318,7.659c-3.927,-0.566,-17.953,-5.087,-21.88,-9.903c-5.89,-7.649,-6.912,-12.119,-6.351,-23.168z',
		' c0,0,2.689,7.847,9.12,11.486c0,0,10.382,-8.891,5.349,4.547c5.872,2.239,22.09,8.051,35.512,-4.547c10.346,-14.837,8.376,-21.448,8.096,-27.327c0,0,-8.655,-1.16,-3.622,-7.878c-8.668,-14.837,-16.777,-18.589,-34.673,-16.35c-17.896,2.24,-21.151,22.558,-21.151,22.558c0,0,-0.503,10.868,0,13.948c0.919,0.991,1.369,3.563,1.369,3.563z',
		' c0,0,-6.436,1.957,-9.546,10.511c2.721,1.555,3.075,6.609,-1.98,5.443c-3.888,12.053,-1.755,20.32,6.799,29.651c8.554,9.332,21.086,9.115,21.086,9.115c0,0,17.994,0.892,25.381,-12.717c5.055,-15.552,7.776,-19.828,0,-37.713c-11.664,-13.22,-30.975,-9.135,-30.975,-9.135z',
		' c0,0,-3.085,5.726,-1.083,12.56c0,0,15.459,-0.923,5.086,9.605c3.094,5.172,6.551,11.636,15.832,13.114c9.28,1.478,21.29,2.489,30.025,-7.854c3.639,-5.172,6.187,-8.4,7.825,-14.865c1.638,-6.465,-0.364,-20.872,-5.641,-25.305c0,0,-7.825,2.217,-6.187,-5.356c-7.825,-6.465,-18.743,-5.663,-18.743,-5.663c0,0,-12.92,-1.171,-20.745,9.542c-4.185,5.91,-6.369,14.222,-6.369,14.222z'
	];
	const w: number = browser ? window.innerWidth : 1000;
	const h: number = browser ? window.innerHeight * 2 : 1000;
	const r = 35;
	const colors = [
		'0b4d3d',
		'084637',
		'1d6655',
		'12443b',
		'0c452c',
		'094a2c',
		'0d423f',
		'0b472c',
		'054f2c',
		'ecb865',
		'ffb284',
		'd87f81',
		'cbdfbd',
		'91adc2',
		'a6808c',
		'706677',
		'fbc9be',
		'df8053',
		'a9ddd6'
	];
	type Item = {
		x: number;
		y: number;
		color: number;
		num: number;
		inWave: number;
		float: number;
		distance?: number;
	};

	let coords: Item[] = [];
	type Wave = [number, number];
	let waves: Wave[] = [];
	const maxHor = w / 80;
	const maxVer = h / 80;
	onMount(async () => {
		console.log('mounted');
		for (let i = 0; i < maxVer; i++) {
			for (let j = 0; j < maxHor; j++) {
				total = total + 1;
				const item = {
					x: 0,
					y: 0,
					float: Math.ceil(Math.random() * 9),
					color: Math.floor(Math.random() * 9),
					num: Math.floor(Math.random() * pads.length),
					inWave: 0
				};
				const prevX = (j != 0 && coords[coords.length - 1].x) || -30;
				const prevY = (i > 0 && coords[coords.length - Math.floor(maxHor)].y) || -30; //should get the Ycoord of above
				item.x =
					prevX +
					Math.min(Math.max(Math.floor(Math.random() * (r * 3.3)), 50), w - Math.max(w / 10, 35));
				if (item.x > w) item.x = w - w / 10;
				item.y = prevY + Math.max(Math.floor(Math.random() * (r * 3.5)), 50);
				coords.push(item);
			}
		}
		coords = coords;
		console.log(coords);
	});
	function increment(item: Item): Item {
		if (item.color >= 10) return item;
		else {
			count++;
			item.color = Math.floor(Math.random() * 10) + 9;
		}
		return item;
	}

	function returnDistance(clickCoord: number[], coord: Item) {
		return Math.sqrt((clickCoord[0] - coord.x) ** 2 + (clickCoord[1] - coord.y) ** 2);
	}

	function wave(e: MouseEvent) {
		console.log('CLICKED', e.pageX, e.pageY);
		if (e.target.nodeName == 'path') return;

		const x = e.pageX;
		const y = e.pageY;
		console.log('CLICKED ON', x, y);
		let count = 0;

		waves.push([x, y]);

		for (const coord in coords) {
			let distance = returnDistance([x, y], coords[coord]);
			coords[coord].distance = distance;
		}
		console.log(coords);
		waves = waves;

		let waveCount = 1;
		const checking = setInterval(() => {
			console.log('Running,= ', waveCount);
			if (waveCount > 17) {
				console.log('waving');
				for (const c in coords) {
					coords[c].inWave = 0;
				}
				coords = coords
				clearInterval(checking);
			}
			for (const coord in coords) {
				if (
					typeof coords[coord].distance == 'number' &&
					coords[coord].distance < waveCount * (w / 17)
				) {
					if (waveCount >= 13) coords[coord].inWave = 0
					else coords[coord].inWave = waveCount < 6 ? waveCount : 6;

				}
			}
			waveCount++;
		}, 510);
		console.log('WAVES', waves);

		//svg.checkIntersection(waves);

		//simply things for now
		/*
		waves = waves;
		const add3 = setInterval(() => {
			count++;
			waves.push([x, y]);
			waves = waves;
			if (count == 3) clearInterval(add3);
		}, 450);

		setTimeout(() => {
			waves.pop();
			waves.pop();
			waves.pop();
			waves.pop();
			console.log('popped', waves);
		}, 11000);

		*/
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Tijana Jung: Creative Frontend Developer</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<svg width={w} height={h} on:click={(e) => wave(e)} bind:this={svg}>
	{#each waves as wave}
		<circle cx={wave[0]} cy={wave[1]} class="wave" />
	{/each}
	{#each coords as c}
		<path
			d={'M ' + c.x + ',' + c.y + pads[c.num]}
			class={'float-' + c.float + ' small ' + 'wave-' + c.inWave + '-' + c.color}
			fill={'#' + colors[c.color]}
			on:click={() => (c = increment(c))}
		/>
	{/each}
</svg>
<Info />
<footer>Color the lily pads. It's fun!</footer>

<style>
	svg {
		background: rgb(44, 126, 139);
		background: radial-gradient(circle, rgba(44, 126, 139, 1) 4%, rgba(122, 154, 159, 1) 100%);
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
		svg {
			background: rgb(10, 62, 79);
			background: radial-gradient(circle, rgba(10, 62, 79, 1) 4%, rgba(24, 76, 103, 1) 100%);
		}
		footer {
			background-color: #272f34;
			color: white;
		}
	}
</style>
