import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { ElNotification } from 'element-plus'
import { AnalysisPEData } from './analysisPEData';

import { settings } from "./settings"

export const useGlobalStore = defineStore('global', () => {
  // @ts-ignore
  const attrib : AnalysisPEData = reactive({
    OverView:{
      FilePath: "",
      Is64bit: "",
      Size: 0,
    },
    Headers:{
      DosHdr:{
        e_magic: "",
        e_lfanew: ""
      }
    }
  });

  const settings : settings = reactive({ //默认设置
    prefix_hex_string_0x: false
  });

  return { attrib, settings }
})

export function updateStore(new_store_data : AnalysisPEData){
  if (new_store_data.OverView.IsPEFile === false){
    ElNotification({
      title: "加载错误:",
      message: "这不是一个合法的PE文件。",
      duration: 3000,
      type: 'error'
    })
    return;
  }
  const global = useGlobalStore()
  global.attrib = new_store_data;
}