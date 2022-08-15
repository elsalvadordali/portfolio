<script lang="ts">
</script>

<div class='all'>
    <div>
    <h2>Bunny Money</h2>
    <h3>About</h3>
    <div class='column'>
        <p>
        This is an app for kids to gain financial literacy, and for parents to help. It's basically
        a bank simulator. Parents set the savings account interest rate, the allowance, and are able 
        to request payments, while the kids can request money, and put money into savings (and watch it go).
        </p>
        <h3>Technical Background</h3>
        <p>
        This project was created in Svelte.js, using a Firebase backend. Firebase handles the
        authentication and the data storage, which was very appealing to me as a front-end dev.
        </p>
        <h3>Svelte</h3>
        <p>
        All aboard the Svelte hype-train! I love Svelte.
        </p>
        <h3>TypeScript</h3>
        <p>
        Prior to this project, I had dabbled with TypeScript, but at one point, I found myself
        frustrated by JavaScript's limits. Specifically, the type inference. I found myself hovering
        over an argument, wishing the editor could tell me the exact structure of the object I had passed
        to it, without having to track down another file. It took a while to convert the project to TypeScript
        and to get rid of most of the errors it brought with it. I consider myself as having drunk the TypeScript
        coolaid.
        </p>
        <h3>Next steps</h3>
        <p>
            More unit testing.
        </p>
    </div>
    </div>
</div>


<style>
    p {
        line-height: 1.75rem;
        width: 55ch;
        max-width: 100%;
        margin-top: 0;
    }
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 2rem;
        margin: .5rem 0;
    }
    .all {
        background-color: #f5cbd9;
        padding: 1rem;
        width: calc(100vw - 2rem);
        box-sizing: content-box;
        height: 100vh;
    }
    @media screen and (min-width: 600px) {
        .column {
            column-count: 2;
            column-gap: 1rem;
            max-width: 55ch;
        }
        .all {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>