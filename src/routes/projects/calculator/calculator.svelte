<script lang="ts">
const buttons = ['1', '6', '.', '2', '7', '/', '3', '8', '*', '4', '9', '+', '5', '0',  '-', '=', 'c']

let input = ''
let first = ''
let operator = ''
let second = ''

function evaluate() {
    let res = eval(first + operator + '(' + second + ')').toString()
    first = res
    operator = ''
    second = ''
    return res
}

function calculate(char: string) {
    if (char === 'c') {
        input = ''
        first = ''
        second = ''
        operator = ''
    }
    else if (char === '=') return input = evaluate()
    else if (char === '+' || char === '/' || char === '*') {
        if (first) operator = char
    } else if (char === '-') {
        if (first && operator && second == '') second = '-'
        else if (first) operator = '-' 
    } else if (char === '.') {
        if (operator && !second.includes('.')) second += char
        else if (!first.includes('.')) first += char
    } else if (char === '0') { 
        if (operator) {
            if (second != '') second += char
        } else {
            if (first != '') first += char
        }
    } else if (parseInt(char) < 10) {
        if (operator) second += char
        else first += char
    }
    input = first + operator + second
}
</script>

<div class='module'>
    <div class='calculator complexity-2 '>
        <input type='text' value={input} readonly/>
        <div class='buttons'>
            {#each buttons as button} 
                <button value={button} on:click={() => calculate(button)}>{button}</button>
            {/each}
        </div>
    </div>
</div>  


<style>
    .module {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        touch-action: manipulation;
    }
    .calculator {
        display: flex;
        flex-flow: column nowrap;
        transition: all 1s;
        height: 100%;
        width: 95%;
    }
    input {
        box-sizing: border-box;
        width: 97%;
        padding: 1rem;
        height: 24%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: .25rem;
        background-color: transparent;
        outline: none;
        border: 2px solid #000;
        border-radius: 1rem;
        font-family: 'DM Serif Display', serif;
        font-size: 2rem;
        text-align: right;
        color: #000;
        background-color: #f4f1de;
    }
    .buttons {
        box-sizing: border-box;
        height: 75%;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: space-around;
        justify-content: space-around;
        font-family: 'DM Serif Display', serif;
        margin-bottom: .5rem;
        padding: 0;
    }
    button {
        width: 30%;
        background-color: transparent;
        color: #000;
        border: 2px solid #000;
        border-radius: 1rem;
        margin-top: 2px;
        margin-bottom: 6px;
        font-size: 2rem;
        font-family: 'DM Serif Display', serif;

    }
    button:hover {
        box-shadow: none;
        margin-top: 4px;
        margin-bottom: 4px;
    }
    button:nth-of-type(16) {
        width: 63.5%;
    }
    @media screen and (min-width: 600px) {
        .calculator {
            max-width: 320px;
            height: 600px
        }

        input {
            font-size: 3rem;
        }
    }
    @media (prefers-color-scheme: dark) {
    }
</style>