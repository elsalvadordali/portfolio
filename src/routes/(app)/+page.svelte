<script>
</script>

<div class="container">
	<div class="project" id='intro'><h1>Tijana Jung: Frontend engineer</h1></div>
	<div class="project" id='projects'><h2>Projects</h2></div>
	<div class="project" id='bunny'>
		<a href="/bunny-money"
		><h2>Bunny Money</h2></a
		>
			<p>A financial literacy tool for kids, with (cute) neobrutalist vibes.</p>
			<div id='bunny-card'>
				<div id='bunny-circle'></div>
				<div id='bunny-login'></div>
				<div id='bunny-yellow'></div>
			</div>
		</div>
	<div class="project" id='happy-garden'>
		<a href="/happy-garden"
		><h2>Happy Garden</h2></a>
			<p>A gratitude journal with a pixel art twist. <b>Winner of Girl Develop It 2022 health:hack hackathon</b></p>
			<div id='happy-card'>
				<div id='green-1'></div>
				<div id='green-2'></div>
				<div id='green-3'></div>
				<div id='green-4'></div>
				<div id='green-5'></div>
				<div id='green-6'></div>
				<div id='green-7'></div>
				<div id='green-8'></div>
				<div id='green-9'></div>
				<div id='green-10'></div>
				<div id='green-11'></div>
				<div id='green-12'></div>
				<div id='green-13'></div>
				<div id='green-14'></div>
				<div id='green-15'></div>
				<div id='green-16'></div>
				<div id='green-17'></div>
				<div id='green-18'></div>
				<div id='green-19'></div>
				<div id='green-20'></div>
				<div id='green-21'></div>
				<div id='green-22'></div>
				<div id='green-23'></div>
				<div id='green-24'></div>
				<div id='green-25'></div>
				<div id='green-26'></div>
				<div id='green-27'></div>
				<div id='green-28'></div>
				<div id='green-29'></div>
				<div id='green-30'></div>
				<div id='green-31'></div>
				<div id='green-32'></div>
				<div id='green-33'></div>
				<div id='green-34'></div>
				<div id='green-35'></div>
				<div id='green-36'></div>
				<div id='green-37'></div>
				<div id='green-38'></div>
				<div id='green-39'></div>
				<div id='green-40'></div>
				<div id='green-41'></div>
				<div id='green-42'></div>
				<div id='green-43'></div>
				<div id='green-44'></div>
				<div id='green-45'></div>
				<div id='green-46'></div>
				<div id='green-47'></div>
				<div id='green-48'></div>
				<div id='green-49'></div>
				<div id='green-50'></div>
				<div id='green-51'></div>
				<div id='green-52'></div>
				<div id='green-53'></div>
				<div id='green-54'></div>
				<div id='green-55'></div>
				<div id='green-56'></div>
				<div id='green-57'></div>
				<div id='green-58'></div>
				<div id='green-59'></div>
				<div id='green-60'></div>
				<div id='green-61'></div>
				<div id='green-62'></div>
				<div id='green-63'></div>
				<div id='green-64'></div>
				<div id='green-65'></div>
				<div id='green-66'></div>
				<div id='green-67'></div>
				<div id='green-68'></div>
				<div id='green-69'></div>
				<div id='green-70'></div>
				<div id='green-71'></div>
				<div id='green-72'></div>
				<div id='green-73'></div>
				<div id='green-74'></div>
				<div id='green-75'></div>
			</div>
		</div>
	<div class="project" id='us-stats'>
		<a href="/gender-pay-gap"
		><h2>Gender Pay Gap</h2></a>
			<p>A small react & d3.js project to show the disparity of the wages between men and women across different industries.</p>
			<div class="flip-card">
				<div class="flip-card-inner">
				  <div class="flip-card-front" id='stats-card'>
					<div id='blue-1'></div>
					<div id='pink-1'></div>
					<div id='blue-2'></div>
					<div id='pink-2'></div>
				  </div>
				  <div class="flip-card-back">
					<h3>Spoiler: It's bad</h3>
				  </div>
				</div>
			  </div>
		</div>
	<a href="/gender-pay-gap"
		><div class="project" id='portfolio'>
			<h2>This Portfolio</h2>
			<p>Is it tacky to include a portfolio in that portfolio? Not this time!</p>
		</div></a
	>
</div>

<style>
	.container {
		margin-top: 40vh;
		max-height: calc (200vh - 30px);
		overflow-y: scroll;
	}
	.project {
		background-color: white;
		margin: 0;
		padding: 3rem 1rem;
		cursor: pointer;
	}
	a {
		color: black;
	}
	
	#intro {
		background: #a9ddd6;
		padding: 10rem 5rem;
	}
	#projects {
		padding: 3rem
	}
	#bunny {
		background-color: #fbc9be;
		padding: 12rem 3rem;
	}
	#bunny-card {
		display: flex;
		flex-flow: row wrap;
		height: 300px;
		width: 300px;
		transition: .25s;
		border: 2px solid black
	}
	#bunny-card:hover {
		transform: rotate(90deg);
		transform-origin: center center;
	}
	#happy-garden {
		background-color: #69a297;
		padding: 12rem 3rem 6rem 3rem;
		min-height: 400px;
	}
	#us-stats {
		background-color: #e2a499;
		padding: 4rem 3rem;
	}
	
	#portfolio {
		background: #a9ddd6;
		padding: 7rem 3rem;
	}
	
	.flip-card {
		background-color: transparent;
		width: 300px;
		height: 300px;
		perspective: 1000px;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	}

	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front, .flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		
	}

	.flip-card-front {
		background-color: #e2a499;
		border: 2px solid black;
		color: black;
	}

	.flip-card-back {
		background-color: #2980b9;
		color: white;
		transform: rotateY(180deg);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#bunny-circle {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background-color: rgb(207 110 98);
	}
	#bunny-login {
		background-color: rgb(145 186 178);
		width: 140px;
		height: 140px;
		border-radius: 1rem;
		margin: 5px;
	}
	#bunny-yellow {
		background-color: rgb(212 170 98);
		width: 150px;
		height: 150px;
	}
	#happy-card {
		width: 300px;
		height: 300px;
		border: 2px solid black;
		position: relative;
		background-color: #ddd8c4;
	}
	#stats-card {
		background-color: white;
	}
	#green-1,#green-2, #green-3, #green-4, #green-5, #green-6, #green-7, #green-8, 
	#green-9, #green-10, #green-11, #green-12, #green-13, #green-14, #green-15, #green-16, #green-17, #green-18, #green-19, #green-20, 
	#green-21,#green-22, #green-23, #green-24, #green-25, #green-26, #green-27, #green-28, #green-29,#green-30, #green-31, #green-32, 
	#green-33, #green-34, #green-35, #green-36, #green-37, #green-38, #green-39, #green-40, 
	#green-41, #green-42, #green-43, #green-44, #green-45, #green-46, #green-47, #green-48, #green-49,#green-50, #green-51,
	#green-52, #green-53, #green-54, #green-55, #green-56, #green-57, #green-58, #green-59, #green-60, 
	#green-61, #green-62, #green-63, #green-64, #green-65, #green-66, #green-67, #green-68, #green-69,#green-70, #green-71, #green-72, 
	#green-73, #green-74, #green-75 {
		position: absolute;
		top: 280px;
		left: 140px;
		width: 20px;
		height: 20px;
		background-color: #a4c263;
		transition: .5s;
	}
	#green-2 {
		top: 260px;
	}
	#green-3 {
		left: 120px;
	}
	#green-4 {
		top: 260px;
		left: 120px;
	}
	#green-5 {
		top: 240px;
	}
	#happy-card:hover #green-1 {
		background-color: #77a158;
	}
	#happy-card:hover #green-2 {
		left: 160px;
		background-color: #77a158;
	}
	#happy-card:hover #green-3 {
		left: 120px;
		background-color: #77a158;

	}
	#happy-card:hover #green-4 {
		left: 100px;
		top: 260px;
		background-color: #77a158;

	}
	#happy-card:hover #green-5 {
		left: 120px;
		top: 260px;
	}
	#happy-card:hover #green-6 {
		top: 260px;
		background-color: #c0d470;
	}
	#happy-card:hover #green-7 {
		left: 160px;
		top: 260px;
		background-color: #c0d470;


	}
	#happy-card:hover #green-8 {
		left: 180px;
		top: 260px;
		background-color: #77a158;

	}
	#happy-card:hover #green-9 {
		left: 200px;
		top: 260px;
		background-color: #77a158;

	}
	#happy-card:hover #green-10 {
		left: 60px;
		top: 240px;
		background-color: #77a158;

	}
	#happy-card:hover #green-11 {
		left: 80px;
		top: 240px;
		background-color: #77a158;

	}
	#happy-card:hover #green-12 {
		left: 100px;
		top: 240px;
		background-color: #c0d470;
	}
	#happy-card:hover #green-13 {
		left: 120px;
		top: 240px;
	}
	#happy-card:hover #green-14 {
		left: 140px;
		top: 240px;
		background-color: #c0d470;

	}
	#happy-card:hover #green-15 {
		left: 160px;
		top: 240px;
		background-color: #c0d470;

	}
	#happy-card:hover #green-16 {
		left: 180px;
		top: 240px;
		background-color: #d2e077;

	}
	#happy-card:hover #green-17 {
		left: 200px;
		top: 240px;
	}
	#happy-card:hover #green-18 {
		left: 220px;
		top: 240px;
		background-color: #77a158;
	}
	#happy-card:hover #green-19 {
		left: 40px;
		top: 220px;
	}
	#happy-card:hover #green-20 {
		left: 60px;
		top: 220px;
		background-color: #d2e077;

	}
	#happy-card:hover #green-21 {
		left: 80px;
		top: 220px;
		background-color: #c0d470;

	}
	#happy-card:hover #green-22 {
		left: 100px;
		top: 220px;
		background-color: #c0d470;

	}
	#happy-card:hover #green-23 {
		left: 120px;
		top: 220px;
		background-color: #77a158;

	}
	#happy-card:hover #green-24 {
		left: 140px;
		top: 220px;
	}
	#happy-card:hover #green-25 {
		left: 160px;
		top: 220px;
		background-color: #c0d470;

	}
	#happy-card:hover #green-26 {
		left: 180px;
		top: 220px;
	}
	#happy-card:hover #green-27 {
		left: 200px;
		top: 220px;
		background-color: #d2e077;

	}
	#happy-card:hover #green-28 {
		left: 220px;
		top: 220px;
		background-color: #d2e077;

	}
	#happy-card:hover #green-29 {
		left: 240px;
		top: 220px;		
		background-color: #d2e077;

	}
	#happy-card:hover #green-30 {
		left: 260px;
		top: 220px;
	}
	#happy-card:hover #green-31 {
		left: 20px;
		top: 200px;

	}
	#happy-card:hover #green-32 {
		left: 20px;
		top: 200px;
	}
	#happy-card:hover #green-33 {
		left: 40px;
		top: 200px;
		background-color: #d2e077;

	}
	#happy-card:hover #green-34 {
		left: 60px;
		top: 200px;
		background-color: #d2e077;

	}
	#happy-card:hover #green-35 {
		left: 80px;
		top: 200px;
		background-color: #d2e077;

	}
	#happy-card:hover #green-36 {
		left: 100px;
		top: 200px;
	}
	#happy-card:hover #green-37 {
		left: 120px;
		top: 200px;
		background-color: #77a158;

	}
	#happy-card:hover #green-38 {
		left: 140px;
		top: 200px;
		background-color: #77a158;

	}
	#happy-card:hover #green-39 {
		left: 160px;
		top: 200px;
	}
	#happy-card:hover #green-40 {
		left: 200px;
		top: 200px;
	}
	#happy-card:hover #green-41 {
		left: 240px;
		top: 200px;
	}
	#happy-card:hover #green-42 {
		left: 220px;
		top: 200px;
	}
	#happy-card:hover #green-43 {
		left: 40px;
		top: 180px;
	}
	#happy-card:hover #green-44 {
		left: 60px;
		top: 180px;
	}
	#happy-card:hover #green-45 {
		left: 80px;
		top: 180px;
	}
	#happy-card:hover #green-46 {
		left: 120px;
		top: 180px;
		background-color: #77a158;

	}
	#happy-card:hover #green-47 {
		left: 140px;
		top: 180px;
		background-color: #77a158;

	}
	#happy-card:hover #green-48 {
		left: 120px;
		top: 160px;
		background-color: #77a158;

	}
	#happy-card:hover #green-49 {
		left: 140px;
		top: 160px;
		background-color: #77a158;
	}
	#happy-card:hover #green-50 {
		left: 120px;
		top: 140px;
		background-color: #567297;

	}
	#happy-card:hover #green-51 {
		left: 140px;
		top: 140px;
		background-color: #567297;

	}
	#happy-card:hover #green-52 {
		left: 100px;
		top: 120px;
		background-color: #658ca1;

	}
	#happy-card:hover #green-53 {
		left: 120px;
		top: 120px;
		background-color: #658ca1;

	}
	#happy-card:hover #green-54 {
		left: 140px;
		top: 120px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-55 {
		left: 160px;
		top: 120px;
		background-color: #567297;

	}
	#happy-card:hover #green-56 {
		left: 80px;
		top: 100px;
		background-color: #658ca1;

	}
	#happy-card:hover #green-57 {
		left: 100px;
		top: 100px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-58 {
		left: 120px;
		top: 100px;
		background-color: #658ca1;

	}
	#happy-card:hover #green-59 {
		left: 140px;
		top: 100px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-60 {
		left: 160px;
		top: 100px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-61 {
		left: 180px;
		top: 100px;
		background-color: #567297;
	}
	#happy-card:hover #green-62 {
		left: 80px;
		top: 80px;
		background-color: #658ca1;

	}
	#happy-card:hover #green-63 {
		left: 100px;
		top: 80px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-64 {
		left: 120px;
		top: 80px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-65 {
		left: 140px;
		top: 80px;
		background-color: #9bd4c3;

	}
	#happy-card:hover #green-66 {
		left: 160px;
		top: 80px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-67 {
		left: 180px;
		top: 80px;
		background-color: #658ca1;
	}
	#happy-card:hover #green-68 {
		left: 80px;
		top: 60px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-69 {
		left: 100px;
		top: 60px;
		background-color: #9bd4c3;

	}
	#happy-card:hover #green-70 {
		left: 120px;
		top: 60px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-71 {
		left: 140px;
		top: 60px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-72 {
		left: 160px;
		top: 60px;
		background-color: #9bd4c3;
	}
	#happy-card:hover #green-73 {
		left: 180px;
		top: 60px;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-74 {
		left: 100px;
		top: 40px;
		transition: .6s;
		background-color: #8ab5bc;

	}
	#happy-card:hover #green-75 {
		left: 160px;
		top: 40px;
		transition: .75s;
		background-color: #8ab5bc;
	}
	#blue-1 {
		position: relative;
		top: 30px;
		height: 40px;
		width: 180px;
		background-color: #2980b9;
	}
	#pink-1 {
		position: relative;
		top: 50px;
		height: 40px;
		width: 150px;
		background-color: #e2a499;
	}
	#blue-2 {
		position: relative;
		top: 80px;
		height: 40px;
		width: 280px;
		background-color: #2980b9;
	}
	#pink-2 {
		position: relative;
		top: 100px;
		height: 40px;
		width: 90px;
		background-color: #e2a499;
	}

	@media screen and (min-width: 800px) {
		.container {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-evenly;
			margin: 0;
			padding: 0;
		}
		.project {
			width: 50vw;
			padding: 1rem;
			margin: 0;
			box-sizing: border-box;
		}
		#intro {
			padding: 5rem 3rem;
		}
		#projects {
			margin-top: 25vw;
		}
		#bunny {
			min-height: 620px;
			padding: 3rem
		}
		#happy-garden {
			min-height: 620px;
			padding: 3rem
		}
	}
</style>
