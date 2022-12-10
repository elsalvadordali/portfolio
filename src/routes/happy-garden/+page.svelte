<script lang="ts">
	export const prerender = true;
</script>
<div id="bunny">
	<h2>Happy Garden</h2>
    <div class='full-width'>
		<a href='https://elsalvadordali.github.io/green-smile/'>live</a> &middot; 
		<a href='https://github.com/elsalvadordali/green-smile'>github</a>

    </div>
    <div class="image-container">
        <div class="image">
            <img src="/hg-1.png" alt="A partial screenshot of the login screen" />
            <p>A simple login screen for Happy Garden</p>
        </div>
        <div class="image">
            <img src="/hg-2.png" alt="A partial screenshot of a few pixel plants you can choose to plant in your garden" />
            <p>The plant selection screen. You can select a plant only once you write an entry</p>
        </div>
        <div class="image">
            <img src="/hg-3.png" alt="A pixel art garden. Mostly tulips." />
            <p>This is the garden display. The user choses the placement. It display's a user's chosen plants, and 
                users can click the plants to re-read their entries. Plants grow over the course of four days.
            </p>
        </div>
        
    </div>
	<div class="column">
		<h3>About</h3>
		<p>
            In November 2022, <a href='https://girldevelopit.com/'>Girl Develop It</a> hosted a health-themed hackathon.
            In a team of 8, I became the senior dev, and spent the first day planning and writing out bite-sized pieces 
            the other members could work on.
		</p>
		<h3>Tech Stack</h3>
		<p>
			It was my first time collaborating! And wow it felt so good! Unfortunately most of the other members were
            relatively new to coding, so a lot of the actual coding fell to me. But it also gave me the freedom to choose
            our tech stack. Since it was a three day hackathon, I decided to focus on the frontend (react), and leave the backend
            to firebase.
		</p>
		<p>Although I much prefer svelte to react, I decided to use react because it's more popular and the other members
            would probably feel more comfortable. It was also a great exercise in using git for me, because on personal projects,
            I tend to only use one branch.
        </p>
		<h3>The hardest Part </h3>
		<p>
			The hardest part was planning. I usually have an idea in my head before I start a project, but this time, I had to 
            write it out in detail. Some things didn't go according to plan, which means some of the members regrettably spent 
            a lot of time writing css and code that didn't go anywhere. I guess it's all part of the process. 
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
        <i class="devicon-react-original colored"></i> &middot;		
        <i class="devicon-css3-plain colored"></i> &middot;
        <i class="devicon-firebase-plain colored"></i> &middot;
        <i class="devicon-javascript-plain colored"></i>'s localStorage API
    </div>
    <div class='full-width'>
		<a href='https://elsalvadordali.github.io/green-smile/'>live</a> &middot; 
		<a href='https://github.com/elsalvadordali/green-smile'>github</a> &middot;
        <a href='/'>go back</a>
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
