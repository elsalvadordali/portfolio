<script lang="ts">
  import Calendar from "./calendar.svelte";
  import MenuBar from '../../components/_menubar.svelte'
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  let show = true

  $: block = tweened(show ? 100 : 0, {
    duration: 500,
    easing: cubicInOut
  })
</script>
  
<div class="flip-card">
  <MenuBar url='/projects/calendar' bind:show={show} />
  <div id='calc' class={show ? 'flip-card-inner' : 'no-height'} height={$block}>
    <div class="flip-card-front">
      <h1>Calendar</h1>
    </div>
    <div class="flip-card-back">
      <h2>Calendar</h2>
      <Calendar />
    </div>
  </div>
</div>
  
<style>
  h1 {
    color: black;
    font-size: 2rem;
  }
  h2 {
    color: black;
    text-align: center;
    width: 100%;
  }

  @keyframes mainBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
  .flip-card {
    background-color: transparent;
    width: 360px;
    perspective: 1000px;
    background-color: #f4f1de;
    break-inside: avoid;
  }
  .no-height {
    height: 10px;
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
    background-color: #f4f1de;
    transform: rotateY(180deg);
  }
  @media screen and (min-width: 1360px) {
    .flip-card {
      margin-top: 1rem;
    }
  }
</style>