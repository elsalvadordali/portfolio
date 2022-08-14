<script lang="ts">
    export let url = ''
    export let show = true
</script>


<div class='menu'>
    <h4><a href={url + '/info'}>?</a></h4><h4 on:click={() => show = !show}>{show ? '✖' : '▼'}</h4><h4><a href={url}>□</a></h4>
</div>


<style>
    .menu {
        width: 100%;
        border-bottom: 2px solid black;
        text-align: right;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: .5rem;
        box-sizing: border-box;
    }
    h4 {
        margin: 0 .5rem;
        font-size: 1.5rem;
        color: black;
        text-decoration: none;

    }
    h4:hover, h4:active {
        color: #555;
    }
    a {
        text-decoration: none;
        color: black;
    }
</style>