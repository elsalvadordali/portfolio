<script lang="ts">
	import Sidebar from '../../Sidebar.svelte';
	const cart = '/abracadabra/abracadabra-app-checkout.png';
	const confirm = '/abracadabra/abracadabra-confirm-checkout.png';
	const chekout = '/abracadabra/abracadabra-app-checkout-page.png';

	//TODO: align the layout
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
			current: false
		},
		{
			href: '/abracadabra/five',
			name: 'Development',
			current: true
		}
	];
</script>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#57D491" />
	<article>
		<div class="heading">
			<h1>Abracadabra</h1>
			<h2>Part 5: Development</h2>
			<h3>The Power of Friendship</h3>
		</div>
		<div class="img-caption">
			<img src={confirm} alt="The order confirmation modal" />
			<div class="text">
				<h3>The Lesson</h3>
				<p>
					Though this isn't my favorite project from a passion standpoint, it was a great experience
					because I got to collaborate with five other engineers. It wasn't always easy to
					coordinate schedules, but we were able to get a lot done. In six short weeks, we went from
					nothing to building a really decent prototype, and we did it all via the power of
					communication.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={cart} alt="The cart is not empty! There's a product in it" />
			<div class="text">
				<h3>The Backend</h3>
				<p>
					I wasn't a big part of the backend development, but we did use test-driven development,
					which I thought was a really cool practice. The code was written in TypeScript in an
					Express.js server, and the database was PostgreSQL.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={chekout} alt="Mockup page for payment details" />
			<div class="text">
				<h3>The Frontend</h3>
				<p>
					Because this project was supposed to be a learning experience, and because my figma
					mockups were all for mobile, we bravely (and maybe a bit foolishly) decided to try our
					hand at using React Native. It wasn't that different from regular react from a technical
					standpoint, but I did find the lack of CSS a bit... jarring. I wish we had more time to
					add some animations, but we ran out of time.
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
