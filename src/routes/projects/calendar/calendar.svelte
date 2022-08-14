<script lang="ts">
    import Todo from '../todo/todo.svelte'
    import { tasks } from '../todo/store'
    const monthLengthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let currMonth = new Date().getMonth() + 1
    let currYear = new Date().getFullYear()
    let now = currYear.toString() + '/' + currMonth.toString()
    let startDate = new Date(now + '/' + '1')
    const today = new Date()

    

    let month: Day[] = []
    const memo = {}

    type Day = {
        name: number,
        tasks?: {
            task: string,
            isComplete: boolean
        }[]
    }

    if (memo[now]) {
        console.log('yup')
    } else {
        createMonth(currMonth, currYear)
    }

    function getTasks() {
        let todos
        tasks.subscribe(val => todos = val)
        console.log(memo)
        for (const item of todos) {
            const when = getYearMonthString(item.date)
            const date = new Date(item.date).getDate()
            console.log(memo[when])
            //if (memo[when].date.tasks) memo[when].tasks.push(item)
            //else memo[when].date.tasks = [item]
        }
    }

    function getYearMonthString(date: Date) {
        const curr = new Date(date)
        const year = curr.getFullYear()
        const month = curr.getMonth() + 1
        return year + '/' + month
    }
    getTasks()

    function createMonth() {
        startDate = new Date(currYear + '/' + currMonth + '/' + '1')
        let month = []
        let i = 0
        while (i < startDate.getDay()) {
            month.push({name: ''})
            i++
        }
        let j = 1
        while (j <= monthLengthArr[currMonth - 1]) {
            month.push({ date: j, tasks: [], month: currMonth, year: currYear})
            j++
            i++
        }
        memo[now] = month
        month = []
    }
    function previousMonth() {
        if (currMonth === 1) {
            currYear = currYear - 1
            currMonth = 12
        } else currMonth--
        createMonth()
    } 
    function nextMonth() {
        if (currMonth === 12) {
            currYear = currYear + 1
            currMonth = 1
        } else currMonth++
        createMonth()
    }
</script>

    <div class='calendar'>
        <div class='menu'>
            <button on:click={e => previousMonth()}> {'<<'} </button> 
            <h3>{currYear + '/' + currMonth}</h3>
            <button on:click={e => nextMonth()}>{'>>'} </button>
        </div>
        <div class='grid' on:click={e => console.log('clickde', e.target.id)}>
            
            {#each memo[now] as day}
                
                {#if day.date === today.getDate() && day.month === today.getMonth() + 1 && day.year === today.getFullYear()}
                <div class='today' id={day.year + '-' + day.month + '-' + day.date}><date>{day.date}</date></div>
                {:else if day.date === undefined}
                <div class='no-day'></div>
                {:else if day.tasks.length > 0} 
                <div class={'tasks-' + day.tasks.length}>{day.date}</div>
                {:else}
                <div class='day' id={day.year + '-' + day.month + '-' + day.date}><date>{day.date}</date></div>
                {/if}
            {/each}
        </div>
    </div>

<style>
    .calendar {
        width: 100%;
        height: 100%;
        color: black;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
    
    .grid {
        border: 2px solid black;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: .5vw;
        margin: .5rem;
        box-sizing: border-box;
        height: 70vw;
        width: 100%;
        max-height: 340px;
        max-width: 340px;
        padding: 1rem;
        border-radius: .5rem;

    }
    .grid div {
        padding: .125rem;
        display: flex;
        justify-content: center;
        height: 28px;
    }
    
    .day {
        border: 2px solid black;
        border-radius: .25rem;
    
    }
    .flip-card-back .calendar .grid {
        height: fit-content;
    }
    .day:hover, .today:hover {
        background-color: #e5e7fd;
        border-color: #333;
    }
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-self: flex-start;
        padding: .5rem;
        width: calc(100% - 1.5rem);
        margin: .5rem;
        max-width: 1100px;
    }
    .no-day {
        background-color: transparent;
    }
    .today {
        border: 2px solid black;
        background-color: #f5e7fd;
        border-radius: .25rem;

    }
    button {
        background-color: transparent;
        color: #000;
        border: 2px solid #000;
        border-radius: .25rem;
        margin-top: 2px;
        margin-bottom: 6px;
        font-size: 1rem;
        padding: .25rem .5rem;
        font-family: 'DM Serif Display', serif;
    }

    
</style>