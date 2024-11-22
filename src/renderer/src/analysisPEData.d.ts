import { IMAGE_DATA_DIRECTORY, IMAGE_DOS_HEADER, IMAGE_FILE_HEADER, IMAGE_OPTIONAL_HEADER32, IMAGE_OPTIONAL_HEADER64, IMAGE_SECTION_HEADER } from "./pefile"

type HexString = string

export interface OverViewData {
    FilePath: string,
  
    Size: number,
    IsPEFile: boolean,
    Is64bit: string,
    CreateData: Date,
    EntrySectionName: string,
    EntryAddrRVA: HexString,
    EntryAddrFOA: HexString,
    SectionNum: number,
    ImageBase: HexString,
    MD5: string,
    SHA1: string,
    SAH256: string,
    SAH512: string,
    Checksum: string,
    AuthentiHash: string,
    FileType: string,
    FileVersion: string,
    SubSystem: string,
    ICON: string,
  }
  
  export interface HeadersData {
    DosHdr: IMAGE_DOS_HEADER,
    FileHdr: IMAGE_FILE_HEADER,
    OptFileHdr32: IMAGE_OPTIONAL_HEADER32,
    OptFileHdr64: IMAGE_OPTIONAL_HEADER64,
    DataDirs: IMAGE_DATA_DIRECTORY[],
    SecHdrs: IMAGE_SECTION_HEADER[]
  }
  
  export interface Function {
    Addr: string,
    Name: string,
    
  }

  export interface AnalysisPEData {
    OverView: OverViewData,
    Headers: HeadersData,
    Functions: Function[]
  }