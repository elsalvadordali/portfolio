<div id="bunny">
	<h2>Portfolio</h2>
    <div class='full-width'>
		<a href='https://tijana.me/'>live</a> &middot; 
		<a href='https://github.com/elsalvadordali/portfolio'>github</a>

    </div>
	<div class="column">
		<h3>About</h3>
		<p>
            I've always loved wetlands. They're so peaceful and almost magical. And then I saw
            <a href='https://weheartit.com/entry/343818280' target="_blank" rel="noreferrer">this image.</a> Inspiration struck and 
            three weeks later, here we are.
		</p>
		<h3>Tech Stack</h3>
		<p>
			I used svelte in the past, so I wanted to try sveltekit, mainly for it's server-side rendering, and easy
            routing. As a bonus it also has more SEO best practices included.
		</p>
		<p>
            The lily pads themselves were first hand-drawn by yours truly in, and the path was saved in an array of paths. 
            The number of lily pads generated depends on the screen size, and we use two nested loops to generate them. 
            The color and shape are random, as is the color it turns once you click on a lily pad. 
        </p>
        <p>
            The hardest part was <b>the wave.</b> At first, I couldn't figure out how to do it programmatically, so 
            I tried to do it with css. Long story short, it worked but it didn't look great. Then, I found anime.js,
            and the rest is history! I still think css would have been more efficient, but oh well.
        </p>
		<h3>Bonus</h3>
		<p>
			I also animated the little cards on the projects page. Each one to match the project within. 
            The one for Happy Garden makes me the happiest 
            because I used 75 divs to create pixels, and absolutely positioned them to create a little pixel art 
            tulip plant when you hover over it.
		</p>
		<h3>The End</h3>
		<p>
            We ended up completing the project within the deadline, and winning third place! It was out first
            hackathon, and it was complete success. It's still missing a few features (like a logout button),
            and the code could be cleaned up, but we're actively maintaining it as a group.
		</p>
	</div>
    <div class='stack'>
        <h3>The Stack</h3>
        anime.js  &middot;
        <i class="devicon-svelte-plain colored"></i> &middot;
        <i class="devicon-css3-plain colored"></i> &middot;
        <i class="devicon-javascript-plain colored"></i>'s SVG API
    </div>
    <div class='full-width'>
		<a href='https://tijana.me/'>live</a> &middot; 
		<a href='https://github.com/elsalvadordali/portfolio'>github</a> &middot;
        <a href='/'>go back</a>
    </div>
</div>

<style>
	#bunny {
		width: 100%;
		min-height: 100vh;
		background-color: aliceblue;
		padding: 1rem;
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
