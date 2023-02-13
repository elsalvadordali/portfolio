<script lang="ts">
	import { fly } from 'svelte/transition';
	import Sidebar from '../Sidebar.svelte';

	const links = [
		{
			href: '/bunny-money',
			name: 'Ideation',
			current: true
		},
		{
			href: '/bunny-money/two',
			name: 'Lo-fi prototype',
			current: false
		},
		{
			href: '/bunny-money/three',
			name: 'Testing',
			current: false
		},
		{
			href: '/bunny-money/four',
			name: 'Hi-fi',
			current: false
		},
		{
			href: '/bunny-money/five',
			name: 'Development',
			current: false
		}
	];
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Bunny Money an app by Tijana Jung</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#cfaea9" />
	<article in:fly={{ x: -300, duration: 900 }} out:fly={{ x: -300, duration: 600 }}>
		<div>
			<h1>Bunny Money</h1>
			<h2>Part 1: Ideation</h2>
			<h3>The problem:</h3>
			<p>
				Financial Literacy is a critical tool for success later in life, yet schools in the United
				States don’t teach it.
			</p>
			<h3>The Goal:</h3>
			<p>A free app that teaches kids about financial literacy.</p>
			<h3>Constraints:</h3>
			<p>
				The app needed to be simple. So simple that a 6 year old could use, and understand it. It
				would be outside the scope of this project to allow kids to create any sort of card, so we
				need to team up with the parents to mimic the functionality of a bank, without an actual
				bank.
			</p>
		</div>
	</article>
</div>

<style>
	article {
		width: calc(100vw - 260px);
		max-height: 100vh;
		background-color: #eaeaea;
		color: black;
		padding: 4vh;
		overflow-y: scroll;
		margin-left: 260px;
		padding-left: 80px;
	}
	article div {
		max-width: 400px;
	}
	h1,
	h2 {
		font-size: 2em;
		margin-bottom: 1em;
	}
	p,
	h3 {
		margin-top: 3rem;
		margin-bottom: 1.5em;
	}
	@media (max-width: 800px) {
		article {
			width: 100%;
			padding-left: 70px;
			margin-left: 0;
		}
	}
</style>
