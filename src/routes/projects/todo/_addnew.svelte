<script lang="ts">
    import { tasks } from './store'

    let newTask = ''

    function addNew(e: Event) {
        e.preventDefault()
        
        tasks.add({task: newTask, isComplete: false, date: new Date()})
        //localStorage.setItem('todo', JSON.stringify(list))
        newTask = ''
    }
</script>

<form on:submit={(e) => addNew(e)} >
    <input type='text' bind:value={newTask} />
    <button class='add'>Add</button>
</form>


<style>
    form {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
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
        height: 24px
    }
    .add {
        height: 22px;
        box-sizing: content-box
    }
</style>