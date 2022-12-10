<script lang="ts">
	export const prerender = true;
</script>
<div id="bunny">
	<h2>Gender Pay Gap Chart</h2>
    <div class='full-width'>
		<a href='https://us-stats.tijana.link/'>Live</a> &middot; 
		<a href='https://github.com/elsalvadordali/react-d3-stats'>github</a>

    </div>
    <div class="image-container">
        <div class="image">
            <img src="/gpg-1.png" alt="A partial screenshot of a US map" />
            <p>You must select a state to get started</p>
        </div>
        <div class="image">
            <img src="/gpg-2.png" alt="A partial screenshot of the gender wage gap of Wisconsin" />
            <p>The stats will be displayed, after getting fetched from an API.</p>
        </div>
        <div class="image">
            <img src="/gpg-3.png" alt="Wisconsin's data sorted according to wage" />
            <p>You are able to sort the data by gender, wage, and job title.</p>
        </div>
        
    </div>
	<div class="column">
		<h3>About</h3>
		<p>
			I created this as a simple react app. I was already quite familiar with react, so I took this opportunity to 
			learn d3.js (a data displaying library). I googled around for free APIs, and once I found 
			<a href='https://datausa.io/'>datausa.io</a>, I knew it was perfect for my needs.
		</p>
		<h3>React</h3>
		<p>
			I created an array of states, that is empty to start. Once the user clicks on a state, it is pushed to
			the array, and then I map over the array to create 
		</p>
		<p>I also enjoy the way svelte handle's state. It's really reactive!</p>
		<h3>d3.js</h3>
		<p>
			In hindsight, it didn't really make sense to use both react and d3.js for this project because
			d3.js uses JavaScript to write SVGs directly to the DOM, and that's antithetical to react's virtual DOM.
			I realized once I finished there was a react-d3 plugin I probably should have used. Hindsight is 20/20.
		</p>
		<h3>Next steps</h3>
		<p>I would like to add the job titles over the bars on mobile on click. It would also be nice to display all the state's 
			data in one graph, but I feel like that falls outside of the scope of this relatively simple app. I do plan to explore d3 
			further in the future.
		</p>
	</div>
	<div class='stack'>
        <h3>The Stack</h3>
        <i class="devicon-react-original colored"></i> &middot;		
		<i class="devicon-d3js-plain colored"></i> &middot;
        <i class="devicon-css3-plain colored"></i> &middot;
		<i class="devicon-typescript-plain colored"></i>
    </div>
    <div class='full-width'>
		<a href='https://us-stats.tijana.link/'>Live</a> &middot; 
		<a href='https://github.com/elsalvadordali/react-d3-stats'>github</a> &middot;
        <a href='/'>Go back</a>
    </div>
</div>

<style>
	#bunny {
		max-width: 100vw;
		min-height: 100vh;
		background-color: aliceblue;
		padding: 1rem;
	}
    .image-container {
        display: flex;
        justify-content: space-evenly;
    }
    .image {
        width: 30%;
    }
	img {
		width: 100%;
	}
    .full-width {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .full-width a {
        margin: 0 1rem 4rem 1rem;
    }
	@media screen and (min-width: 600px) {
		#bunny {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-flow: column wrap;
		}
        .column {
            columns: 2;
            column-gap: 4rem;
            max-width: 700px;
            margin: 5rem 1rem;
        }
	}
</style>
