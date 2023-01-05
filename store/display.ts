import { defineStore } from "pinia"

export const useAlertStore = defineStore('alert', {
    state: () => ({ count: 0, name: 'Ecuador'}),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++
        }
    }
})