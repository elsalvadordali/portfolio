<div class="card">
	<h2>Bunny Money</h2>
	<div class="card-info">
		<p>A Progressive web app that teaches kids financial literacy</p>
	</div>
	<a href="https://bunnymoney.app/" target="_blank">
		<img src="/bunny.png" alt="screenshot of happy garden" />
	</a>
	<div class="credentials">
		<p><b>email:</b> mrtest@test.com</p>
		<p><b>password:</b> aaaaaa</p>
	</div>
	<div>
		<a href="https://bunnymoney.app/" target="_blank" class="link">Site</a>
		<a href="https://github.com/elsalvadordali/bunny-money" target="_blank" class="github">github</a
		>
	</div>
	<div>
		<h4>About</h4>
		<p>
			This is an app that simulates what it's like for a kid to have a bank account (minus the
			annoying e-mails).
		</p>
		<p>
			Parents can log in and manage the kid's account behind the scenes. Kids can log in and watch
			their money grow, or they can spend it.
		</p>
		<h4>Tech</h4>
		<p>
			This was the first PWA I created, and I used svelte.js to do it. The backend uses firebase,
			and allows for authentication and a no-sql database.
		</p>
	</div>
</div>

<style>
	
	b {
		background-color: yellow;
		padding: 0.25rem 0.5rem;
	}
	a {
		margin: 0.5rem;
	}
	.card {
		background-color: #fff;
		margin-top: 60vh;
		padding: 1rem;
	}
	.credentials {
		border: 2px solid black;
		padding: 1.5rem;
		margin: 1rem 0;
	}
	@media (prefers-color-scheme: dark) {
		.card {
			background-color: #272f34;
		}
		b {
			background-color: #999;
		}
	}
	@media (min-width: 850px) {
		.card {
			position: relative;
			margin: 0;
		}
		.credentials {
			border: 2px solid black;
		}
		img {
			width: 50%;
		}
	}
</style>
