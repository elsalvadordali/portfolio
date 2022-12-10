import { browser } from '$app/environment';
import type { LilyPadType } from './types';
import anime from 'animejs';

export let clickedLilyPadCount = 0
export const RADIUS = 35;
export const WIDTH: number = browser ? window.innerWidth > 700 ? window.innerWidth + 35 : window.innerWidth : 1000;
export const HEIGHT: number = browser ? window.innerHeight * 2 : 1000;
export let coords = { x: 0, y: 0 }
export const MAX_NUMBER_OF_HORIZONTAL_LILY_PADS = Math.floor(WIDTH / 70)
export const MAX_NUMBER_OF_VERTICAL_LILY_PADS = Math.floor(HEIGHT / 60)
export const PADS_SVG_PATHS = [
    ' c0,0,3.232,18.653,21.278,19.704c18.047,1.051,28.551,-6.568,30.167,-9.984c1.617,-3.415,10.084,-9.195,5.775,-24.695c-4.31,-15.5,-19.242,-19.966,-19.242,-19.966c0,0,-15.891,-4.992,-23.972,0c-8.08,4.991,-13.834,16.344,-15.181,22.912c-1.347,6.568,1.175,12.029,1.175,12.029z',
    ' c0,0,0,6.137,6.161,11.573c0,0,4.96,-3.419,2.999,3.376c11.202,7.067,19.405,10.6,31.167,3.805c0,0,-1.68,-7.682,4.201,-1.702c14.842,-11.687,14.965,-20.314,14.965,-26.837c0,0,-11.202,-0.407,0,-3.668c-5.601,-17.396,-19.166,-22.153,-19.166,-22.153c0,0,-5.881,6.975,-5.041,-1.994c-20.163,0,-23.524,5.256,-26.885,7.702c0,0,3.081,5.708,-3.64,3.533c-7.561,12.775,-4.761,26.365,-4.761,26.365z',
    ' c0,0,-2.92,8.767,5.864,18.65c0,0,18.668,-17.374,5.491,3.489c16.745,16.471,37.883,0,37.883,0c0,0,16.197,-9.529,7.961,-32.863c-8.235,-23.334,-24.706,-20.589,-24.706,-20.589c0,0,-18.393,-1.098,-26.629,9.609c-8.235,10.706,-5.864,21.704,-5.864,21.704z',
    ' c0,0,6.929,-3.879,13.916,-2.073c0,0,-1.165,17.013,5.49,1.088c8.484,2.134,11.146,5.91,13.641,8.866c2.495,2.955,8.661,10.999,7.33,20.686c-1.331,9.686,-5.667,16.747,-8.328,19.867c-2.662,3.119,-11.612,11.655,-26.917,8.207c-15.305,-3.447,-22.337,-11.656,-23.834,-21.343c-1.497,-9.686,-0.986,-17.074,4.171,-24.298c5.157,-7.224,10.314,-9.358,12.476,-10.179c2.163,-0.821,2.055,-0.821,2.055,-0.821z',
    ' c3.927,-15.582,7.769,-20.699,19.27,-24.948c1.523,-0.563,3.012,-0.977,4.449,-1.271c9.407,-1.927,16.573,1.271,16.573,1.271c0,0,14.306,5.383,17.953,17.565c3.646,12.182,0,20.815,0,20.815c0,0,-2.805,8.58,-8.696,11.98c-5.891,6.232,-17.391,8.226,-21.318,7.659c-3.927,-0.566,-17.953,-5.087,-21.88,-9.903c-5.89,-7.649,-6.912,-12.119,-6.351,-23.168z',
    ' c0,0,2.689,7.847,9.12,11.486c0,0,10.382,-8.891,5.349,4.547c5.872,2.239,22.09,8.051,35.512,-4.547c10.346,-14.837,8.376,-21.448,8.096,-27.327c0,0,-8.655,-1.16,-3.622,-7.878c-8.668,-14.837,-16.777,-18.589,-34.673,-16.35c-17.896,2.24,-21.151,22.558,-21.151,22.558c0,0,-0.503,10.868,0,13.948c0.919,0.991,1.369,3.563,1.369,3.563z',
    ' c0,0,-6.436,1.957,-9.546,10.511c2.721,1.555,3.075,6.609,-1.98,5.443c-3.888,12.053,-1.755,20.32,6.799,29.651c8.554,9.332,21.086,9.115,21.086,9.115c0,0,17.994,0.892,25.381,-12.717c5.055,-15.552,7.776,-19.828,0,-37.713c-11.664,-13.22,-30.975,-9.135,-30.975,-9.135z',
    ' c0,0,-3.085,5.726,-1.083,12.56c0,0,15.459,-0.923,5.086,9.605c3.094,5.172,6.551,11.636,15.832,13.114c9.28,1.478,21.29,2.489,30.025,-7.854c3.639,-5.172,6.187,-8.4,7.825,-14.865c1.638,-6.465,-0.364,-20.872,-5.641,-25.305c0,0,-7.825,2.217,-6.187,-5.356c-7.825,-6.465,-18.743,-5.663,-18.743,-5.663c0,0,-12.92,-1.171,-20.745,9.542c-4.185,5.91,-6.369,14.222,-6.369,14.222z'
];
export const COLORS = [
    '#0b4d3d',
    '#084637',
    '#1d6655',
    '#12443b',
    '#0c452c',
    '#094a2c',
    '#0d423f',
    '#0b472c',
    '#054f2c',
    '#ecb865',
    '#ffb284',
    '#d87f81',
    '#cbdfbd',
    '#91adc2',
    '#a6808c',
    '#706677',
    '#fbc9be',
    '#df8053',
    '#a9ddd6'
];

export function generateLilyPads(i: number, j: number, runningTwice: boolean) {
    const lilyPad: LilyPadType = {
        x: 0,
        y: 0,
        distance: Number.POSITIVE_INFINITY,
        floatAnimation: Math.ceil(Math.random() * 9),
        colorIndex: Math.floor(Math.random() * Math.floor(COLORS.length / 2)),
        pathIndex: Math.floor(Math.random() * PADS_SVG_PATHS.length),
        css: `small`
    };

    lilyPad.css = `float-${lilyPad.floatAnimation} f-9 small`
    lilyPad.x = runningTwice ? j * (RADIUS * 2) + 35 : j * (RADIUS * 2)
    lilyPad.y = runningTwice ? i * (RADIUS * 2) + 35 : i * (RADIUS * 2)
    return lilyPad
}
function returnDistance(clickCoord: number[], lilyPad: LilyPadType) {
    return Math.sqrt((clickCoord[0] - lilyPad.x) ** 2 + (clickCoord[1] - lilyPad.y) ** 2);
}

export function changeColor(lilyPad: LilyPadType): LilyPadType {
    lilyPad.colorIndex = Math.floor(Math.random() * 10) + 9;
    return lilyPad;
}


export function wave(e: MouseEvent, lilyPads: LilyPadType[], waves: [number, number][]) {
    if (e.target.nodeName == 'path') return waves
    e.preventDefault()
    const CLICKED_ON_X = e.pageX;
    const CLICKED_ON_Y = e.pageY;
    let elements = document.querySelectorAll('.small')

    waves = [...waves, ([CLICKED_ON_X, CLICKED_ON_Y])]
    let closestLilyPad = 0
    for (let i = 0; i < lilyPads.length; i++) {
        lilyPads[i].distance = returnDistance([CLICKED_ON_X, CLICKED_ON_Y], lilyPads[i])
        if (lilyPads[i].distance < lilyPads[closestLilyPad].distance) closestLilyPad = i
        elements[i].classList.remove('float-' + lilyPads[i].floatAnimation)
    }
    anime({
        targets: '.small',
        keyframes: [
            {
                translateX: anime.stagger(13, {
                    grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2],
                    from: closestLilyPad,
                    axis: 'x'
                }),
                translateY: anime.stagger(20, {
                    grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2],
                    from: closestLilyPad,
                    axis: 'y'
                }),
                duration: 1000
            },
            {
                translateX: anime.stagger(1, {
                    grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2],
                    from: closestLilyPad,
                    axis: 'x'
                }),
                translateY: anime.stagger(1, {
                    grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2],
                    from: closestLilyPad,
                    axis: 'y'
                }),
                offset: '-=100',
                duration: 2200
            },
            {
                translateX: anime.stagger('-=1', {
                    grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2],
                    from: closestLilyPad,
                    axis: 'x'
                }),
                translateY: anime.stagger('-=1', {
                    grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2],
                    from: closestLilyPad,
                    axis: 'y'
                }),
                duration: 500
            },
            {
                translateX: anime.stagger('-=1', {
                    grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2],
                    from: closestLilyPad,
                    axis: 'x'
                }),
                translateY: anime.stagger('-=1', {
                    grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2],
                    from: closestLilyPad,
                    axis: 'y'
                }),
                duration: 500
            },
        ],
      
        from: closestLilyPad,
        easing: 'easeOutElastic(2, 2)',        
        delay: anime.stagger(200, {grid: [MAX_NUMBER_OF_HORIZONTAL_LILY_PADS * 2, MAX_NUMBER_OF_VERTICAL_LILY_PADS * 2], from: closestLilyPad}),
        complete: function() {
            for (let i = 0; i < lilyPads.length; i++) {
                elements[i].classList.add('float-' + lilyPads[i].floatAnimation)
                elements[i].style.transform = ''
            }
        }
    });
    return waves
}