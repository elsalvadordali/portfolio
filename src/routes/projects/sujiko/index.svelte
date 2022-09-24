<script lang="ts">
    import Sujiko from './sujiko.svelte'

let show = true
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sujiko</title>
    <link rel="icon" href="/sujiko/img/48.png" />
	<meta name="description" content="Sujiko" />
    <link rel="manifest" href="/sujiko/manifest.json">
    <link rel="apple-touch-icon" sizes="180x180" href="/sujiko/img/icon.png">
</svelte:head>


<div class='full'>
    <Sujiko />
</div>

<style>
    .full {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #5d7599;
    }
</style>