<script lang="ts">
	import Sidebar from '../../Sidebar.svelte';
	const parentPage = '/bunny-money/bunny-money-hi-fi-parents-page-mockup.png';
	const kidPage = '/bunny-money/bunny-money-hi-fi-kids-page-mockup.png';
	const homePage = '/bunny-money/bunny-money-hi-fi-home-mockup.png';

	//TODO: align the layout
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
			current: false
		},
		{
			href: '/bunny-money/four',
			name: 'Hi-fi',
			current: true
		},
		{
			href: '/bunny-money/five',
			name: 'Development',
			current: false
		}
	];
</script>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#cfaea9" />
	<article>
		<div class="heading">
			<h1>Bunny Money</h1>
			<h2>Part 4: Hi-fi</h2>
			<h3>The Mockup:</h3>
			<p>
				The hi-fidelity mockup was created using Figma, and the results of the user testing was
				taken into consideration.
			</p>
		</div>
		<div class="img-caption">
			<img src={homePage} alt="Bunny Money home page mockup" />
			<div class='text'>

			<p>
				The homepage is very bright and colorful, and uses colors that children of any gender find
				appealing. One login form is used for both parents and kids, with the kid account including
				an additional ‘name’ field, not pictured here.
			</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={parentPage} alt="The parent home page mockup of bunny money" />
			<div class="text">
				<h3>The Parent's Page</h3>
				<p>
					The parent’s page displays a list of accounts, in alphabetical order. Grey icons indicate
					where the parent is able to change the child’s name, or delete the account. ‘Edit’ buttons
					allow a parent to change the functionality of the accounts, such as changing the allowance
					amount and/or frequency for checking accounts, or the amount/frequency of interest in the
					savings account.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={kidPage} alt="The kid's home page mockup of bunny money" />
			<div class="text">
				<h3>The Child's Page</h3>
				<p>
					The Kid’s page is broken up into two sections: one for each type of account. The accounts
					are color coded te keep them separate in the child’s mind. The red hue was used in the
					checking account to hint at a negative connotation, while the savings account is draped in
					a blue hue to indicate the opposite. The language was simplified to keep things easy for
					young readers to understand.
				</p>
			</div>
		</div>
	</article>
</div>

<style>
	article {
		width: calc(100vw - 260px);
		max-height: 100vh;
		background-color: #eaeaea;
		color: black;
		overflow-y: scroll;
		margin-left: 260px;
		display: flex;
		flex-flow: column nowrap;
		box-sizing: border-box;
		align-items: center;
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
	.heading {
		width: 90%;
	}
	.img-caption {
		width: 90%;
		margin-bottom: 4vw;
	
		gap: 10%;
	}
	.text {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		
		grid-row-start: 2;

	}
	.img-caption img {
		width: 200px;
		height: auto;
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
	}
	.img-caption h3 {
		justify-self: start;
	}
	.img-caption p {
		font-size: 16px;
		margin-bottom: 12px;
		line-height: 1.5em;
		max-width: 400px;
	}

	@media (min-width: 980px) {
		.img-caption {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 1fr);
		}
		.img-caption .text {
			grid-column-start: 2;
			grid-row-start: 1;
		}
		.img-caption img {
			grid-column-start: 1;
			justify-self: end;
		}
		.img-caption:nth-child(even) img {
			grid-column-start: 2;
			justify-self: start;
		}

		.img-caption:nth-child(even) .text {
			grid-column-start: 1;
			justify-self: end;
		}
		.img-caption:nth-child(even) h3 {
			justify-self: start;
		}
	}
</style>
