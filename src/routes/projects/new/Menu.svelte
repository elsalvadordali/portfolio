<script lang="ts">
    export let page = 0
    let mobileMenu: boolean = false

</script>

{#if mobileMenu}
    <menu>
        <button class="link" on:click={() => (page = 0)}>1. About</button>
        <button class="link" on:click={() => (page = 1)}>2. Happy Garden</button>
        <button class="link" on:click={() => (page = 2)}>3. Bunny Money</button>
        <button class="link" on:click={() => (page = 3)}>4. Gender Pay Gap</button>
    </menu>
{/if}
<button class='menu-button' on:click={() => mobileMenu = !mobileMenu}>
    {#if mobileMenu}
    x
    {:else}
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
    {/if}
</button>  
      
<style>
    .menu-button {
        border: none;
        background-color: transparent;
        box-shadow: none;
        padding: 0;
        margin: 0;
        font-size: 3rem;
    }
    .menu-button:hover {
        margin: 0
    }
	.link {
		padding: 0;
		margin: 0;
		border: 0;
		box-shadow: none;
		background-color: transparent;		
		cursor: pointer;
		box-sizing: border-box;
        font-size: 2rem;
        font-family: 'DM Serif Display', serif;
        border-bottom: 2px solid black;
	}
    menu {
        background-color: aliceblue;
        z-index: 100;
        position: absolute;
        top: 7vh;
        left: 0;
        width: 100vw;
        height: 80vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: flex-start;
        border-top: 2px solid black;
    }
    @media (prefers-color-scheme: dark) {
        .menu-button {
            color: white;
        }
		.link {
			color: white;
            border-color: white;
		}
        menu {
            background-color: #272f34;
            border-color: white;
        }
        
	}
</style>