


<script lang="ts">
	import Sidebar from '../../Sidebar.svelte';
	const homepage = '/abracadabra/abracadabra-front-page.png';

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
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#57D491" />
	<article>
		<div class="heading">
			<h1>Abracadabra</h1>
			<h2>Part 3: Lo-fi prototype</h2>
		</div>
		<div class="img-caption">
			<img src={homepage} alt="Abracadabra home page" />
			<div class="text">
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
