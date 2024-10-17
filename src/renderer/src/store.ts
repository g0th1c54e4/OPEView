import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const attrib = reactive({
    filename: "",
    size: 1001,
    buffer: "",
    isPeFile: false,
    is64bit: false,
  });
  return { attrib }
})