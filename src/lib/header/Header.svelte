<script lang="ts">
	import Navbar from './Navbar.svelte'
let hey = 'undraw_well_done_re_3hpo.svg'
</script>

<Navbar />
	<header class='hero'>
		<h1 class='name'>Tijana Jung</h1>
		<div class='center'>
			<div class='grid'>
				<p class='left'>a <b>pretty cool</b></p>
				<p class='right'>front-end web developer</p>
			</div>
		</div>
		<img src={hey} alt='illustration of a faceless woman casually leaning on a website' class='img'/>
	</header>

	<p>
		I'm Tijana, and I'm currently studying computer science at SNHU. 
	</p>
<style>
	header {
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		margin-top: 5vh;
	}

	.name {
		font-size: 12vw;
	}
	.center {
		width: 10vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.grid {
		display: grid;
		grid-template-columns: 2;
		column-gap: 1rem;
		margin-left: 25vw;
	}
	.left {
		grid-column-start: 1;
	}
	.right {
		grid-column-start: 2;
		border-left: 3px solid #1a2949;
		padding-left: 1rem;
	}
	.left, .right {
		font-size: 3vw;
		max-width: 20vw;
	}
	.img {
		width: 42vw;
		height: auto
	}
	@media (prefers-color-scheme: dark) {
		.right {
			border-color: #f1afa8;
		}
	}
</style>
