<script context="module" lang="ts">
    import Calculator from './calculator.svelte';
import calculator from './calculator.svelte'
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calculator</title>
	<meta name="description" content="Svelte demo app" />
    <link rel="manifest" href="/calc/manifest.json">
</svelte:head>

<div class='body'> 
    <Calculator />
</div>

<style>
    .body {
        width: 100vw;
        height: 100vh;
        margin: 0;
    }
</style>