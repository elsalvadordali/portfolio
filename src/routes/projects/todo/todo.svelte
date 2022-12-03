<script lang="ts">
    import { tasks } from './store'
    import Addnew from './_addnew.svelte'
    type ItemType = {
        task: string,
        isComplete: boolean,
        date: Date
    }

    let list: ItemType[] = []
    const unsubscribe = tasks.subscribe(val => list = val)

    
    function markDone(item: ItemType) {
            item.isComplete = !item.isComplete
            tasks.updateOne(item)
            tasks.subscribe(val => list = val)
            list = list
    }
    function deleteTask(task: String) {
        const filtered = list.filter(listTask => listTask.task !== task.task
        )
        tasks.set(filtered)
        list = filtered
    }
    unsubscribe()
</script>


<div class='todo'>
    <h2>To-do list</h2>
    <ol>
    {#each list as item} 
        <li class={item.isComplete ? 'done' : 'incomplete'}>
            <button class='check' on:click={() => markDone(item)}>{item.isComplete ? '✓' : ''}</button>
            <p>{item.task}</p>
            <button class='delete' on:click={() => deleteTask(item)}>delete</button>
        </li>
    {/each}
    </ol>
    <Addnew />
</div>

<style>
    .todo {
        padding: .5rem;
        max-width: 560px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
        color: black;
        box-shadow: 5px 5px 0 black;
    }
    
    ol {
        padding: 0;
        margin: 0;
        width: 100%;
    }
    li {
        width: 100%;
        font-weight: 300;
        margin-bottom: .5rem;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
    li p {
        margin: 0;
    }
    .done p {
        text-decoration: line-through;
    }

    li .check {
        height: 24px;
        width: 24px;
        vertical-align: middle;
        border: 2px solid black;
        border-radius: .5rem;
        margin-right: 1rem;
    }
    
    .delete {
        display: none;
        padding: 0;
        margin-left: 1rem;
    }
    .done .delete {
        display: flex;
        padding: .25rem .5rem;
        align-self: flex-start;
    }
    button {
        padding: 6px;
    }
    .check {
        margin: 0;
    }
</style>