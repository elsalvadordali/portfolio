<script lang="ts">
    import MenuBar from '../../components/_menubar.svelte'
    const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    const stateAbbreviations = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    let show = true
    //Ak3di9-byhPvrvdRv0VJb0pX2WfCWRBQ5ZTnj89DmQftka_co_UazqOM5rcXdxFr //for bing

    //http://dev.virtualearth.net/REST/v1/Locations/US/98052?o=xml&key={Ak3di9-byhPvrvdRv0VJb0pX2WfCWRBQ5ZTnj89DmQftka_co_UazqOM5rcXdxFr}
    //fetch('https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast')

    let input = ''
    function parseInput() {

    }
  </script>

<div>
    
    <div class='week'>
        <form on:submit={() => parseInput()}>
            City + State, or Zip. Sorry US only
            <input type='text' bind:value={input} placeholder="Albequerque, NM" />
            <button type='submit'></button>
        </form>
        <div class='today'>

        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>