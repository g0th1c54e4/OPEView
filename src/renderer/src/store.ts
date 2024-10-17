import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const count = ref(1);
  function change(newval : number){
    count.value = newval;
  }
  return { count, change }
})