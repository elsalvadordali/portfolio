<script lang="ts">
	import Info from './projects/new/Info.svelte';
	import { browser } from '$app/env';
	let count = 0;
	let total = 0;
	let page = 0;
	let svg;
	const pads = [
		' q30,-45,82,-56l46,126l5,-136q87,-6,132,66q51,82,37,128q-21,88,-80,120q-58,39,-165,13q-78,-41,-88,-98q-21,-90,31,-163',
		' q102,-3,135,50q47,86,44,102q18,125,-37,155q-114,58,-199,33q-81,-27,-114,-128q-45,-107,30,-164q81,-55,141,-48',
		' q91,31,103,89q-45,16,-14,15q29,-11,29,2q28,68,8,109q-24,62,-57,77q-6,2,-14,0q-50,-59,-14,4q14,18,-19,24q-49,21,-82,13q-48,-12,-58,-25q56,-65,19,-35q-25,31,-34,28q-32,-11,-52,-39q-27,-30,-32,-64q-2,-44,16,-73q55,-7,6,-21q-9,-6,7,-21q34,-52,55,-52q28,-21,29,-6q22,35,16,-5q-6,-22,10,-21q66,-11,78,1',
		' q36,-103,95,-109q107,-51,148,-16q105,87,96,138q11,98,-38,139q-92,64,-173,45q-77,-21,-121,-85q-23,-49,-7,-112',
		' q65,-36,124,-13q-10,45,26,11q59,33,71,67q45,77,27,105q-4,76,-43,101q-29,35,-116,43q-63,11,-117,-24q-69,-58,-66,-107q71,-23,3,-41q0,-98,91,-142',
		' q54,-64,139,-60q-7,131,24,2q65,15,75,28l65,81q33,31,-10,130q-26,71,-87,86q-82,36,-168,-2q-87,-45,-79,-156q4,-67,41,-109',
		' q85,-27,146,21q-31,42,12,9q49,56,52,94q11,86,-29,137q-53,-34,-15,17q-29,49,-129,44q-93,-13,-135,-74q107,-74,-5,-25q-32,-58,-5,-123q16,-72,108,-100',
		' q13,-54,67,-56q45,-31,80,-19q105,4,102,32q69,61,60,95q22,81,-3,100q-9,48,-67,71q-48,46,-114,31q-56,14,-90,-33q-60,-18,-47,-74q-53,-81,12,-147'
	];
	const w: number = browser ? window.innerWidth : 1000;
	const h: number = browser ? window.innerHeight * 2 : 1000;
	const r = 30;

	type Item = {
		x: number;
		y: number;
		color: number;
		num: number;
		inWave: false;
	};

	const coords: Item[] = [];
	type Wave = [number, number];
	let waves: Wave[] = [];
	const maxHor = w / 80;
	const maxVer = h / 80;
	console.log('MAX HOR', maxHor);
	for (let i = 0; i < maxVer; i++) {
		for (let j = 0; j < maxHor; j++) {
			total = total + 1;
			const item = {
				x: 0,
				y: 0,
				color: Math.floor(Math.random() * 6),
				num: Math.floor(Math.random() * pads.length),
				inWave: false
			};

			item.x = Math.floor(Math.random() * (r * 2) + r * 2 * j);
			item.y = Math.floor(r * i);
			if (j + 1 == maxHor) console.log('WERE AT MAX', j);

			//if (item.color == 10) count = count + 1;
			coords.push(item);
		}
		console.log(maxVer, ' is max');
	}

	function increment(item: Item): Item {
		if (item.color >= 6) return item;
		else {
			count++;
			item.color = Math.floor(Math.random() * 10) + 6;
		}
		return item;
	}

	function isInPerimeter(clickCoords: [], lilyCoords: [], r) {
		console.log(clickCoords);
		let distance = Math.sqrt(
			(clickCoords[0] - lilyCoords[0]) ** 2 + (clickCoords[1] - lilyCoords[1]) ** 2
		);
		console.log(distance);
	}

	function wave(e: MouseEvent) {
		console.log(e.pageX, e.pageY);
		if (e.target.nodeName == 'path') return;

		for
		let count = 0;
		const [x, y] = [e.pageX, e.pageY];
		console.log(x, y);
		waves.push([x, y]);
		console.log(new Date());
		for (const coor of coords) {
			isInPerimeter([coor.x, coor.y], [x, y], 70);
		}
		console.log(new Date());
		waves = waves;
		svg.checkIntersection(waves, )

		/* //simply things for now
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
	<radialGradient id="0" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="1%" stop-color="#0b4d3d" />
		<stop offset="79%" stop-color="#084637" />
	</radialGradient>
	<radialGradient id="1">
		<stop offset="10%" stop-color="#1d6655" />
		<stop offset="90%" stop-color="#1d6655" />
	</radialGradient>
	<radialGradient id="2" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="0%" stop-color="#12443b" />
		<stop offset="100%" stop-color="#12443b" />
	</radialGradient>
	<radialGradient id="3" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="0%" stop-color="#0d423f" />
		<stop offset="78%" stop-color="#0d423f" />
	</radialGradient>
	<radialGradient id="4" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="5%" stop-color="#0c452c" />
		<stop offset="23.75%" stop-color="#0b472c" />
		<stop offset="42.5%" stop-color="#094a2c" />
		<stop offset="80%" stop-color="#054f2c" />
	</radialGradient>
	<radialGradient id="5" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="5%" stop-color="#0c452c" />
		<stop offset="23.75%" stop-color="#0b472c" />
		<stop offset="42.5%" stop-color="#094a2c" />
		<stop offset="80%" stop-color="#054f2c" />
	</radialGradient>
	<!--yella-->
	<radialGradient id="6" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#ecb865" />
		<stop offset="98%" stop-color="#ecb865" />
	</radialGradient>
	<!--light yellow-->
	<radialGradient id="7" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#ffb284" />
		<stop offset="98%" stop-color="#ffb284" />
	</radialGradient>
	<!--light green-->
	<radialGradient id="8" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#a9ddd6" />
		<stop offset="98%" stop-color="#a9ddd6" />
	</radialGradient>
	<!--light green-->
	<radialGradient id="9" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#df8053" />
		<stop offset="98%" stop-color="#df8053" />
	</radialGradient>
	<radialGradient id="10" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#fbc9be" />
		<stop offset="98%" stop-color="#fbc9be" />
	</radialGradient>
	<radialGradient id="11" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#706677" />
		<stop offset="98%" stop-color="#706677" />
	</radialGradient>
	<radialGradient id="12" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#a6808c" />
		<stop offset="98%" stop-color="#a6808c" />
	</radialGradient>
	<radialGradient id="13" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#91adc2" />
		<stop offset="98%" stop-color="#91adc2" />
	</radialGradient>
	<radialGradient id="14" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#cbdfbd" />
		<stop offset="98%" stop-color="#cbdfbd" />
	</radialGradient>
	<radialGradient id="15" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
		<stop offset="19%" stop-color="#d87f81" />
		<stop offset="98%" stop-color="#d87f81" />
	</radialGradient>
	{#each waves as wave}
		<circle cx={wave[0]} cy={wave[1]} class="wave" />
	{/each}
	{#each coords as c}
		<path
			d={'m ' + c.x * 7 + ' ' + c.y * 14 + pads[c.num]}
			transform={'scale( 0.2 )'}
			style={'transform: scale(.03)'}
			class={'float-' + Math.ceil(Math.random() * 8) + ' small '}
			fill={'url(#' + c.color + ')'}
			on:click={() => (c = increment(c))}
		/>
	{/each}
</svg>
<Info />
<footer>
	{count} / {total} colored lily pads
</footer>

<style>
	svg {
		background: rgb(44, 126, 139);
		background: radial-gradient(circle, rgba(44, 126, 139, 1) 4%, rgba(122, 154, 159, 1) 100%);
		overflow: hidden;
	}
	.small {
		stroke: rgb(0, 0, 0);
		stroke-width: 6;
		transition: 1s;
	}
	.float-1 {
		animation: floating-1 15.3s infinite;
	}
	.float-2 {
		animation: floating-2 11.2s infinite;
	}
	.float-3 {
		animation: floating-3 13.5s infinite;
	}
	.float-4 {
		animation: floating-4 9.7s infinite;
	}
	.float-5 {
		animation: floating-1 10s infinite;
	}
	.float-6 {
		animation: floating-2 9.3s infinite;
	}
	.float-7 {
		animation: floating-3 11.1s infinite;
	}
	.float-8 {
		animation: floating-4 9.9s infinite;
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

	@keyframes floating-1 {
		0% {
			transform: translate(0, 0) scale(0.2);
		}
		28% {
			transform: translate(4px, -5px) scale(0.2);
		}
		60% {
			transform: translate(-2px, -8px) scale(0.2);
		}
		100% {
			transform: translate(0px, 0) scale(0.2);
		}
	}
	@keyframes floating-2 {
		0% {
			transform: translate(0, 0px) scale(0.2);
		}
		33% {
			transform: translate(-10px, -5px) scale(0.2);
		}
		66% {
			transform: translate(5px, -5px) scale(0.2);
		}
		100% {
			transform: translate(0, 0px) scale(0.2);
		}
	}
	@keyframes floating-3 {
		0% {
			transform: translate(0, 0px) scale(0.2);
		}
		33% {
			transform: translate(3px, -5px) scale(0.2);
		}
		66% {
			transform: translate(-8px, -7px) scale(0.2);
		}
		100% {
			transform: translate(0, 0px) scale(0.2);
		}
	}
	@keyframes floating-4 {
		0% {
			transform: translate(0, 0px) scale(0.2);
		}
		33% {
			transform: translate(0px, -3px) scale(0.2);
		}
		66% {
			transform: translate(0px, 4px) scale(0.2);
		}
		100% {
			transform: translate(0, 0px) scale(0.2);
		}
	}
	@keyframes floating-5 {
		0% {
			transform: translate(0, 0) scale(0.2);
		}
		36% {
			transform: translate(3px, -4px) scale(0.2);
		}
		70% {
			transform: translate(7px, 2px) scale(0.2);
		}
		100% {
			transform: translate(0, 0) scale(0.2);
		}
	}
	@keyframes floating-6 {
		0% {
			transform: translate(2px, 0px) scale(0.2);
		}
		33% {
			transform: translate(-7px, -5px) scale(0.2);
		}
		66% {
			transform: translate(3px, -5px) scale(0.2);
		}
		100% {
			transform: translate(0, 0px) scale(0.2);
		}
	}
	@keyframes floating-7 {
		0% {
			transform: translate(0, 0px) scale(0.2);
		}
		33% {
			transform: translate(3px, -5px) scale(0.2);
		}
		66% {
			transform: translate(-4px, -2px) scale(0.2);
		}
		100% {
			transform: translate(0, 0px) scale(0.2);
		}
	}
	@keyframes floating-8 {
		0% {
			transform: translate(0, 0px) scale(0.2);
		}
		33% {
			transform: translate(0px, -3px) scale(0.2);
		}
		66% {
			transform: translate(0px, 4px) scale(0.2);
		}
		100% {
			transform: translate(0, 0px) scale(0.2);
		}
	}
	@media (prefers-reduced-motion) {
		.float-1,
		.float-2,
		.float-3,
		.float-4,
		.float-5,
		.float-6,
		.float-7,
		.float-8 {
			animation: none;
		}
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
