import { writable } from 'svelte/store';

export const scrollTop = writable(0);

export const playingSong = writable(null);
