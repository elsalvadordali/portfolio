<script lang="ts">
</script>

<div class='all'>
    <div class='column'>
        <h1>Todo</h1>
        <p>If I didn't include a basic todo app, how would you know I was a 
            web dev at all? All kidding aside, this is was a one-day project that
            I wanted to build to use on my phone, and thus it is a PWA (progressive web app).
            Are you noticing a theme?
        </p>
        <h3>Technical</h3>
        <p>
            The project was built in svelte, and plain JS. The hardest part was syncing the 
            svelte store (the svelte equivalent of redux) to localStorage. And localStorage 
            is always a bit tricky because it only stores strings, but the data I needed to
            store was an array of objects. This was simple to overcome by using 'JSON.stringfy'.
        </p>
        <p>
            Another tricky aspect was the fact that sveltekit is rendered serverside, and thus,
            doesn't have access to localStorage (if not rendered in the browser).. So I had to 
            import the browser library, which tells sveltekit if a browser is rendering, and if it is,
            we can freely use localStorage.
        </p>
        <h3>Next Steps</h3>
        <p>I guess the only feature 'missing' is to be able to edit items in the todo list</p>
    </div>
    <a href='https://github.com/elsalvadordali/portfolio/tree/main/src/routes/projects/todo'>Code on Github</a>
</div>

<style>
    .all {
        background-color: #fee074;
        padding: 1rem;
        width: calc(100vw - 2rem);
        box-sizing: content-box;
        height: 100vh;
    }
    p {
        line-height: 1.75rem;
    }
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 2rem;
    }
    @media screen and (min-width: 600px) {
        .all {
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .column {
            column-count: 2;
            column-gap: 1rem;
            max-width: 55ch;
        }
    }
</style>