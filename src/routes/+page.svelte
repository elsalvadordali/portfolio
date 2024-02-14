<script lang="ts">
</script>

<svelte:head>
	<title>Tijana Jung frontend web developer</title>

	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
</svelte:head>
<main>
	<div class="empty" />
	<div class="name">
		<span class="name-font">Ti</span>
		<span class="name-font">ja</span>
		<span class="name-font">na</span>
	</div>
	<div class="blog">
		<ul class="pretty-list">
			<li>Award-winning</li>
			<li>UI designer &</li>
			<li>front end developer</li>
		</ul>
	</div>
	<div class="about">
		<h3>About</h3>
		<p>Top ten techs</p>
		<div class="icons">
			<i class="devicon-javascript-plain" title="Javascript" />
			<i class="devicon-svelte-plain" title="Svelte" />
			<i class="devicon-react-original" title="React.js" />
			<i class="devicon-solidjs-plain" title="Solid.js" />
			<i class="devicon-d3js-plain" title="d3 a library for displaying interactive charts" />
			<i class="devicon-css3-plain" title="CSS" />
			<i class="devicon-figma-plain" title="Figma" />
			<i class="devicon-tailwindcss-plain" title="Tailwind.css" />
			<i class="devicon-python-plain" title="Python (but only for school)" />
			<i class="devicon-java-plain" title="Java (but only in school)" />
		</div>
	</div>
	<div class="projects">
		<h3>Projects</h3>
		<p>Currently, finishing up my CS degree @ WGU, while hand-crafting pretty neat UIs</p>
	</div>
	<div class="contact">
		<h3>Contact</h3>
		<ul>
			<li><a href="mailto:tijano+jung@gmail.com">E-mail me</a></li>
			<li title="I only occasionally checked linked in">
				<i class="devicon-linkedin-plain" />
				<a href="https://www.linkedin.com/in/tijaname/">LinkedIn</a>
			</li>
		</ul>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		max-width: 1000px;
		min-height: 620px;
		font-family: 'DM Serif Display';
		gap: 2em;
		color: #404447;
		padding: 40px 0;
	}
	h3 {
		transition: 0.5s;
	}
	main div {
		min-width: 300px;
		min-height: 300px;
		width: 25%;
		padding: 2em;
		box-sizing: border-box;
		transition: 0.5s;
	}
	.name {
		background-color: #f0a082;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
	}
	.name span {
		font-size: 8em;
		line-height: 0.7em;
		text-transform: uppercase;
		letter-spacing: 5px;
		transition: 0.5s;
	}
	.name:hover span {
		text-shadow: -8px -8px 0 #dce8d9;
	}
	span,
	h3,
	p,
	li {
		cursor: default;
	}
	.blog {
		background-color: #c7dbe2;
		border-radius: 150px;
		border-top-left-radius: 5px;
		border-radius: 150px;
	}
	ul {
		padding-left: 24px;
	}
	ul li {
		height: 36px;
		font-size: 22px;
	}

	.about {
		background-color: #ffdc7c;
		border-radius: 5px;
		border-bottom-left-radius: 150px;
		text-align: right;
		box-shadow: -16px -16px 0 #bab39c;
	}
	.about:hover {
		box-shadow: none;
	}
	.about:hover h3 {
		text-shadow: -8px -8px 0 #bab39c;
	}
	.projects:hover h3 {
		text-shadow: -8px -8px 0 #d1bdcf;
	}
	.contact:hover h3 {
		text-shadow: -8px -8px 0 #ffdc7c;
	}
	.projects {
		background-color: #a0dbbf;
		border-radius: 5px;
		border-bottom-right-radius: 150px;
		border-bottom-left-radius: 150px;
	}
	.projects:hover {
		box-shadow: -16px -16px 0 #d1bdcf;
	}
	.blog:hover {
		box-shadow: -16px -16px 0 #f0a082;
	}
	.contact:hover {
		box-shadow: -16px -16px 0 #ffdc7c;
	}
	.contact {
		background-color: #d1bdcf;
		border-radius: 5px;
	}

	.pretty-list {
		list-style: none;
		padding: 0;
		margin: 2em 0 0 0em;
	}

	.icons {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5em 1em;
		min-height: 160px;
	}
	.icons i {
		font-size: 2em;
		cursor: default;
	}
	.icons i:hover {
		color: #686b6f;
	}
	@media (max-width: 1100px) {
		main {
			max-width: 80%;
			padding-bottom: 60px;
			padding-top: 40px;
		}
		.empty {
			min-height: 60px;
		}
	}
	@media (prefers-color-scheme: dark) {
		main {
			background-color: #404447;
		}
	}
</style>
