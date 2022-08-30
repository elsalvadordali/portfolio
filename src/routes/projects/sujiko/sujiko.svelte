<script lang="ts">
    let location: string | null = null
    let num: number | null = null
    let grid: number[] | string[] = new Array(9).fill(0)
    let seconds = 1
    let won = false
    let timer = '0:00'
    let dangTimer = setInterval(increaseSec, 1000)  

    function increaseSec() {
        let sec = seconds
        let min = 0
        while (sec >= 60) {
            min++
            sec -= 60
        }
        seconds++
        timer = min + (sec < 10 ? ':0' + sec : ':' + sec)
    }
    function generateRandomOrder() {
        const hash = {}
        const numbers: number[] = []
        while (numbers.length < 9) {
            const randomNumber = Math.ceil(Math.random() * 9)
            if (!hash[randomNumber.toString()]) {
                hash[randomNumber.toString()] = true
                numbers.push(randomNumber)
            }
        }
        return numbers
    }
    function getSums() {
        const sums = []
        sums.push(numbers[0] + numbers[1] + numbers[3] + numbers[4])
        sums.push(numbers[1] + numbers[2] + numbers[4] + numbers[5])
        sums.push(numbers[3] + numbers[4] + numbers[6] + numbers[7])
        sums.push(numbers[4] + numbers[5] + numbers[7] + numbers[8])
        return sums
    }
    
    let i = 0
    function hint() {
        let random = Math.floor(Math.random() * 9)
        while (grid[random] === numbers[random]) {
            random = Math.floor(Math.random() * 9)
        }
        if (grid.includes(numbers[random])) {
            const index = grid.indexOf(numbers[random])
            grid[index] = ''
        }
        grid[random] = numbers[random]
    }
    function reset() {
        grid = new Array(9).fill(0)
        seconds = 0
        timer = '0:00'
        clearInterval(dangTimer)
        dangTimer = setInterval(increaseSec, 1000)
        //numbers = new Array(9)
        won = false
        numbers = generateRandomOrder()
    }
    let numbers = generateRandomOrder()

    const sums = getSums()

    $: {
        if (num && location != null) {
            if (grid.includes(num)) {
                const i = grid.indexOf(num)
                if (grid[location] > 0) grid[i] = grid[location]
                else grid[i] = 0
            }
            grid[location] = num
        } else if (num == null && location) grid[location] = 0
        num = 0
        if (grid.length === 9) {
            let areEqual = true
            for (let i = 0; i < grid.length; i++) {
                if (grid[i] != numbers[i]) areEqual = false
            }
            if (areEqual) {
              won = true
              clearInterval(dangTimer)
            }
        }
    }
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sujiko</title>
	<meta name="description" content="Todo app PWA" />
    <link rel="manifest" href="/todo/manifest.json">
</svelte:head>

<div class='container'>
            {#each grid as n, i} 
            <button on:click={() => location = i} class={location === i ? 'highlight loc loc-' + (i + 1): 'loc loc-' + (i + 1)}>{grid[i] > 0 ? grid[i] : ''}</button>
            {/each}
            {#each sums as sum, i}
                <div class={'sum sum-' + (i + 1)}>
                    <h2>{sum}</h2>
                </div>
            {/each}
        
    
    <div class='numbers'>
        {#each grid as n, i}
        <button on:click={() => num = i + 1} class={grid.includes(i + 1) ? 'num s' : 'num'}>
            {i + 1}
        </button>
        {/each}
    </div>
    <div class='center'>
        <button on:click={() => num = null} >erase</button>
        <p>{timer}</p>
        <button on:click={() => hint()}>hint</button>
    </div>
</div>

{#if won}
<div class="module">
    YOU WON IN ONLY {seconds >=  2 ? timer + ' SECOND!' : timer + ' SECONDS!'} 
    <h5 class='giant'>🎉</h5>
    <button on:click={() => reset()}>play again</button>
</div>
{/if}

<style>
    .numbers {
        grid-row-start: 10;
        grid-column-start: 1;
        grid-column-end: 11;
        display: flex;
        justify-content: space-between;
    }
    .numbers button {
        padding: .5rem .75rem;
    }
    
    .container {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(11, 1fr);
        height: 490px;
        width: 340px;

    }
    .loc {
        width: 100%;
        background-color: transparent;
        box-shadow: none;
        margin: 0;
        z-index: 2;
        font-size: 2rem;
        
    }
    .sums {
        position: relative;
        top: -86px;
        left: 0px;
        width: 230px;
        height: 220px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .sum {

        display: flex;
        flex-wrap: row nowrap;
        justify-content: center;
        align-items: center;
    }
    .sum h2 {
        background-color: aliceblue;
        border: 2px solid black;
        padding: 0 .5rem;
        height: 40px;
        width: 40px;
        box-sizing: border-box;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
        margin: 0;
    }
    .highlight {
        background-color: #81b29a;
    }
    .s {
        background-color: #e07a5f;
    }
    .center {
        grid-row-start: 11;
        grid-column-start: 1;
        grid-column-end: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 120px;
        width: 330px;
    }
    .center button {
        height: fit-content;
        padding: .5rem 1rem;
    }
    .center p {
        font-size: 2rem;
        margin: .25rem;
        width: 120px;
    }
    .module {
        background-color: white;
        padding: 1rem;
        box-sizing: border-box;
        position: absolute;
        z-index: 100;
        left: calc(50vw - 160px);
        top: 35vh;
        width: 320px;
        border: 2px solid black;
        box-shadow: 2px 2px 0 black;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
    }
    .giant {
        font-size: 7rem;
        margin: 0;
    }
    .module button {
        padding: .5rem 1rem;
    }
    .loc-1 {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-row-end: 4;
        grid-column-end: 4;
    }
    .loc-2 {
        grid-row-start: 1;
        grid-column-start: 4;
        grid-row-end: 4;
        grid-column-end: 7;
    }
    .loc-3 {
        grid-row-start: 1;
        grid-column-start: 7;
        grid-row-end: 4;
        grid-column-end: 10;
    }
    .loc-4 {
        grid-row-start: 4;
        grid-column-start: 1;
        grid-row-end: 7;
        grid-column-end: 4;
    }
    .loc-5 {
        grid-row-start: 4;
        grid-column-start: 4;
        grid-row-end: 7;
        grid-column-end: 7;
    }
    .loc-6 {
        grid-row-start: 4;
        grid-column-start: 7;
        grid-row-end: 7;
        grid-column-end: 10;
    }
    .loc-7 {
        grid-row-start: 7;
        grid-column-start: 1;
        grid-row-end: 10;
        grid-column-end: 4;
    }
    .loc-8 {
        grid-row-start: 7;
        grid-column-start: 4;
        grid-row-end: 10;
        grid-column-end: 7;
    }
    .loc-9 {
        grid-row-start: 7;
        grid-column-start: 7;
        grid-row-end: 10;
        grid-column-end: 10;
    }
    .sum-1 {
        grid-row-start: 3;
        grid-row-end: 5;
        grid-column-start: 3;
        grid-column-end: 5;
    }
    .sum-2 {
        grid-row-start: 3;
        grid-row-end: 5;
        grid-column-start: 6;
        grid-column-end: 8;
    }
    .sum-3 {
        grid-row-start: 6;
        grid-row-end: 8;
        grid-column-start: 3;
        grid-column-end: 5;
    }
    .sum-4 {
        grid-row-start: 6;
        grid-row-end: 8;
        grid-column-start: 6;
        grid-column-end: 8;
    }
</style>