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
			current: false
		},
		{
			href: '/abracadabra/three',
			name: 'Lo-fi prototype',
			current: true
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
		<h2>Part 3: Lo-fi prototype</h2>

		<h3>The Problem</h3>
		<p>
			To be honest, I didn’t make a lo-fi prototype for this not only due to the time constraint,
			but also since the app heavily relied on images, scrolling, and swiping, it would be hard to
			get a proper experience to any tester. I pitched my idea to our Product Owner, who was a fan,
			and started designing in figma.
		</p>

		<h3>The Goal</h3>
		<p>
			The group even agreed to try to implement a “tinder-like” swiping functionality, if we had
			time. Spoiler alert: we didn't have time.
		</p>
		<h3>The Constraint</h3>
		<p>
			In a project such as this, it is important to outline priorities, and to adhere to them
			rigidly. 
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
