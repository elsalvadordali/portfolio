<script lang="ts">
    import { COLORS, HEIGHT, PADS_SVG_PATHS, WIDTH } from "../lib/pond";
    import { toggleLilyPads } from "$lib/store";
</script>


<div class="brand">
    <svg on:click={toggleLilyPads} on:keydown={toggleLilyPads}>
        <path
			d={'m ' + 6 + ',' + 38 + PADS_SVG_PATHS[2]}
			class="logo"
			fill="none"
		/>
    </svg>
    <a href=''><h2 class="name">Tijana</h2></a>
</div>

<style>
    .brand {
        display: flex;
        flex-flow: row nowrap;
        height: 200px;
        justify-content: flex-start;
        align-self: center;
        width: 100%
    }
    svg { height: 70px; width: 70px; margin-top: 12px; transform: scale(.33); background-color: transparent;}
    .logo {
		stroke-width: 9;
		stroke: #000;
		transition: 1s;
	}
    .name {
        font-family: 'DM Mono', monospace;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 2rem;
        border-bottom: 2px solid black;
        margin-top: 1.5rem;
    }
    a {
        text-decoration: none;
    }
    @media (prefers-color-scheme: dar) {
        .logo, .name {
            color: white;
            stroke: white
        }        
    }
</style>