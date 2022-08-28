<script lang="ts">
    import Sujiko from './sujiko.svelte'

let show = true
</script>

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
    }
</style>