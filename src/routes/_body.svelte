<script context="module" lang="ts">
    import Calculator from './projects/calculator/_calc-module.svelte'
    import Todo from './projects/todo/_todo-module.svelte'
    import Calendar from './projects/calendar/_cal-module.svelte'
    import Bunny from './projects/bunnymoney/_bm-module.svelte'
    import Sujiko from './projects/sujiko/_sujiko-module.svelte'
</script>

<aside>
    <h2>Projects</h2>
    <div class='padding'>
        <Calculator />
        <Bunny />
        <Sujiko />
        <Todo />
        <Calendar />
        
    </div>
</aside>

<style>
    aside {
        width: 100%;
    }
    h2 {
        margin-bottom: 2rem;
        margin-top: .5rem;
        font-size: 5rem;
        text-align: center;
        display: block;
        width: 100%;
    }
    .padding {
        width: 100%;
        padding: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
 
    @media screen and (min-width: 1300px) {
        .padding {
            display: block;
            column-count: 2;
            column-gap: 1rem;
            column-fill: balance;
            break-inside: avoid;
        }
        aside {
            width: 48%;
        }
    }

    /** add another around 1600 when you have more projects*/
</style>