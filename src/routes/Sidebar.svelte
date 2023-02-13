<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Logo from './Logo.svelte';

	export let links;
	export let logoColor: String;
	export let backgroundColor = '#eaeaea';

	let showMobileMenu = browser ? (window.innerWidth > 800 ? true : false) : true;
	let linkShowTimer = 200;
	const handleMobileIconClick = () => {
		showMobileMenu = !showMobileMenu;
		linkShowTimer = 300;
	};

	const mediaQueryHandler = (e) => {
		if (!e.matches) {
			showMobileMenu = false;
		}
	};
	onMount(() => {
		window.addEventListener('resize', function (event) {
			if (window.innerWidth > 800) {
				showMobileMenu = true;
			} else mediaQueryHandler(event);
			// do stuff here
		});
	});
</script>

{#if showMobileMenu}
	<aside style={'background: ' + backgroundColor} out:fly={{ duration: 900, x: -600 }}>
		<Logo {handleMobileIconClick} {logoColor} />
		<div class="links">
			{#each links as link, i}
				<a
					href={link.href}
					class={link.current ? 'bold' : ''}
					in:fly={{ x: -200, duration: linkShowTimer * i }}
					>{link.current ? '> ' : ''}{link.name}
				</a>
			{/each}
		</div>
	</aside>
{:else}
	<div class="button">
		<button on:click={handleMobileIconClick}
			><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
				><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" /></svg
			></button
		>
	</div>
{/if}

<style>
	aside {
		background-color: #000;
		height: 100vh;
		width: 260px;
		color: white;
		padding: 2vw;
		padding-top: 4vw;
		padding-bottom: 4vw;
		box-sizing: border-box;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		position: fixed;
		top: 0;
		z-index: 100;
		box-sizing: border-box;
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
			color: white;
		}
		aside a {
			color: white;
		}
	}
	.button button {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background-color: transparent;
		border: none;
		box-shadow: none;
		padding: 6px 12px;
	}
	@media (max-width: 799px) {
		aside {
			width: 100%;
			height: 100vh;
			align-items: center;
			justify-content: space-evenly;

			border-bottom-left-radius: 12px;
			border-bottom-right-radius: 12px;
		}
	}
	@media (min-width: 800px) {
		.button {
			display: none;
		}
	}
</style>
