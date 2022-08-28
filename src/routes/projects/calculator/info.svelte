<script lang="ts">
</script>

<div class='all'>
    <h2>Calculator</h2>
    <h3>About</h3>
    <div class='column'>
        <p>This is a simple calculator app. 
            To be honest, I just made it for my portfolio. </p>
            <h4>controversial choices</h4>
        <p>
            It was made in typescript, and uses a simple 
            functional programing paradigm. It does use the 
            very controversial JavaScript eval function, but because 
            the user can't type in any additional characters, and there's no
            data being sent to the server, it becomes a negligable risk in my 
            humble opinion, because users can run eval in the console anymay.
        </p>
        <h4>PWA</h4>
        <p>
            I wanted to make all the small projects PWAs (progressive web apps),
            meaning you can 'install' them on mobile, but especially this one,
            because ipads imfamously don't have a built in calculator, and all
            the calculators in the app store are either dreadfully ugly, or 
            ever worse, have ads. 
        </p>
        <h4>Next steps</h4>
        <p>
            I guess the next step could be to expand the functionality, like converting
            it to a scientific calculator. 
        </p>
    
    </div>
</div>


<style>
    p {
        line-height: 1.75rem;
        width: 55ch;
        max-width: 100%;

    }
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 2rem;
    }
    .all {
        background-color: #81b29a;
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
    }
</style>