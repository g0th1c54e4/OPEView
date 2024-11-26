export const SubSystem_Captions : string[] = [
    "Unknown",
    "Native",
    "Windows GUI",
    "Windows CUI",
    "OS2 CUI",
    "Posix CUI",
    "Windows Native",
    "Windows CE GUI",
    "EFI Application",
    "EFI Boot Service Driver",
    "Runtime Driver",
    "EFI Rom",
    "XBox",
    "Windows Boot Application",
    "XBox Code Catalog"
]

export const FileHdrCharacteristics_Captions : string[] = [
    "Relocation info stripped from file",
    "File is executable",
    "Line nunbers stripped from file",
    "Local symbols stripped from file",
    "Aggressively trim working set",
    "App can handle > 2gb addresses",
    "[Don't REMOVE THIS!!!]",
    "Bytes of machine word are reversed (low)",
    "32 bit word machine",
    "Debugging info stripped from file in .DBG file",
    "If Image is on removable media, copy and run from the swap file",
    "If Image is on Net, copy and run from the swap file",
    "System File",
    "File is a DLL",
    "File should only be run on a UP machine",
    "Bytes of machine word are reversed (high)"
]

export const FileHdrMachine_Captions = [
    {
        name: "Unknown",
        value: 0
    },
    {
        name: "Intel 386",
        value: 0x014C
    },
    {
        name: "MIPS-R3000 little-endian",
        value: 0x0162
    },
    {
        name: "MIPS-R4000 little-endian",
        value: 0x0166
    },
    {
        name: "MIPS-R10000 little-endian",
        value: 0x0168
    },
    {
        name: "MIPS little-endian WCE v2",
        value: 0x0169
    },
    {
        name: "Alpha_AXP",
        value: 0x0184
    },
    {
        name: "SH3 little-endian",
        value: 0x01A2
    },
    {
        name: "SH3DSP",
        value: 0x01A3
    },
    {
        name: "SH3E little-endian",
        value: 0x01a4
    },
    {
        name: "SH4 little-endian",
        value: 0x01a6
    },
    {
        name: "SH5",
        value: 0x01a8
    },
    {
        name: "ARM Little-Endian",
        value: 0x01c0
    },
    {
        name: "ARM Thumb/Thumb-2 Little-Endian",
        value: 0x01c2
    },
    {
        name: "ARM Thumb-2 Little-Endian",
        value: 0x01c4
    },
    {
        name: "Am33",
        value: 0x01d3
    },
    {
        name: "IBM PowerPC Little-Endian",
        value: 0x01F0
    },
    {
        name: "IBM PowerPC PCFP",
        value: 0x01f1
    },
    {
        name: "Intel 64",
        value: 0x0200
    },
    {
        name: "MIPS16",
        value: 0x0266
    },
    {
        name: "ALPHA64",
        value: 0x0284
    },
    {
        name: "MIPSFPU",
        value: 0x0366
    },
    {
        name: "MIPSFPU16",
        value: 0x0466
    },
    {
        name: "AXP64",
        value: 0x0284
    },
    {
        name: "TRICORE Infineon",
        value: 0x0520
    },
    {
        name: "CEF",
        value: 0x0CEF
    },
    {
        name: "EFI Byte Code",
        value: 0x0EBC
    },
    {
        name: "AMD64 (K8)",
        value: 0x8664
    },
    {
        name: "M32R little-endian",
        value: 0x9041
    },
    {
        name: "ARM64 Little-Endian",
        value: 0xAA64
    },
    {
        name: "CEE",
        value: 0xC0EE
    },
    
]

export const DllCharacteristics_Captions : string[] = [
    "[Don't REMOVE THIS!!!]",
    "[Don't REMOVE THIS!!!]",
    "[Don't REMOVE THIS!!!]",
    "[Don't REMOVE THIS!!!]",
    "[Don't REMOVE THIS!!!]",
    "Image can handle a high entropy 64-bit virtual address space",
    "DLL can move",
    "Code Integrity Image",
    "Image is NX compatible",
    "Image understands isolation and doesn't want it",
    "Image does not use SEH.  No SE handler may reside in this image",
    "Do not bind this image",
    "Image should execute in an AppContainer",
    "Driver uses WDM model",
    "Image supports Control Flow Guard",
    "Terminal Server Aware"
]

export const DataDir_Captions: string[] = [
    "Export Directory (导出表)",
    "Import Directory (导入表)",
    "Resource Directory (资源表)",
    "Exception Directory (异常表)",
    "Security Directory",
    "Base Relocation Table (重定位表)",
    "Debug Directory",
    "Architecture Specific Data",
    "RVA of GP",
    "TLS Directory (线程存储)",
    "Load Configuration Directory",
    "Bound Import Directory in headers",
    "Import Address Table",
    "Delay Load Import Descriptors",
    "COM Runtime descriptor"
]