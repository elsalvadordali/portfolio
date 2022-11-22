<script lang="ts">
	import { browser } from "$app/env";
    const w = browser ? window.innerWidth : 300
    const h = browser ? window.innerHeight : 300
    let shapes = [
        'M 226.5 99 Q 185.5 103 186.5 113 L 186.5 121 Q 147.5 118 145.5 134 Q 107.5 143 116.5 167 Q 121.5 199 117.5 203 Q 95.5 212 103.5 229 Q 97.5 252 107.5 252 Q 83.5 267 97.5 288 Q 105.5 340 128.5 334 Q 131.5 372 142.5 371 Q 165.5 401 180.5 404 Q 224.5 462 255.5 450 Q 266.5 441 278.5 460 Q 327.5 503 394.5 456 Q 409.5 445 409.5 441 Q 415.5 434 412.5 423 Q 403.5 407 427.5 429 Q 458.5 449 507.5 390 Q 548.5 332 524.5 247 Q 506.5 132 427.5 107 Q 397.5 79 384.5 90 Q 354.5 68 328.5 75 Q 238.5 71 226.5 99',
        'M 160.5 284 Q 172.5 396 271.5 435 Q 439.5 487 489.5 448 Q 554.5 413 540.5 296 Q 533.5 210 504.5 143 Q 479.5 59 404.5 62 Q 309.5 49 265.5 79 Q 182.5 131 175.5 172 Q 152.5 217 160.5 284',
        'M 149.5 166 Q 182.5 95 270.5 76 Q 394.5 46 439.5 90 Q 537.5 147 531.5 236 Q 538.5 345 481.5 415 Q 434.5 460 364.5 461 Q 275.5 474 225.5 444 Q 156.5 411 135.5 331 Q 100.5 241 149.5 166',
        'M 122.5 220 Q 120.5 134 166.5 112 Q 237.5 41 269.5 48 Q 397.5 28 412.5 60 Q 493.5 96 498.5 135 Q 527.5 190 517.5 261 Q 533.5 333 488.5 398 Q 428.5 457 366.5 460 Q 227.5 456 186.5 413 Q 101.5 321 122.5 220',
        'M 127.5 182 Q 139.5 122 206.5 104 Q 333.5 27 364.5 53 Q 450.5 57 446.5 84 Q 505.5 127 498.5 157 Q 544.5 232 534.5 253 Q 553.5 324 518.5 364 Q 482.5 448 432.5 454 Q 290.5 491 246.5 449 Q 150.5 405 148.5 369 Q 111.5 330 128.5 287 Q 100.5 228 127.5 182',
        'M 172 144 Q 200 92 238 90 Q 371 54 393 70 Q 488 93 498 163 Q 522 242 509 295 Q 516 392 461 430 Q 396 473 307 456 Q 205 458 173 403 Q 108 324 128 241 Q 125 174 172 144'    
    ]

    const arr = []
    
    function createLeaf() {
        let n = 100
        while (n > 0) {
            let s = {
                num: 0,
                x: 0,
                y: 0
            }
            s.num = Math.floor(Math.random() * shapes.length)
            s.x = ((w ) * Math.random()) + 100
            s.y = ((h ) * Math.random() + 100)
            arr.push(s)
            n--

        }
    }
    createLeaf()
</script>
<div id='screen'>
<svg width={w } height={h} id='svg' fill="#23222a">
    <radialGradient id="0">
        <stop offset="20%" stop-color="#0a472e" />
        <stop offset="97%" stop-color="#20694e" />
        <stop offset="99%" stop-color="#000000" />
      </radialGradient>
      <radialGradient id="1">
        <stop offset="10%" stop-color="#116760" />
        <stop offset="30%" stop-color="#136564" />x
        <stop offset="99%" stop-color="#13545b" />
      </radialGradient>
      {#each arr as shape} 
        <path d={shapes[shape]} transform={'scale(' + Math.min(.5, .6) + ') rotate(' + Math.random() * 360 + ' 0 0) translate(' + shape.x + ', ' + shape.y + ')'} fill='url(#1)'/>
      {/each}
</svg>
</div>

<style>
    #screen {
        background-color: #010619;
    }
</style>