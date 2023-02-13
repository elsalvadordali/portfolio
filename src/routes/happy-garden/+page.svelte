<script lang="ts">
	import Sidebar from '../Sidebar.svelte';
	const one = '/hg-1.png';
	const two = '/hg-2.png';
	const three = '/hg-3.png';

	//TODO: align the layout
	const links = [
		{
			href: '/abracadabra',
			name: 'Abracadabra',
			current: false
		},
		{
			href: '/bunny-money/',
			name: 'Bunny Money',
			current: false
		},
		{
			href: '/happy-garden',
			name: 'Happy Garden',
			current: true
		},
		
	];
</script>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#a3c9a8" />
	<article>
		<div class="heading">
			<h1>Happy Garden</h1>
			<h2>No UX, only coding</h2>
		</div>
		<div class="img-caption">
			<img src={one} alt="Abracadabra check out page mockup" />
			<div class="text">
				<h3>About</h3>
				<p>
					In November 2022, <a href="https://girldevelopit.com/">Girl Develop It</a> hosted a health-themed
					hackathon. In a team of 8, I became the senior dev, and spent the first day planning and writing
					out bite-sized pieces the other members could work on.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={two} alt="Abracadabra item description page mockup" />
			<div class="text">
				<h3>Tech Stack</h3>
				<p>
					It was my first time collaborating! Although I enjoyed getting to know my group mates,
					most of the them were relatively new to coding, so a lot of the actual coding fell to me.
					But it also gave me the freedom to choose our tech stack. Since it was a three day
					hackathon, I decided to focus on the frontend (react), and leave the backend to firebase.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={three} alt="Abracadabra confirm page" />
			<div class="text">
				<h3>The hardest Part</h3>
				<p>
					The hardest part was planning. I usually have an idea in my head before I start a project,
					but this time, I had to write it out in detail. Some things didn't go according to plan,
					which means some of the members regrettably spent a lot of time writing css and code that
					didn't go anywhere. I learned that it's important to stay flexible, and not dwell on
					mistakes too long.
				</p>
				<h3>The End</h3>
				<p>
					We ended up building a fully-functional app within the deadline, and winning third place!
					It was out first hackathon, and it was complete success. It's still missing a few features
					(like a logout button), and the code could be cleaner, but we're actively maintaining
					it as a group.
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
