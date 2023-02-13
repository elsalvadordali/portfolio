<script lang="ts">
	import Sidebar from '../../Sidebar.svelte';
	const confirm = '/abracadabra/abracadabra-confirmation-page.png';
	const itemDescription = '/abracadabra/abracadabra-app-item-description-page-mockup.png';
	const checkout = '/abracadabra/abracadabra-app-checkout-page.png';

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
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#57D491" />
	<article>
		<div class="heading">
			<h1>Abracadabra</h1>
			<h2>Part 4: Hi-fi & Testing</h2>
		</div>
		<div class="img-caption">
			<img src={checkout} alt="Abracadabra check out page mockup" />
			<div class="text">
				<h3>The Lesson</h3>
				<p>
					Once the hi-fi wireframe was created, I created a usability study. The point of the study
					was to find user pain points, and to see how we can improve the app based on those pain
					points.
				</p>
				<p>When I created an affinity map, a few things became glaringly obvious.</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={itemDescription} alt="Abracadabra item description page mockup" />
			<div class="text">
				<h3>The Results</h3>
				<p>
					For one, users did not want to have to sign up to browse products, so in this screen, I
					added an amount dropdown where the user can select the quantity
				</p>
				<p>It was likewise, confusing to some users that size and color options were missing.</p>
				<p>
					Something else I couldn’t help but notice, was that women were more likely to use two
					hands, and that is because the navigation was at the top, and their phone screens were 
					too large to comfortably use with one hand. I decided to move the navigation to the bottom.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={confirm} alt="Abracadabra confirm page" />
			<div class="text">
				<h3>The Frontend</h3>
				<p>
					Because this project was supposed to be a learning experience, and because my figma mockups
					were all for mobile, we bravely (and maybe a bit foolishly) decided to try our hand at
					using React Native. It wasn't that different from regular react from a technical
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
