<script lang="ts">
    import Logo from "./Logo.svelte";

    export let links = [
        { name: "Bunny Money", href: "/bunny-money" },
        { name: "Abracadabra", href: "/abracadabra" },
        { name: "Happy Garden", href: "/happy-garden" },
    ]
</script>


<aside>
    <Logo />
    <div class="links">
        {#each links as link}
        <a href={link.href}>{link.name}</a>
        {/each}
    </div>
</aside>


<style>
    aside {
		background-color: #eaeaea;
        min-width: 260px;
        height: 100vh;
		width: 22%;
		color: white;
		padding: 2vw;
        padding-top: 4vw;
        padding-bottom: 4vw;
		box-sizing: border-box;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
	}
    .links {
		min-height: 50%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
	}
    aside a {
		color: black;
	}
    @media (prefers-color-scheme: dark) {
        aside {
            background-color: #455054;
            color: white
        }        
        aside a {
            color: white
        }
    }
</style>