<script context="module" lang="ts">
    import Calendar from './calendar.svelte';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calendar by Tijana</title>
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
        background-color: #d9dcff;

        color: black;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
  
    @media screen and (min-width: 900px) {
      
    }
</style>