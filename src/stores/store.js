import { writable } from 'svelte/store'

export const Todostore = writable([
    {
        id: 1,
        text: 'bring the milk'
    },
    {
        id: 2,
        text: 'come back the milk'
    }
])