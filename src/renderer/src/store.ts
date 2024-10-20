import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const attrib = reactive({
    FileName: "",
    FilePath: "",
    Size: 1001,
    Buffer: "",

    IsPeFile: true,
    Is64bit: false,
    CreateData: "2024-05-28 09:53:07",
    EntrySectionName: ".text",
    EntryAddrRVA: "0005D735",
    EntryAddrFOA: "0005D735",
    SectionNum: 4,
    ImageBase: "00400000",
    MD5: "F8F1D1CC70D84C198EF035C4BE8C9B52",
    SHA1: "36B6A01AC5F0807D1A305723B828D84C21909896",
    SAH256: "6982D5DE350F70C919D8C039EB2A4B5AC3FB7C10DDBFF6A5347A7ECA201EDC8A",
    SAH512: "BC5A9492FD1C0E41142065FEDCD63646A55C359A98CA03AE0470BB65CA0216E8E78A4F557357B6DD6CFA7CC3F04F3010C6E403F1545BB078E9D8CA40AEAC44A6",
    CRC32: "46891552",
    AuthentiHash: "A4073CA492A2F561628D1E8C91BDA73EED677DE583E34D6FC72622D247300074",
    FileType: "EXE",
    FileVersion: "1.0.0.0",
    SubSystem: "Windows GUI",
    ICON: "66666666666666666666666666666666",

  });

  return { attrib }
})