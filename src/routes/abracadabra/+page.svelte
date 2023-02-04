<script lang="ts">
	import Logo from '../Logo.svelte';

	const links = [
		{
			href: '/abracadabra',
			name: 'Ideation',
			current: true
		},
		{
			href: '/abracadabra/two',
			name: 'Ideation',
			current: false
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
		<h2>Part 1: Intro</h2>

		<h3>My first group project!</h3>
		<p>
			Abracadabra was built in six weeks for chingu.io--an amazing online platform for collaborating
			and gaining real-world experience.
		</p>
		<p>
			Everyone in the group put forth suggestions, but in the end, an “aliExpress clone” won. While
			I was excited to work on my first group project, I wasn’t exactly thrilled to be working on
			something so generic. 
		</p>
	</article>
</div>

<style>
	aside {
		background-color: #57D491;
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
