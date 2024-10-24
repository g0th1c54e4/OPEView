import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { IMAGE_DOS_HEADER } from "./pefile"

export interface OverViewData {
  FileName: string,
}

export interface AnalysisPEData {
  OverView: OverViewData,
}

export const useGlobalStore = defineStore('global', () => {
  const attrib : AnalysisPEData = reactive({
    OverView: {
      FileName : ""
      
    },
  });

  return { attrib }
})


export function updateStore(new_store_data : AnalysisPEData){
  const global = useGlobalStore()
  
}