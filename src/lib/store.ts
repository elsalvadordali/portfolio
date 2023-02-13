import { writable } from "svelte/store";

export const showLilyPads = writable(false);


export function toggleLilyPads() {
    showLilyPads.update((n: Boolean)  => !n);
}