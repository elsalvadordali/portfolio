<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Sidebar from './Sidebar.svelte';

	const links = [
		{ name: 'Abracadabra', href: '/abracadabra', current: false },
		{ name: 'Bunny Money', href: '/bunny-money', current: false },
		{ name: 'Happy Garden', href: '/happy-garden', current: false }
	];
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Tijana Jung: Software Engineer</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="body">
	<Sidebar logoColor="#f5f7fc" backgroundColor="#f19c79" {links} />
	
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
					Do you just wanna reach out? I'd love to connect!
				</p>

				<a href="mailto:tijano@gmail.com">email me</a> &middot;
				<a href="https://www.linkedin.com/in/tijaname/">LinkedIn</a>
			</footer>
		</article>

</div>

<style>
	
	h1,
	p {
		margin-bottom: 4vh;
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
