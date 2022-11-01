<script lang="ts">
  import MenuBar from '../../components/_menubar.svelte'

  let show = true
</script>
  
  <div class="flip-card">
    <MenuBar url='/projects/bunnymoney' bind:show={show} title={'bunny money'} />
    {#if show}
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>Bunny Money</h1>
        </div>
          <div class="flip-card-back">
            <a href='https://bunnymoney.app/' target='blank'>
              A financial literacy tool for kids <img src='open-in-new.svg' alt=' (opens in new tab)' />
            </a>
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
          background-color: #e07a5f;
          break-inside: avoid;

      }
  
      .flip-card-inner {
          position: relative;
          width: 100%;
          height: 600px;
          text-align: center;
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
          background-color: #e07a5f;

      }
  
      .flip-card-front {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
      }
  
      .flip-card-back {
          color: white;
          transform: rotateY(180deg);
          display: flex;
          justify-content: center;
          align-items: center;
      }
      a {
        color: black;
      }
  </style>