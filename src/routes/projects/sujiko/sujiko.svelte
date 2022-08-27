<script lang="ts">
    let location: string | null = null
    let num: number | null = null
    let grid: numbers | string = new Array(9).fill(0)
    let seconds = 0
    let won = false
    let timer = ''
    const dangTimer = setInterval(() => {
        let sec = seconds
        let min = 0
        while (sec >= 60) {
            min++
            sec -= 60
        }
        seconds++
        timer = min + (sec < 10 ? ':0' + sec : ':' + sec)
    }, 1000)  

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
        console.log(numbers[0], numbers[1], numbers[2])
        console.log(numbers[3], numbers[4], numbers[5])
        console.log(numbers[6], numbers[7], numbers[8])
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
    function hint() {
        let isGivingHint = true
        let i = 0
        while (isGivingHint && i < 9) {
            console.log('hint')
            const randomNumber = Math.floor(Math.random() * 9)

            // DONT FORGET TO MOVE IF FOUND NUMBER TO PREVENT DUPLICATES
            if (grid[randomNumber] && grid[randomNumber] != numbers[randomNumber]) {
                const index = grid.indexOf(grid[randomNumber])
                grid[index] = grid
                grid[randomNumber] = numbers[randomNumber]
                isGivingHint = false
            } else {
                grid[randomNumber] = numbers[randomNumber]
                isGivingHint = false
            }
            i++
        }

    }
    function reset() {
        grid = new Array(9).fill(0)
        seconds = 0
        timer = '0:00'
        dangTimer()
        //numbers = new Array(9)
        generateRandomOrder()
        won = false
    }
    const numbers = generateRandomOrder()

    const sums = getSums()

    $: {
        console.log(num, location)
        if (num && location != null) {
            if (grid.includes(num)) {
                const i = grid.indexOf(num)
                if (grid[location] > 0) grid[i] = grid[location]
                else grid[i] = 0
            }
            grid[location] = num
        }else if (num == null && location) grid[location] = 0
        num = 0
        if (grid.length === 9) {
            let areEqual = true
            for (let i = 0; i < grid.length; i++) {
                if (grid[i] != numbers[i]) areEqual = false
            }
            if (areEqual) {
              won = true
              clearInterval(dangTimer)
              

            } else console.log('try again')
        }
    }
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sujiko</title>
	<meta name="description" content="Todo app PWA" />
    <link rel="manifest" href="/todo/manifest.json">
</svelte:head>

<div>
    {num}
    <div>
        <div class='location'>
            {#each grid as n, i} 
            <button on:click={() => location = i} class={location === i ? 'highlight loc' : 'loc'}>{grid[i] > 0 ? grid[i] : ''}</button>
            {/each}
        </div>
        <div class='sums'>
            {#each sums as sum}
            <div class='sum'>
                <h2>{sum}</h2>
            </div>
            {/each}
        </div>
    </div>
    <div class='numbers'>
        {#each grid as n, i}
        <button on:click={() => num = i + 1} class={num === i + 1 ? 'highlight' : ''}><p class={grid.includes(i + 1) ? 's' : ''}>{i + 1}</p></button>
        {/each}
        <button on:click={() => num = null} ><p>erase</p></button>
    </div>
    <div class='center'>
        <button on:click={() => hint()}>hint</button>
        <p>{timer}</p>
    </div>
</div>
{#if won}
<div class="module">
    YOU WON!
    <h5 class='giant'>🎉</h5>
    <button on:click={() => reset()}>play again</button>
</div>
{/if}

<style>
    .numbers {
        display: flex;
        width: 340px;
        justify-content: space-between;
    }
    .numbers button {
        padding: .25rem .5rem;
    }
    .numbers button p {
        margin: 0;
    }
    .location {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .loc {
        height: 112px;
        background-color: transparent;
        box-shadow: none;
        margin: 0;
        z-index: 2;
        font-size: 2rem;
    }
    .sums {
        position: absolute;
        top: 75px;
        left: calc(50vw - 115px);
        width: 230px;
        height: 220px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .sum {
        width: 50%;
        height: 49%;
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
    }
    .highlight {
        background-color: aquamarine;
    }
    .s {
        text-decoration: line-through;
    }
    .center {
        display: flex;
        justify-content: space-evenly;
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
        height: 42vh;
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
</style>