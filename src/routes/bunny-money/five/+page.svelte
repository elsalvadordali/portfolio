<script lang='ts'>
	import Logo from '../../Logo.svelte';
	const parentPage = '/bunny-money/bunny-money-hi-fi-parents-page-mockup.png';
	const kidPage = '/bunny-money/bunny-money-hi-fi-kids-page-mockup.png';
	const homePage = '/bunny-money/bunny-money-hi-fi-home-mockup.png';

	const links = [
		{
			href: '/bunny-money',
			name: 'Ideation',
			current: false
		},
		{
			href: '/bunny-money/two',
			name: 'Lo-fi prototype',
			current: false
		},
		{
			href: '/bunny-money/three',
			name: 'Testing',
			current: false
		},
		{
			href: '/bunny-money/four',
			name: 'Hi-fi',
			current: false
		},
		{
			href: '/bunny-money/five',
			name: 'Development',
			current: true
		}
	];
</script>

<div class='body'>
	<aside>
		<Logo />
		<div class='links'>
			{#each links as link}
				<a href={link.href} class={link.current ? 'bold' : ''}
					>{link.current ? '> ' : ''}{link.name}</a
				>
			{/each}
		</div>
	</aside>
	<article>
			<h1>Bunny Money</h1>
			<h2>Part 5: Development</h2>
			<div class='screenshots'>
				<div class='img-caption'>
                    <div class='img'>
					<img src={homePage} alt='Bunny Money home page mockup' />
                    </div>
					<div class='caption'>
						<p>Part Five is where the fun begins.</p>
						<h3>The Backend</h3>
						<p>
							The Backend uses Firebase for both storage of data as well as authentication. I
							decided to keep it simple and only use e-mail authentication. If the name matches the
							one stored in the parent’s account, they are able to login. Only parents have proper
							accounts. Children login via the parent’s login, while supplying a child’s name. I
							chose to do it this way to keep things simple. Since firebase uses a document type
							database, it is easier and faster to make just one query.
						</p>
					</div>
				</div>
				<div class='img-caption'>
                    <div class='img'>
					<img src={parentPage} alt='The parent home page mockup of bunny money' />
                    </div>
					<div>
						<h3>The Frontend</h3>
						<p>
							The Frontend was made using TypeScript and Svelte. Since it’s a small three “page” app, I opted for Svelte over Sveltekit because the later was still pre-beta, and it would have been overkill.
						</p>
					</div>
				</div>
				
			</div>
	</article>
</div>

<style>
	aside {
		background-color: #cfaea9;
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
		position: fixed;
	}
	article {
		margin-left: 22%;
		width: 78%;
		height: fit-content;
		background-color: #d9d3c4;
		color: black;
		padding: 1vw;
		padding: 4vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	h1,
	h2 {
		font-size: 2em;
		margin-bottom: 1em;
	}
	p,
	h3 {
		margin-bottom: 2em;
        width: 320px
	}
	.screenshots {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		padding-right: 1vw;
		width: 100%;
	}
	.img-caption {
		width: 100%;
		margin-bottom: 4vw;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		gap: 10%;
	}
    .img {
        display: flex;
        flex-direction: row;
        justify-content: flex-end
    }
	.img-caption div {
		width: 45%;
	}
	.img-caption img {
		width: 200px;
		height: auto;
	}
	.img-caption p {
		font-size: 16px;
		width: 320px;
		margin-bottom: 12px;
		line-height: 1.5em;
	}
	.img-caption:nth-child(1), .img-caption:nth-child(3) {
		flex-direction: row-reverse;
		justify-content: flex-end;
	}
    .img-caption:nth-child(1) .img, .img-caption:nth-child(3) .img {
		justify-content: flex-start;
	}
    .img-caption:nth-child(1) .caption, .img-caption:nth-child(3) .caption {
		display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
	}
</style>
