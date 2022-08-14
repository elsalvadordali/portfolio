<script context="module" lang="ts">
	import Body from '../routes/_body.svelte'
	import About from './about.svelte'
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Tijana Jung &middot; Front-end web dev</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


	<section class='body'>
		<About />
		<Body />
		
		
	</section>
	<footer>
		<p>Created by Tijana Jung 2022, using <a href='https://undraw.co/'>undraw.co illustrations</a></p>
	</footer>
<style>
	body {
		margin: 0;
		background-color: #f1afa8;
    	color: #000;
	}
	.body {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		margin: 0;
		width: 100%;
	}
	@media screen and (min-width: 600px) {
		.body {
			flex-flow: row nowrap;
		}
	}
	@media (prefers-color-scheme: dark) {
    body {
        background-color: #000;
        color: #f1afa8;
    }
    a {
        color: #f1afa8;
    }
}
</style>
