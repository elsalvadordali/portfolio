<div class="card">
    <div class="card-info">
        <h2>Happy Garden</h2>
        <p>Third place winner at 2022 GDI hackathon</p>
        <div class="hg">
            <a href="https://elsalvadordali.github.io/green-smile/">
                <img src="/happy-garden.png" alt='screenshot of happy garden' />
            </a>
        </div>
        <div>
            <a href='https://elsalvadordali.github.io/green-smile/'>Site</a> &middot; <a href='https://github.com/elsalvadordali/green-smile'>github</a>
            <h4>About</h4>
            <p>The theme of the hackaton was 'health', so I pitched an 
                idea to create a gratitude journal, where once the user 
                writes an entry, they can plant a plant in the garden.
            </p>
            <h4>Tech</h4>
            <p>The project used react in the frontend, and firebase as a backend. We implemented authentication,
            and used a no-sql database to store the user's data.</p>
            
        </div>
    </div>
    
</div>


<style>
    .card {
        background-color: #fff;
        padding: 1rem;
        margin-top: 60vh;
    }
   
    @media (min-width: 850px) {
        .card {
            padding: 2rem;
            margin-top: 0;
        }
        img {
            width: 50%;
        }
    }

    @media (prefers-color-scheme: dark) {
        .card {
            background-color: #272f34;
        }
            .hg {color: white 
        }
    }
</style>