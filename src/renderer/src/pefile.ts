export interface IMAGE_DOS_HEADER {
    e_magic,
    e_cblp,    
    e_cp,      
    e_crlc,    
    e_cparhdr, 
    e_minalloc,
    e_maxalloc,
    e_ss,      
    e_sp,      
    e_csum,    
    e_ip,      
    e_cs,      
    e_lfarlc,  
    e_ovno,    
    e_res,  
    e_oemid,   
    e_oeminfo, 
    e_res2,
    e_lfanew,
    
    HeaderSize,
    StubSize
}

export interface IMAGE_FILE_HEADER {
    Machine,
    NumberOfSections,
    TimeDateStamp,
    PointerToSymbolTable,
    NumberOfSymbols,
    SizeOfOptionalHeader,
    Characteristics,
    //----
    extra_Characteristics_enableBits : number[]
}

export interface IMAGE_DATA_DIRECTORY {
    VirtualAddress,
    Size
}

export interface IMAGE_OPTIONAL_HEADER {
    Magic,
    MajorLinkerVersion,
    MinorLinkerVersion,
    SizeOfCode,
    SizeOfInitializedData,
    SizeOfUninitializedData,
    AddressOfEntryPoint,
    BaseOfCode,
    BaseOfData,

    ImageBase,
    SectionAlignment,
    FileAlignment,
    MajorOperatingSystemVersion,
    MinorOperatingSystemVersion,
    MajorImageVersion,
    MinorImageVersion,
    MajorSubsystemVersion,
    MinorSubsystemVersion,
    Win32VersionValue,
    SizeOfImage,
    SizeOfHeaders,
    CheckSum,
    Subsystem,
    DllCharacteristics,
    SizeOfStackReserve,
    SizeOfStackCommit,
    SizeOfHeapReserve,
    SizeOfHeapCommit,
    LoaderFlags,
    NumberOfRvaAndSizes
    DataDirectory : IMAGE_DATA_DIRECTORY[]
    //----
    extra_DllCharacteristics_enableBits : number[]
}

export interface IMAGE_SECTION_HEADER {
    Name : string,
    PhysicalAddress,
    VirtualSize,
    VirtualAddress,
    SizeOfRawData,
    PointerToRawData,
    PointerToRelocations,
    PointerToLinenumbers,
    NumberOfRelocations,
    NumberOfLinenumbers,
    Characteristics
}