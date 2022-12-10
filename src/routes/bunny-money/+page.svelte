<script lang="ts">
	export const prerender = true;
</script>

<div id="bunny">
	<h2>Bunny Money</h2>
    <div class='full-width'>
        <a href="https://bunnymoney.app/">Live</a> &middot;
        <a href="https://github.com/elsalvadordali/bunny-money">github</a>
    </div>
    <div class="image-container">
        <div class="image">
            <img src="/bm-3.png" alt="A partial screenshot of the login page" />
            <p>Type your e-mail to get started.</p>
        </div>
        <div class="image">
            <img src="/bm-2.png" alt="A partial screenshot of the parent's view" />
            <p>Parents can create kid's checking and savings accounts.</p>
        </div>
        <div class="image">
            <img src="/bm-1.png" alt="screenshot of the login page" />
            <p>Kids can see both checking and savings accounts, and can move their money around as they see fit.</p>
        </div>
        
    </div>
	<div class="column">
		<h3>About</h3>
		<p>
			This is an app for kids to gain financial literacy, and for parents to help. It's basically a
			bank simulator. Parents set the savings account interest rate, the allowance, and are able to
			request payments, while the kids can request money, and put money into savings (and watch it
			go).
		</p>
		<h3>Technical Background</h3>
		<p>
			This project was created in Svelte.js, using a Firebase backend. Firebase handles the
			authentication and the data storage. Svelte accesses this data via API. Styling it with 
			tailwindcss was enjoyable because it's so customizable. 
		</p>
		<h3>Svelte</h3>
		<p>
			I chose to build this project with svelte because it has a built-in store manager that is way
			more intuitive and easier to read than redux.
		</p>
		<p>I also enjoy the way svelte handle's state. It's really reactive!</p>
		<h3>TypeScript</h3>
		<p>
			This was my first time using TypeScript for a full project. I learned a lot, but I think I
			still have a long ways to go.
		</p>
		<h3>Next steps</h3>
		<p>I wrote some, but you can always use more unit testing.</p>
	</div>
	<div class='stack'>
		<h3>The Stack</h3>
		<i class="devicon-svelte-plain colored"></i> &middot;
		<i class="devicon-firebase-plain colored"></i> &middot;
		<i class="devicon-css3-plain colored"></i> &middot;
		<i class="devicon-typescript-plain colored"></i> &middot;
		<i class="devicon-tailwindcss-plain colored"></i>
	</div>
    <div class='full-width'>
        <a href="https://bunnymoney.app/">Live</a> &middot;
        <a href="https://github.com/elsalvadordali/bunny-money">github</a> &middot;
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
