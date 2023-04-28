<script lang="ts">
	import { fly } from 'svelte/transition';
	import Sidebar from '../Sidebar.svelte';

	const one = '/hg-1.png';
	const two = '/hg-2.png';
	const three = '/hg-3.png';

	const links = [
		{
			href: '/abracadabra',
			name: 'Abracadabra',
			current: false
		},
		{
			href: '/bunny-money/',
			name: 'Bunny Money',
			current: false
		},
		{
			href: '/happy-garden',
			name: 'Happy Garden',
			current: true
		}
	];
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Happy Garden: an app by Tijana Jung</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#a3c9a8" />
	<article in:fly={{ delay: 200, duration: 300, x: 500 }}>
		<div class="project-info-grid" in:fly={{ delay: 500, duration: 300, x: 500 }}>
			<h1 class="project-name">Happy Garden</h1>
			<p class="tagline">Hackathon winning app: a gratitude journal, but gamified</p>
			<h5 class="type">Type</h5>
			<p class="type-def">hackathon group project</p>
			<h5 class="stack">Stack</h5>
			<ul class="stack-list">
				<li>JavaScript</li>
				<li>React</li>
				<li>CSS</li>
				<li>Firebase</li>
			</ul>
			<h5 class="links">Links</h5>
			<ul class="links-list">
				<li>
					<a href="https://elsalvadordali.github.io/green-smile/" target="_blank" rel="noreferrer"
						>live app</a
					><a href="#login">*</a>
				</li>
				<li>
					<a href="https://github.com/elsalvadordali/green-smile" target="_blank" rel="noreferrer"
						>code (github)</a
					>
				</li>
			</ul>
		</div>
		<div class="center">
			<h2>Checkout a demo by Ellie</h2>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/e9GxeP1PMg0"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
		<div class="img-caption">
			<img src={one} alt="Abracadabra check out page mockup" />
			<div class="text">
				<h3>About</h3>
				<p>
					In November 2022, <a href="https://girldevelopit.com/">Girl Develop It</a> hosted a health-themed
					hackathon. In a team of 8, I became the senior-most dev, and spent the first day planning and
					writing out bite-sized pieces the other members could work on.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={two} alt="Abracadabra item description page mockup" />
			<div class="text">
				<h3>The Funnest Part</h3>
				<p>
					Since most of the team was relatively new to coding, so a lot of the actual coding fell on
					me. I live streamed myself coding for two days straight, and it was great. Especially when
					it came to debugging.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={three} alt="Abracadabra confirm page" />
			<div class="text">
				<h3>The Hardest Part</h3>
				<p>
					Having to plan out every minute detail was arduous, and worst of all, sometimes turned out
					wrong. Which means some of the members regrettably spent a lot of time writing css and
					code that didn't go anywhere. I learned that it's important to stay flexible, and not
					dwell on mistakes too long.
				</p>
				<h3>The End</h3>
				<p>
					We ended up building a fully-functional app within the deadline, and winning third place!
					It was out first hackathon, and it was complete success. It's still missing a few
					features, and the code could be cleaner, but we're actively maintaining it as a group.
				</p>
			</div>
		</div>
		<p id="login" class="anchor">
			*use this to log in: username: <i>abc@123.com</i>, password <i>aaaaaa</i>
		</p>
	</article>
</div>

<style>
	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 2em;
	}
	h2 {
		font-size: 1.25em;
	}
	img {
		width: 300px;
	}
	h5 {
		border: 2px solid black;
		border-radius: 1em;
		padding: 0.5em;
		text-align: center;
		font-weight: 800;
		font-size: 20px;
	}
	@media screen and (min-width: 600px) {
		.project-info-grid,
		.project-name {
			border-color: #a3c9a8;
			box-shadow: 1px 1px 0 #fff, 3px 3px 0 #a3c9a8;
		}
	}
	.type {
		border-color: #84b59f;
		box-shadow: 1px 1px 0 #fff, 3px 3px 0 #84b59f;
	}
	.stack {
		border-color: #69a297;
		box-shadow: 1px 1px 0 #fff, 3px 3px 0 #69a297;
	}

	.links {
		border-color: #50808e;
		box-shadow: 1px 1px 0 #fff, 3px 3px 0 #50808e;
	}
</style>
