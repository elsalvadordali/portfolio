<script lang="ts">
</script>

<div class='all'>
    <div class='column'>
        <h1>Sujiko</h1>
        <p>I just learned about this number puzzle game recently and decided I needed to
            make it a PWA.
        </p>
        <h3>How to play</h3>
        <p>The numbers in the circles are the sum of the four surrounding squares, 
            and you can only use 1-9 once. Good luck!
        </p>
        <h3>Technical</h3>
        <p>
            First we generate an array of 1-9 in random order. I debated between using an array, object, or
            even a map, but settled on array at the end because it becomes easy to cross reference against the
            user's guesses array. 
        </p>
        <p>
            
        </p>
        <h3>Next Steps</h3>
        <p>I'd like to add levels that have various amounts of previously filled-in numbers, but for now,
            the hint button fills that need. Also, I'm still debating wether or not hints should be mutable
            or not.
        </p>
    </div>
    <a href='https://github.com/elsalvadordali/portfolio/tree/main/src/routes/projects/todo'>Code on Github</a>
</div>

<style>
    .all {
        background-color: #abb6c8;
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