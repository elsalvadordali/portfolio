<script lang="ts">
	import Logo from '../Logo.svelte';
	
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
		}
	];
</script>

<div class="body">
	<aside>
		<Logo />
		<div class="links">
			{#each links as link}
				<a href={link.href} class={link.current ? 'bold' : ''}>{link.name}</a>
			{/each}
		</div>
	</aside>
	<article>
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
	aside {
		background-color: #cfaea9;
		min-width: 260px;
		height: 100vh;
		width: 22%;
		color: white;
		padding: 2vw;
		padding-top: 4vw;
		padding-bottom: 4vw;
		box-sizing: border-box;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
	}
	article {
		width: 78%;
		max-height: 100vh;
		background-color: #d9d3c4;
		color: black;
		padding: 4vw;
		padding-left: 12vw;
		overflow-y: scroll;
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
</style>
