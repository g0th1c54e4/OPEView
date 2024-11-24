export interface StructMember{
    value: string, // Hex
    typeBytes: number,
    typeName: string,
    offset: number, // with Struction
    offsetFile: number // with File Begin Position
}

export interface IMAGE_DOS_HEADER {
    e_magic : StructMember,
    e_cblp : StructMember,    
    e_cp : StructMember,      
    e_crlc : StructMember,    
    e_cparhdr : StructMember, 
    e_minalloc : StructMember,
    e_maxalloc : StructMember,
    e_ss : StructMember,      
    e_sp : StructMember,      
    e_csum : StructMember,    
    e_ip : StructMember,      
    e_cs : StructMember,      
    e_lfarlc : StructMember,  
    e_ovno : StructMember,    
    e_res : StructMember,
    e_oemid : StructMember,
    e_oeminfo : StructMember,
    e_res2 : StructMember,
    e_lfanew : StructMember,
    
    HeaderSize,
    StubSize
}

export interface IMAGE_FILE_HEADER {
    Machine : StructMember,
    NumberOfSections : StructMember,
    TimeDateStamp : StructMember,
    PointerToSymbolTable : StructMember,
    NumberOfSymbols : StructMember,
    SizeOfOptionalHeader : StructMember,
    Characteristics : StructMember,
    //----
    extra_Characteristics_enableBits : number[]
    extra_Machine : number[]
}

export interface IMAGE_DATA_DIRECTORY {
    VirtualAddress : StructMember,
    Size : StructMember
}

export interface IMAGE_OPTIONAL_HEADER {
    Magic : StructMember,
    MajorLinkerVersion : StructMember,
    MinorLinkerVersion : StructMember,
    SizeOfCode : StructMember,
    SizeOfInitializedData : StructMember,
    SizeOfUninitializedData : StructMember,
    AddressOfEntryPoint : StructMember,
    BaseOfCode : StructMember,
    BaseOfData : StructMember,

    ImageBase : StructMember,
    SectionAlignment : StructMember,
    FileAlignment : StructMember,
    MajorOperatingSystemVersion : StructMember,
    MinorOperatingSystemVersion : StructMember,
    MajorImageVersion : StructMember,
    MinorImageVersion : StructMember,
    MajorSubsystemVersion : StructMember,
    MinorSubsystemVersion : StructMember,
    Win32VersionValue : StructMember,
    SizeOfImage : StructMember,
    SizeOfHeaders : StructMember,
    CheckSum : StructMember,
    Subsystem : StructMember,
    DllCharacteristics : StructMember,
    SizeOfStackReserve : StructMember,
    SizeOfStackCommit : StructMember,
    SizeOfHeapReserve : StructMember,
    SizeOfHeapCommit : StructMember,
    LoaderFlags : StructMember,
    NumberOfRvaAndSizes : StructMember,
    DataDirectory : IMAGE_DATA_DIRECTORY[],
    //----
    extra_DllCharacteristics_enableBits : number[]
    extra_Subsystem : number[]
}

export interface IMAGE_SECTION_HEADER {
    Name : StructMember,
    PhysicalAddress : StructMember,
    VirtualSize : StructMember,
    VirtualAddress : StructMember,
    SizeOfRawData : StructMember,
    PointerToRawData : StructMember,
    PointerToRelocations : StructMember,
    PointerToLinenumbers : StructMember,
    NumberOfRelocations : StructMember,
    NumberOfLinenumbers : StructMember,
    Characteristics : StructMember
}