<script lang="ts">
	import Sidebar from '../Sidebar.svelte';
	const homepage = '/abracadabra/abracadabra-front-page.png';

	//TODO: align the layout
	const links = [
		{
			href: '/abracadabra',
			name: 'Intro',
			current: true
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
			current: false
		}
	];
</script>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#57D491" />
	<article>
		<div class="heading">
			<h1>Abracadabra</h1>
			<h2>Part 1: Intro</h2>
		</div>
		<div class="img-caption">
			<img src={homepage} alt="Abracadabra home page" />
			<div class="text">
				<h3>My first group project!</h3>
				<p>
					Abracadabra was built in six weeks for chingu.io--an amazing online platform for
					collaborating and gaining real-world experience.
				</p>
				<p>
					Everyone in the group put forth suggestions, but in the end, an “aliExpress clone” won.
					While I was excited to work on my first group project, I wasn’t exactly thrilled to be
					working on something so generic, but I'm proud of myself for speaking up and pitching this
					spin on it to our product owner.
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
