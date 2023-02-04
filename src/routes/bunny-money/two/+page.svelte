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
			current: true
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

<div class="body">
	<aside>
		<Logo />
		<div class="links">
			{#each links as link}
			<a href={link.href} class={link.current ? 'bold' : ''}>{link.current ? "> " : ""}{link.name}</a>
			{/each}
		</div>
	</aside>
	<article>
		<div>
			<h1>Bunny Money</h1>
			<h2>Part 2: Lo-fi prototype</h2>
			<h3>The construction:</h3>
			<p>
				The entire app consists of only three screens: a home screen, a page for parents, and a page
				for kids.
			</p>
			<h3>The Parent's Page:</h3>
			<p>
				Parent’s Page We wanted the parents to be able to essentially control things behind the
				scenes, much like a financial institution does for it’s customers. The parents can set the
				interest rate, as well as an allowance. They can also change the kid’s name, as well as
				delete the account.
			</p>
			<h3>The kid's page:</h3>

			<p>
				The child can transfer money between checking and savings accounts, see their money grow in
				their savings account, accumulate an allowance, ask for a loan, and request funds (interest
				free).
			</p>
		</div>
		<div class="screenshots">
			<div class="img-caption">
				<img src={homePageMockup} alt="Bunny Money home page mockup" />
				<p>The home page. Users can login or register</p>
			</div>
			<div class="img-caption">
				<img src={parentPageMockup} alt="Bunny Money parent's page mockup" />
				<p>Parents can see an overview of all children's account standings</p>
			</div>
			<div class="img-caption">
				<img src={newPageMockup} alt="Bunny Money create new account page mockup" />
				<p>Parents can also create a new account.</p>
			</div>
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
		justify-content: flex-start;
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
		align-items: center;
		min-height: 1600px;
	}
	.screenshots .img-caption {
		width: 100%;
		max-width: 240px;
		margin-top: 4em;
		margin-left: 4em;
	}
	.screenshots .img-caption:last-child {
		margin-top: 50vh;
	}
	.img-caption img {
		width: 100%;
	}
	.img-caption p {
		font-size: 16px;
	}
</style>
