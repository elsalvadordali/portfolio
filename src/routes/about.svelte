<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"> 

<div class='content'>
	<h1>Tijana</h1>
	<img src='/undraw_well_done_re_3hpo.svg' alt='illustration of me' />
	<div class='center'>
		<div class='tagline'>
			<p class='left'>a <b>pretty cool</b></p>
			<p class='right'>front-end web developer</p>
		</div>
	</div>
	<div class='padded'>
		<h3>I'm Tijana</h3>
		<p>and I'm <b>obsessed</b> with web development.</p>
		<p>
			I'm currently a a Computer Science student at WGU to round out my
			 knowledge so I can be a more <s>badass</s> balanced computer enginneer.
		</p>
		<p>
			I started learning JavaScript with freecodecamp, which is how I realized
			that I loved programming.
		</p>
		<p>
			Here are some things I've used and the score I'd give it: 
		</p>
		<div class='grid'>
			<div>
				<h6>typescript</h6>
				<i class="devicon-typescript-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>JavaScript</h6>
				<i class="devicon-javascript-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>Svelte</h6>
				<i class="devicon-svelte-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			
			<div>
				<h6>CSS</h6>
				<i class="devicon-css3-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>tailwind.css</h6>
				<i class="devicon-tailwindcss-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>firebase</h6>
				<i class="devicon-firebase-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>sqlite</h6>
				<i class="devicon-sqlite-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>postgresql</h6>
				<i class="devicon-postgresql-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>deno</h6>
				<i class="devicon-denojs-original colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;</h5>

			</div>
			<div>
				<h6>nodejs</h6>
				<i class="devicon-nodejs-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>d3js</h6>
				<i class="devicon-d3js-plain colored icon"></i>				
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>vue</h6>
				<i class="devicon-vuejs-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>trello</h6>
				<i class="devicon-trello-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>docker</h6>
				<i class="devicon-docker-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>react</h6>
				<i class="devicon-react-original colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>jest</h6>
				<i class="devicon-jest-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>Bulma.css</h6>
				<i class="devicon-bulma-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;&#11088;</h5>
			</div>
			
			<div>
				<h6>bootstrap.css</h6>
				<i class="devicon-bootstrap-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>wordpress</h6>
				<i class="devicon-wordpress-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>c</h6>
				<i class="devicon-c-plain colored icon"></i>
				<h5 class='score'>&#11088;&#11088;</h5>
			</div>
			<div>
				<h6>redux</h6>
				<i class="devicon-redux-original colored icon"></i>
				<h5 class='score'>&#128078</h5>
			</div>
		</div>
		
	</div>
</div>

<style>
	h1 {
		font-size: 6rem;
		width: 100%;
		text-align: center;
		margin: 0;
		margin-top: .5rem;
	}
	img {
		width: 95%;
	}
	h3 {
		font-size: 3rem;
		margin: 1rem 0;
	}
	.center {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h6 {
		font-size: 1rem;
		margin: .5rem 0 .25rem;
		display: block;
		text-align: center;
	}
	.icon {
		color: black;
		font-size: 3rem;
		display: block;
		text-align: center;
	}
	.score {
		display: block;
		text-align: center;
		margin: 0 0 .5rem 0;
	}
	.tagline {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-left: 5rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(7, 1fr);
		column-gap: 1rem;
	}
	.content {
		width: calc(100% - 2rem);
		margin: var(--column-margin-top) auto 0 auto;
		padding: 0 1rem;
		scroll-behavior: smooth;
		overflow: scroll;
	}
	.left {
		grid-column-start: 1;
	}
	.right {
		grid-column-start: 2;
		border-left: 3px solid #1a2949;
		padding-left: 1rem;
	}
	.padded {
		padding: 1rem;
	}

	@media screen and (min-width: 600px) {
		.content {
			width: calc(100% - 322px)
		}
	}
	@media screen and (min-width: 900px) {
		.content {
			width: 48vw;
			max-width: 800px;
		}
	}
</style>
