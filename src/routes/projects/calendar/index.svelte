<script context="module" lang="ts">
    import Calendar from './calendar.svelte';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calendar by Tijana</title>
    <link rel="icon" href="/cal/img/icon.png" />

	<meta name="description" content="Calendar app PWA" />
    <link rel="manifest" href="/calendar/manifest.json">
</svelte:head>

<div class='body'> 
    <Calendar />
</div>

<style>
    .body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        background-color: #dce2d4;
        color: black;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

</style>