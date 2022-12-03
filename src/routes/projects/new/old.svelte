<script lang="ts">
	import { browser } from '$app/env';
	const w = browser ? window.innerWidth : 300;
	const h = browser ? window.innerHeight : 300;
	let shapes = [
		`q-41,4,-40,14l0,8q-39,-3,-41,13q-38,9,-29,33q5,32,1,36q-22,9,-14,26q-6,23,4,23q-24,15,-10,36q8,52,31,46q3,38,14,37q23,30,38,33q44,58,75,46q11,-9,23,10q49,43,116,-4q15,-11,15,-15q6,-7,3,-18q-9,-16,15,6q31,20,80,-39q41,-58,17,-143q-18,-115,-97,-140q-30,-28,-43,-17q-30,-22,-56,-15q-90,-4,-102,24`,
		`q12,112,111,151q168,52,218,13q65,-35,51,-152q-7,-86,-36,-153q-25,-84,-100,-81q-95,-13,-139,17q-83,52,-90,93q-23,45,-15,112`,
		`q33,-71,121,-90q124,-30,169,14q98,57,92,146q7,109,-50,179q-47,45,-117,46q-89,13,-139,-17q-69,-33,-90,-113q-35,-90,14,-165`,
		`q-2,-86,44,-108q71,-71,103,-64q128,-20,143,12q81,36,86,75q29,55,19,126q16,72,-29,137q-60,59,-122,62q-139,-4,-180,-47q-85,-92,-64,-193`,
		`q12,-60,79,-78q127,-77,158,-51q86,4,82,31q59,43,52,73q46,75,36,96q19,71,-16,111q-36,84,-86,90q-142,37,-186,-5q-96,-44,-98,-80q-37,-39,-20,-82q-28,-59,-1,-105`,
		`q28,-52,66,-54q133,-36,155,-20q95,23,105,93q24,79,11,132q7,97,-48,135q-65,43,-154,26q-102,2,-134,-53q-65,-79,-45,-162q-3,-67,44,-97`,
		`q30,-45,82,-56l46,126l5,-136q87,-6,132,66q51,82,37,128q-21,88,-80,120q-58,39,-165,13q-78,-41,-88,-98q-21,-90,31,-163`
	];
	type Item = {
		x: number;
		y: number;
		num: number;
	};
	const arr: Item[] = [];
	const xs: number[] = [];
	const ys: number[] = [];

	//must scale up by factor of 10 because of scaling later
	const r = Math.max(w / 3, 300);
	function createLeaf() {
		//create

		for (let i = 0; i < 20; i++) {
			for (let j = 0; j < (w / 300); j++) {
				const item = {
					x: 0,
					y: 0,
					num: Math.floor(Math.random() * shapes.length)
				};
				item.x = Math.floor(r * j);
				item.y = Math.floor(r * i);
				arr.push(item);
			}
		}
	}
	createLeaf();

	//'scale(' + w / 9995 + ')'
	//  ' rotate(' + 360 * Math.random() + ' ' + (shape.x + 30 ) + ' ' + (shape.y + 30 ) + ')'
</script>

<div id="screen">
	<svg width={w} height={h} id="svg" viewBox={`0 0 ${w} ${h}`}>
		<radialGradient id="0" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="1%" stop-color="#277265" />
			<stop offset="20.5%" stop-color="#1f6759" />
			<stop offset="40%" stop-color="#175c4d" />
			<stop offset="79%" stop-color="#084637" />
		</radialGradient>
		<radialGradient id="1">
			<stop offset="10%" stop-color="#1d6655" />
			<stop offset="30%" stop-color="#1d6655" />
			<stop offset="99%" stop-color="#13545b" />
		</radialGradient>
		<radialGradient id="2" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="0%" stop-color="#0a3b2d" />
			<stop offset="25%" stop-color="#0c3d31" />
			<stop offset="50%" stop-color="#0e3f34" />
			<stop offset="100%" stop-color="#12443b" />
		</radialGradient>
		<radialGradient id="3" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="0%" stop-color="#226667" />
			<stop offset="19.5%" stop-color="#1c5d5d" />
			<stop offset="39%" stop-color="#175452" />
			<stop offset="78%" stop-color="#0d423f" />
		</radialGradient>
		<radialGradient id="4">
			<stop offset="2%" stop-color="#236d5d" />
			<stop offset="21.25%" stop-color="#1d6655" />
			<stop offset="40.5%" stop-color="#185f4d" />
			<stop offset="79%" stop-color="#0d523e" />
		</radialGradient>
		<radialGradient id="5" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="5%" stop-color="#193c35" />
			<stop offset="23.5%" stop-color="#1b423c" />
			<stop offset="42%" stop-color="#1e4843" />
			<stop offset="79%" stop-color="#225552" />
		</radialGradient>
		<radialGradient id="6" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="5%" stop-color="#0c452c" />
			<stop offset="23.75%" stop-color="#0b472c" />
			<stop offset="42.5%" stop-color="#094a2c" />
			<stop offset="80%" stop-color="#054f2c" />
		</radialGradient>
		<radialGradient id="7">
			<stop offset="2%" stop-color="#236d5d" />
			<stop offset="21.25%" stop-color="#1d6655" />
			<stop offset="40.5%" stop-color="#185f4d" />
			<stop offset="79%" stop-color="#0d523e" />
		</radialGradient>
		<radialGradient id="8" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="5%" stop-color="#193c35" />
			<stop offset="23.5%" stop-color="#1b423c" />
			<stop offset="42%" stop-color="#1e4843" />
			<stop offset="79%" stop-color="#225552" />
		</radialGradient>
		<radialGradient id="9" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="5%" stop-color="#0c452c" />
			<stop offset="23.75%" stop-color="#0b472c" />
			<stop offset="42.5%" stop-color="#094a2c" />
			<stop offset="80%" stop-color="#054f2c" />
		</radialGradient>
		<radialGradient id="10" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="0%" stop-color="#0a3b2d" />
			<stop offset="25%" stop-color="#0c3d31" />
			<stop offset="50%" stop-color="#0e3f34" />
			<stop offset="100%" stop-color="#12443b" />
		</radialGradient>
		<radialGradient id="11" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="0%" stop-color="#0a3b2d" />
			<stop offset="25%" stop-color="#0c3d31" />
			<stop offset="50%" stop-color="#0e3f34" />
			<stop offset="100%" stop-color="#12443b" />
		</radialGradient>
		<radialGradient id="12" gradientTransform="translate(-0.5 -0.5) scale(2, 2)">
			<stop offset="0%" stop-color="#0a3b2d" />
			<stop offset="25%" stop-color="#0c3d31" />
			<stop offset="50%" stop-color="#0e3f34" />
			<stop offset="100%" stop-color="#12443b" />
		</radialGradient>
		{#each arr as shape, i}
			<path
				d={'M ' + shape.x + ' ' + shape.y + ' ' + shapes[shape.num]}
				fill={'url(#' + Math.floor(Math.random() * 13) + ')'}
				transform={'scale(' +
					.14 +
					')' +
					' rotate(' +
					360 * Math.random() +
					' ' +
					(shape.x + 30) +
					' ' +
					(shape.y + 30) +
					')'}
				class={shape.num % 2 === 0 ? 'ani' : 'generic'}
			/>
		{/each}
	</svg>
</div>

<style>
	svg {
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: #23212e;
	}
	.generic {
		transform: scale( calc( 100vw / 30 ) );
	}
	.ani {
		transform: scale( calc(.14ch / 2) );
		
	}
	@keyframes floating {
		0% { transform: translate(0,  0px) scale( calc( 400px / 100vw / 400px ) ); }
		33%  { transform: translate(10px, 15px) scale( .14 ); }
		66% { transform: translate(15px, 10px) scale( .14 ); }
		100%   { transform: translate(0, -0px) scale( .14 ); }
	}
</style>
