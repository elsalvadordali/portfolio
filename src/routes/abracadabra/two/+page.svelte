<script lang="ts">
	import Logo from '../../Logo.svelte';

	const links = [
		{
			href: '/abracadabra',
			name: 'Intro',
			current: false
		},
		{
			href: '/abracadabra/two',
			name: 'Ideation',
			current: true
		},
		{
			href: '/abracadabra/three',
			name: 'Lo-fi prototype',
			current: false
		},
		{
			href: '/abracadabra/four',
			name: 'Hi-fi & Testing',
			current: false
		},
		{
			href: '/abracadabra/five',
			name: 'Development',
			current: false
		}
	];
</script>

<div class="body">
	<aside>
		<Logo />
		<div class="links">
			{#each links as link}
				<a href={link.href} class={link.current ? 'bold' : ''}
					>{link.current ? '> ' : ''}{link.name}</a
				>
			{/each}
		</div>
	</aside>
	<article>
		<h1>Abracadabra</h1>
		<h2>Part 2: Ideation</h2>

		<h3>The Problem</h3>
		<p>How to take an e-commerce site, and make it unique?</p>

		<h3>The Goal</h3>
		<p>
			What if we ported the fun of window shopping to an app? Where a user can scroll infinitely to
			see random beautiful pictures of products that they didn’t even know they wanted?
		</p>
		<h3>The Constraint</h3>
		<p>
			Constrains: Time. Our team of six had six weeks to do this, so it couldn't be too big or too
			complex. 
		</p>
	</article>
</div>

<style>
	aside {
		background-color: #57d491;
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
		position: fixed;
	}
	article {
		margin-left: 22%;
		width: 78%;
		height: fit-content;
		background-color: #d9d3c4;
		color: black;
		padding: 1vw;
		padding: 4vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	h1,
	h2 {
		font-size: 2em;
		margin-bottom: 1em;
	}
	p,
	h3 {
		margin-bottom: 2em;
		width: 360px;
	}
</style>
