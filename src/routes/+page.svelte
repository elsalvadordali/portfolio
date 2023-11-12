<script lang="ts">

</script>

<main>
    <div class="empty"></div>
    <div class="name"><span class="name-font">Ti</span><span class="name-font">ja</span><span class="name-font">na</span></div>
    <div class="blog"><ul><li>award-winning</li><li>front end developer</li><li>ui designer</li></ul></div>
    <div class="about"><h3>About</h3><p>I'm currently working as a frontend/ux developer, and attending school.</p></div>
    <div class="projects"><h3>Projects</h3><p>Currently, finishing up my CS degree @ WGU</p></div>
    <div class="contact"><h3>Contact</h3><ul><li><a href="mailto:tijano+jung@gmail.com">E-mail me</a></li><li><a href="https://www.linkedin.com/in/tijaname/">LinkedIn</a></li></ul></div>
</main>

<style>
    main {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        max-width: 1000px;
        min-height: 620px;
        font-family: 'DM Serif Display';
        gap: 2em;
        padding-top: 200px;
        padding-bottom: 200px;
        color: #404447;
    }
    
    main div {
        min-width: 300px;
        min-height: 300px;
        width: 25%;
        padding: 2em;
        box-sizing: border-box;
        transition: .5s;
    }
    .name {
        background-color: #F0A082;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
    }
    .name span {
        font-size: 8em;
        line-height: .75em;
        text-transform: uppercase;
        letter-spacing: 5px;
        transition: .5s;
    }
    .name:hover span {
        text-shadow: -8px -8px 0 #DCE8D9;
    }
    .blog {
        background-color: #C7DBE2;
        border-radius: 150px;
        border-top-left-radius: 5px;
        border-radius: 150px;
    }
    ul li {
        height: 36px
    }

    .about {
        background-color: #FFDC7C;
        border-radius: 5px;
        border-bottom-left-radius: 150px;
        text-align: right;
        box-shadow: -16px -16px 0 #BAB39C;
    }
    .about:hover {
        box-shadow: none;
    }
    .projects {
        background-color: #A0DBBF;
        border-radius: 5px;
        border-bottom-right-radius: 150px;
        border-bottom-left-radius: 150px;
        
    }
    .projects:hover, .blog:hover, .contact:hover {
        box-shadow: -16px -16px 0 #BAB39C;
    }
    .contact {
        background-color: #D1BDCF;
        border-radius: 5px;
    }
    @media (max-width: 1100px) { 
        main  {
            max-width: 80%;
        }
    }
    @media (prefers-color-scheme: dark) { 
        body, main { background-color: #404447;}
    }
</style>