<script context="module" lang="ts">
    import Todo from './todo.svelte';
</script>
<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Todo List by Tijana</title>
	<meta name="description" content="Todo app PWA" />
    <link rel="manifest" href="/todo/manifest.json">
</svelte:head>

<div class='body'> 
    <Todo />
</div>

<style>
    .body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        box-sizing: border-box;
        background-color: #e8d6eb;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        touch-action: manipulation;
    }
    
</style>