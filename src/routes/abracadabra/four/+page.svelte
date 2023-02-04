<script lang="ts">
	import Logo from '../../Logo.svelte';
    
    const itemDescription = '/abracadabra/abracadabra-app-item-description-page-mockup.png' 

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
			current: false
		},
		{
			href: '/abracadabra/four',
			name: 'Hi-fi & Testing',
			current: true
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
		<div>
			<h1>Abracadabra</h1>
			<h2>Part 4: Hi-fi & Testing</h2>
			
		</div>
		<div class="screenshots">
			<div class="img-caption">
				<img src={itemDescription} alt="Bunny Money home page mockup" />
				<div>
					<p>
						Once the hi-fi wireframe was created, I created a usability study. The point of the
						study was to find user pain points, and to see how we can improve the app based on those
						pain points.
					</p>
				</div>
			</div>
			<div class="img-caption">
				<img src={itemDescription} alt="The parent home page mockup of bunny money" />
				<div>
					<h3>The Parent's Page</h3>
					<p>
						The parent’s page displays a list of accounts, in alphabetical order. Grey icons
						indicate where the parent is able to change the child’s name, or delete the account.
						‘Edit’ buttons allow a parent to change the functionality of the accounts, such as
						changing the allowance amount and/or frequency for checking accounts, or the
						amount/frequency of interest in the savings account.
					</p>
				</div>
			</div>
			<div class="img-caption">
				<img src={itemDescription} alt="The kid's home page mockup of bunny money" />
				<div>
					<h3>The Child's Page</h3>
					<p>
						The Kid’s page is broken up into two sections: one for each type of account. The
						accounts are color coded te keep them separate in the child’s mind. The red hue was used
						in the checking account to hint at a negative connotation, while the savings account is
						draped in a blue hue to indicate the opposite. The language was simplified to keep
						things easy for young readers to understand.
					</p>
				</div>
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
		flex-direction: row;
		justify-content: flex-start;
	}
	article div:first-of-type {
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
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		padding-right: 1vw;
	}
	.img-caption {
		width: 100%;
		margin-bottom: 4vw;
		margin-left: 4em;
		display: flex;
		flex-flow: row nowrap;
	}
	.img-caption img {
		width: 200px;
		height: auto;
		margin-right: 2em;
	}
	.img-caption p {
		font-size: 16px;
		width: 320px;
		margin-bottom: 12px;
		line-height: 1.5em;
	}
	.img-caption:nth-child(2) {
		flex-direction: row-reverse;
	}

	.img-caption:nth-child(2) img {
		margin-right: 4em;
		margin-left: 2em;
	}
</style>
