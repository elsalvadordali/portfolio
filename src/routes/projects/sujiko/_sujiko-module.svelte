<script lang="ts">
  import Sujiko from './sujiko.svelte'
  import MenuBar from '../../components/_menubar.svelte'
  let show = true
</script>

<div class="flip-card">
  <MenuBar url='/projects/sujiko' bind:show={show} />
  {#if show}
    <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>Sujiko</h1>
        </div>
      <div class="flip-card-back">
        <Sujiko />
      </div>
    </div>
    {/if}
  </div>

<style>
  h1 {
    color: black;
    font-size: 2rem;
  }
  .flip-card {
    background-color: transparent;
    width: 360px;
    perspective: 1000px;
    background-color: #5d7599;
    break-inside: avoid;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 600px;
    transition: transform 0.6s;
    transform-style: preserve-3d;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flip-card-back {
    background-color: #5d7599;
    color: black;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
  }
  @media screen and (min-width: 1360px) {
    .flip-card {
      margin-top: 1rem;
    }
  }
</style>