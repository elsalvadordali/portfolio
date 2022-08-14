<script context="module" lang="ts">
    import Calendar from './calendar.svelte';
</script>

<div class='body'> 
    <Calendar />
</div>

<style>
    .body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        background-color: #d9dcff;
    }
    date {
        font-size: 4rem;
    }
    @media screen and (min-width: 900px) {
        date {
            font-size: 32px;
        }
    }
</style>