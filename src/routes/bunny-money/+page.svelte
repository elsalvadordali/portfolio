<script lang="ts">
	import { fly } from 'svelte/transition';
	import Sidebar from '../Sidebar.svelte';
	const parentPage = '/bunny-money/bunny-money-hi-fi-parents-page-mockup.png';
	const kidPage = '/bunny-money/bunny-money-hi-fi-kids-page-mockup.png';
	const homePage = '/bunny-money/bunny-money-hi-fi-home-mockup.png';

	const links = [
		{ name: 'Abracadabra', href: '/abracadabra', current: false },
		{ name: 'Bunny Money', href: '/bunny-money', current: true },
		{ name: 'Happy Garden', href: '/happy-garden', current: false }
	];
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Bunny Money: an app by Tijana Jung</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="body">
	<Sidebar {links} logoColor="#eaeaea" backgroundColor="#cfaea9" />
	<article in:fly={{ x: -300, duration: 900 }} out:fly={{ x: -300, duration: 600 }}>
		<div class="project-info-grid">
			<h1 class="project-name">Bunny Money</h1>
			<p class="tagline">A free progressive web app that teaches kids about financial literacy.</p>
			<h5 class="type">Type</h5>
			<p class="type-def">passion project</p>
			<h5 class="stack">Stack</h5>
			<ul class="stack-list">
				<li>TypeScript</li>
				<li>Svelte.js</li>
				<li>Tailwindcss</li>
				<li>Firebase</li>
			</ul>
			<h5 class="links">Links</h5>
			<ul class="links-list">
				<li>
					<a href="https://bunnymoney.app/" target="_blank" rel="noreferrer">live app</a><a
						href="#login">*</a
					>
				</li>
				<li>
					<a href="https://github.com/elsalvadordali/bunny-money" target="_blank" rel="noreferrer"
						>code (github)</a
					>
				</li>
				<li>
					<a
						href="https://www.figma.com/file/mGrbP43wissn4Sxl6F4kqJ/Bunny-Money?node-id=0%3A1&t=PzHSsKQ47nf5nXi9-0"
						target="_blank"
						rel="noreferrer">figma mockup</a
					>
				</li>
			</ul>
		</div>

		<div class="img-caption">
			<img src={homePage} alt="Bunny Money home page mockup" />
			<div class="text">
				<h3>Project Outline</h3>
				<p>
					My daughter was getting old enough for an allowance, but I seldomly carry cash. It was
					hard to keep track of how much she had, and how much she spent, so I though I could make
					an app to solve that problem. But I also wanted to show her the importance of savings, by
					essentially allowing her to put her money in a savings account and watching the interest
					accumulate.
				</p>
				<p>This is what I came up with.</p>
				<p>
					Essentially, there are two functional aspects of the app. One screen, where the parent
					manages the account (ie set the interest rate, 'send' money), and one where the kid can
					see their financial standing, and move their money around.
				</p>
				<p>
					It's essentially a bank account, where the parents are the bank, and there are no cards
					involved.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={parentPage} alt="The parent home page mockup of bunny money" />
			<div class="text">
				<h3>The Backend</h3>
				<p>
					The Backend uses Firebase for both storage of data as well as authentication. I decided to
					keep it simple and only use e-mail authentication. Only parents have proper accounts.
					Children login via the parent’s login, while supplying a child’s name. If the name matches
					the one stored in the parent’s account, they are able to login. I chose to do it this way
					to keep things simple. Since firebase uses a document type database, it is easier and
					faster to make just one query.
				</p>
				<h3>The Frontend</h3>
				<p>
					The Frontend was made using TypeScript and Svelte. Since it’s a small three “page” app, I
					opted for Svelte over Sveltekit because the later was still pre-beta, and it would have
					been overkill, for an app with just three pages.
				</p>
			</div>
		</div>
		<div class="img-caption">
			<img src={kidPage} alt="The kid's home page mockup of bunny money" />
			<div class="text">
				<h3>The Experience</h3>
				<p>
					This project taught me the importance of using TypeScript. The data flying around was
					complicated enough that I would have made a lot of mistakes without it. I also learned the
					importance of extracting functions and putting them in a separate file, as this helped cut
					down on the amount of code in each component, and helped me adhere to the DRY principle.
				</p>
				<p>
					By making it a progressive web app, I also learned a bit about manifest.js and service
					workers, though bunny money itself doesn't actually use service workers.
				</p>
			</div>
		</div>

		<p id="login" class="anchor">
			*use this to log in: username: <i>mrtest@test.com</i>, password <i>aaaaaa</i>
		</p>
	</article>
</div>

<style>
	h5,
	.project-info-grid p {
		margin: 0;
		margin-right: 0.5em;
	}
	h5 {
		border: 2px solid black;
		border-radius: 1em;
		padding: 0.5em;
		text-align: center;
		font-weight: 800;
		font-size: 20px;
	}

	p.type-def {
		margin: 1em 0.5em;
	}

	.type {
		border: 2px solid #f1c644;
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
