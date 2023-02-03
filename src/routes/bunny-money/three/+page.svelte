<script lang="ts">
	import Logo from '../../Logo.svelte';
	const newPageMockup = '/bunny-money/bunny-money-lo-fi-create-new-account-mockup.png';
	const parentPageMockup = '/bunny-money/bunny-money-lo-fi-parent-page-mockup.png';
	const homePageMockup = '/bunny-money/bunny-money-lo-fi-home-mockup.png';

	const links = [
		{
			href: '/bunny-money',
			name: 'Ideation',
			current: false
		},
		{
			href: '/bunny-money/two',
			name: 'Lo-fi prototype',
			current: false
		},
		{
			href: '/bunny-money/three',
			name: 'Testing',
			current: true
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
			<h2>Part 3: Testing</h2>
			<h3>The Sessions:</h3>
			<p>Testing was conducted in person, and remote in live sessions. Separate sessions were conducted on adult and children participants. Each session was recorded and transcribed.</p>
            <h3>The results:</h3>
            <p>Overall, the app was well received. The children were able to use the app with minimal issues, and the parents were able to use the app with no issue.</p>
            
		</div>
		<div class="screenshots">
			<div class="img-caption">
				<img src={homePageMockup} alt="Bunny Money home page mockup" />
				<p>The Affinity map goes here</p>
			</div>
			<h3>The Parents</h3>
            <p>From the parent’s perspective the app was fairly easy to navigate. The only thing that could use improvement was editing the child’s name.</p>
            <h3>The Children</h3>
            <p>It was obvious that the app needed a lot of tweaks from the child’s perspective. For one, the vocabulary needed to be simplified. Many children were also unfamiliar with the concept of interest, and thus the point of having a savings account eluded them.</p>
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
		padding: 1vw;
		padding-left: 4vw;
		overflow-y: scroll;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
		margin-bottom: 2em;
	}
	.screenshots {
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		align-items: flex-start;
		min-height: 1600px;
        padding-right: 1vw;
	}
	.screenshots .img-caption {
		width: 100%;
		max-width: 240px;
		margin-top: 4em;
		margin-left: 4em;
	}
	.screenshots .img-caption:last-child {
		margin-top: 8em;
	}
	.img-caption img {
		width: 100%;
	}
	.img-caption p {
		font-size: 16px;
	}
</style>
