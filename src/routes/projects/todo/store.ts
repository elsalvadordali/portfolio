import { browser } from "$app/env";
import { writable } from "svelte/store";


let stored = browser ? JSON.parse(window.localStorage.getItem('todo')) : false
//const stored = browser ? window.localStorage.getItem('todo') : [{task: 'buy rubber duck', isComplete: false, date: new Date()}]

if (!stored) stored = [{task: 'buy rubber duck', isComplete: false, date: new Date()}]
if (browser) window.localStorage.setItem('todo', JSON.stringify(stored))


//export const tasks = writable(stored)


function createTasks() {
    const { subscribe, set, update } = writable(stored)
    return {
      subscribe,
      set: (list) => {
        browser && window.localStorage.setItem('todo', JSON.stringify(list))
        set(list)
      },
      add: (task: object) => update((arr) => {
        browser && window.localStorage.setItem('todo', JSON.stringify([...arr, task]))
        return [...arr, task]
      
    }),
      updateOne: (newTask: object) => update((arr) => {
        let updatedArr = arr.map(oldTask => {
          if (oldTask.task === newTask.task && oldTask.date === newTask.date) return newTask
          else return oldTask
        })
        browser && window.localStorage.setItem('todo', JSON.stringify(updatedArr))
        return updatedArr
      }),
      update: (newVal: object) => update((val: object) => newVal)
    }
  }
  export const tasks = createTasks()


  