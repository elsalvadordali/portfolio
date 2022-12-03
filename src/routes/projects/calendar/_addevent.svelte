<script lang="ts">
    let isRepeat = false
    let amOrPm = 'am'
    export let day = ''
    export const repeatingDays = {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
    }
    function submit(e: Event) {
        e.preventDefault()
    }
</script>


<form on:submit={(e) => submit(e)}>
    <div>
    <label for='event'>Event </label>
    <input name='event' id='event' type='text' />
</div>
    <label for='isRepeat'> Repeats? </label>
    <input name='isRepeat' id='isRepeat' type='checkbox' bind:value={isRepeat} />
    {#if isRepeat}
        <div class='week'>
            <div class='day'>
                <label for='all'>Everday</label>
                <input name='all' id='all' type='checkbox' />
            </div><div class='day'>
                <label for='weekdays'>Weekdays</label>
                <input name='weekdays' id='weekdays' type='checkbox' />
            </div><div class='day'>
                <label for='monday'>Monday</label>
                <input name='monday' id='monday' type='checkbox' />
            </div><div class='day'>
                <label for='tuesday'>Tuesday</label>
                <input name='tuesday' id='tuesday' type='checkbox' />
            </div><div class='day'>
                <label for='wednesday'>Wednesday</label>
                <input name='wednesday' id='wednesday' type='checkbox' />
            </div><div class='day'>
                <label for='thursday'>Thursday</label>
                <input name='thursday' id='thursday' type='checkbox' />
            </div><div class='day'>
                <label for='friday'>Friday</label>
                <input name='friday' id='friday' type='checkbox' />
            </div><div class='day'>
                <label for='saturday'>Saturday</label>
                <input name='saturday' id='saturday' type='checkbox' />
            </div><div class='day'>
                <label for='sunday'>Sunday</label>
                <input name='sunday' id='sunday' type='checkbox' />
            </div>
        </div>
        
    {/if}
    <div class='time'>
        <input type='number' > : <input type='number'> <button on:click={() => amOrPm = amOrPm === 'am' ? 'pm' : 'am'}> {amOrPm} </button>
    </div>
</form>



<style>
    input {
        border: 2px solid black;
        border-radius: .5rem;
        padding: .5rem;

    }
    label {
        margin: .5rem;
        display: inline-block;
    }
    form {
        width: 340px;
    }
    .week {
        display: flex;
        flex-flow: row wrap;
        width: 340px;
    }
    .day {
        border: 2px solid black;
        border-radius: .5rem;
        margin: .5rem;
        padding: .5rem;
    }
    .time {
        display: flex;
        align-items: center;
    }
    .time input {
        margin: .5rem;
        width: 80px;
        
    }
    .time button {
        padding: .5rem;
    }
</style>