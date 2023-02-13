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
			current: false
		},
		{
			href: '/bunny-money/five',
			name: 'Development',
			current: true
		}
	];
</script>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#cfaea9" />
	<article>
		<div class="heading">
			<h1>Bunny Money</h1>
			<h2>Part 5: Development</h2>
			<h3>The Fun begins:</h3>
		</div>
		<div class="img-caption">
			<img src={homePage} alt="Bunny Money home page mockup" />
			<div class='text'>
				<h3>The Backend</h3>
				<p>
					The Backend uses Firebase for both storage of data as well as authentication. I
					decided to keep it simple and only use e-mail authentication. If the name matches the
					one stored in the parent’s account, they are able to login. Only parents have proper
					accounts. Children login via the parent’s login, while supplying a child’s name. I
					chose to do it this way to keep things simple. Since firebase uses a document type
					database, it is easier and faster to make just one query.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={parentPage} alt="The parent home page mockup of bunny money" />
			<div class="text">
				<h3>The Frontend</h3>
					<p>
						The Frontend was made using TypeScript and Svelte. Since it’s a small three “page” app,
						I opted for Svelte over Sveltekit because the later was still pre-beta, and it would
						have been overkill.
					</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={kidPage} alt="The kid's home page mockup of bunny money" />
			<div class="text">
				<h3>The Lesson</h3>
				<p>
					This project taught me the importance of using TypeScript. The data flying around was 
					complicated enough that I would have made a lot of mistakes without it. I also learned
					the importance of extracting functions and putting them in a separate file, as this helped
					cut down on the amount of code in each component, and helped me adhere to the DRY principle.
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
