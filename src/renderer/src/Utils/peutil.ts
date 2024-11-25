import { useGlobalStore } from "@renderer/store";
import { hexToNumber, numberToHex } from "./util";
const global = useGlobalStore()

export function rva2foa(rva : string) : string{
    const rva_num : number = hexToNumber(rva)
    if (rva_num < hexToNumber(global.attrib.Headers.OptFileHdr.SizeOfHeaders.value)){
        return rva
    }
    let ret : string = ""
    for (let i = 0; i < hexToNumber(global.attrib.Headers.FileHdr.NumberOfSections.value); i++) {
        const secHdr = global.attrib.Headers.SecHdrs[i];
        const secVirtualAddress : number = hexToNumber(secHdr.VirtualAddress.value)
        const secRawSize : number = hexToNumber(secHdr.SizeOfRawData.value)
        if (rva_num >= secVirtualAddress && rva_num < (secVirtualAddress + secRawSize)) {
			ret = numberToHex((rva_num - secVirtualAddress) + hexToNumber(secHdr.PointerToRawData.value));
            break;
		}
    }
    return ret.toUpperCase()
}

export function foa2rva(foa : string) : string{
    const foa_num : number = hexToNumber(foa)
    if (foa_num < hexToNumber(global.attrib.Headers.OptFileHdr.SizeOfHeaders.value)){
        return foa
    }
    let ret : string = ""
    for (let i = 0; i < hexToNumber(global.attrib.Headers.FileHdr.NumberOfSections.value); i++) {
        const secHdr = global.attrib.Headers.SecHdrs[i];
        const secPointerToRawData : number = hexToNumber(secHdr.PointerToRawData.value)
        const secRawSize : number = hexToNumber(secHdr.SizeOfRawData.value)
        if (foa_num >= secPointerToRawData && foa_num < (secPointerToRawData + secRawSize)) {
			ret = numberToHex((foa_num - secPointerToRawData) + hexToNumber(secHdr.VirtualAddress.value));
            break;
		}
    }
    return ret.toUpperCase()
}

export function rva_sectionName(rva : string) : string{
    const rva_num : number = hexToNumber(rva)
    if (rva_num < hexToNumber(global.attrib.Headers.OptFileHdr.SizeOfHeaders.value)){
        return rva
    }
    let ret : string = ""
    for (let i = 0; i < hexToNumber(global.attrib.Headers.FileHdr.NumberOfSections.value); i++) {
        const secHdr = global.attrib.Headers.SecHdrs[i];
        const secVirtualAddress : number = hexToNumber(secHdr.VirtualAddress.value)
        const secRawSize : number = hexToNumber(secHdr.SizeOfRawData.value)
        if (rva_num >= secVirtualAddress && rva_num < (secVirtualAddress + secRawSize)) {
			ret = secHdr.Name.value
            break;
		}
    }
    return ret
}