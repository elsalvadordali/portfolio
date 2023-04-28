<script lang="ts">
	import { fly } from 'svelte/transition';
	import Sidebar from '../Sidebar.svelte';
	const cart = '/abracadabra/abracadabra-app-checkout.png';
	const confirm = '/abracadabra/abracadabra-confirm-checkout.png';
	const chekout = '/abracadabra/abracadabra-app-checkout-page.png';

	let links = [
		{
			href: '/abracadabra',
			name: 'Abracadabra',
			current: true
		},
		{
			href: '/bunny-money/',
			name: 'Bunny Money',
			current: false
		},
		{
			href: '/happy-garden',
			name: 'Happy Garden',
			current: false
		}
	];
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Abracadabra: an app by Tijana Jung</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#57D491" />
	<article in:fly={{ x: -300, duration: 900 }} out:fly={{ x: -300, duration: 600 }}>
		<div class="project-info-grid">
			<h1 class="project-name">Abracadabra</h1>
			<p class="tagline">An addictive mobile window shopping app</p>
			<h5 class="type">Type</h5>
			<p class="type-def"><a href="https://www.chingu.io/">chingu.io</a> group project</p>
			<h5 class="stack">Stack</h5>
			<ul class="stack-list">
				<li>TypeScript</li>
				<li>React Native</li>
				<li>Express</li>
			</ul>
			<h5 class="links">Links</h5>
			<ul class="links-list">
				<li>
					<a
						href="https://github.com/chingu-voyages/v42-bears-team-35"
						target="_blank"
						rel="noreferrer">code (github)</a
					>
				</li>
				<li>
					<a
						href="https://www.figma.com/file/r3n13iYDQ9wdjaEoBtQYbS/abracadabra?node-id=8960%3A2&t=K0d24zAbt78eMUXW-0"
						target="_blank"
						rel="noreferrer">figma mockup</a
					>
				</li>
			</ul>
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
					I wasn't a big part of the backend development, but we did use test-driven development. 
					The code was written in TypeScript in an Express.js server, and the database was PostgreSQL.
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
	h5 {
		border: 2px solid black;
		border-radius: 1em;
		padding: 0.5em;
		text-align: center;
		font-weight: 800;
		font-size: 20px;
	}

	@media screen and (min-width: 600px) {
		.project-info-grid,
		.project-name {
			border-color: #57d491;
			box-shadow: 1px 1px 0 #fff, 3px 3px 0 #57d491;
		}
	}
	.type {
		border-color: #f1c644;
		box-shadow: 1px 1px 0 #fff, 3px 3px 0 #f1c644;
	}
	.stack {
		border-color: #57d491;
		box-shadow: 1px 1px 0 #fff, 3px 3px 0 #57d491;
	}
	.links {
		border-color: #3f4c53;
		box-shadow: 1px 1px 0 #fff, 3px 3px 0 #3f4c53;
	}
</style>
