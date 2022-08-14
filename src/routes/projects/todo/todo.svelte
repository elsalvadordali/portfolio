<script lang="ts">
    import { tasks } from './store'
    let list = []
    const unsubscribe = tasks.subscribe(val => list = val)

    let newTask = ''
    function addNew(e: Event) {
        e.preventDefault()
        
        tasks.add({task: newTask, isComplete: false, date: new Date()})
        tasks.subscribe(val => list = val)
        //localStorage.setItem('todo', JSON.stringify(list))
        newTask = ''
    }
    function markDone(item) {
            item.isComplete = !item.isComplete
            tasks.updateOne(item)
            tasks.subscribe(val => list = val)
            console.log(list)
            list = list
    }
    function deleteTask(task: String) {
        const filtered = list.filter(listTask => listTask.task !== task.task
        )
        tasks.set(filtered)
        list = filtered

        //list = list //to update
    }
    
</script>


<div class='module'>
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
        <form on:submit={(e) => addNew(e)} >
            <input type='text' bind:value={newTask} />
            <button class='add'>Add</button>
        </form>
    </div>
</div>

<style>
    .module {
        background-color: #fee074;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        touch-action: manipulation;
    }
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
    form {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
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
    input {
        border: 2px solid black;
        outline: none;
        border-radius: .5rem;
        padding: 6px;
        margin-top: 3px;
        margin-right: 6px;
        height: 26px
    }
    .add {
        height: 26px;
        box-sizing: content-box
    }
    .check {
        margin: 0;
    }
    
</style>