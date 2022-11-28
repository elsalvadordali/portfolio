<div class="card">
    <h2>Gender Gap Stats</h2>
    <div class="card-info">
        <p>Gender Pay Gap Stats</p>
        <p>A small project made in react, using d3.js to display API data.</p>
        <p></p>
        <div class="hg">
        <a href='https://us-stats.tijana.link/' target='_blank'>
            <img src="/stats.png" alt='screenshot of happy garden' />
        </a>
        <div>
            <a href='https://us-stats.tijana.link/' target='_blank'>Site</a> &middot;
            <a href='https://github.com/elsalvadordali/react-d3-stats' target='_blank'>Github</a>
        </div>
        <div>
            <h4>About</h4>
            <p>I wanted to try my hand at d3 and this project is the result. </p>
            <h4>Tech</h4>
            <p>When the user clicks a state, I fetch data from an API for that state, and then a react component with d3 displays it. The hardest part by far, was doing the math to get the bars the right size</p>
        </div>
        
        </div>
    </div>
</div>


<style>
    .card {
        background-color: #fff;
        padding: 1rem;
        width: 100%;
        box-sizing: border-box;
        margin-top: 60vh;
    }
    h2 {
        font-size: 2.5rem;
    }
    
    p {
        width: 90%;
    }
    
    .hg {
        background-color: white;
        display: flex;
        flex-flow: column nowrap;
    }
    img {
        width: 50%;
        margin: 1rem auto;
        border: 2px solid black;
        padding: 1rem;
    }
    @media (prefers-color-scheme: dark) {
        .card {
            background-color: #272f34;
        }
        .hg {
            background-color: transparent;
        }
    }
    @media (min-width: 850px) {
        .card {
            margin: 0;
        }
        
        @media (prefers-color-scheme: dark) {
            
        }
    }
</style>