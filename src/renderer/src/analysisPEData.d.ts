import { IMAGE_DATA_DIRECTORY, IMAGE_DOS_HEADER, IMAGE_FILE_HEADER, IMAGE_OPTIONAL_HEADER, IMAGE_SECTION_HEADER } from "./pefile"

export interface OverViewData {
    FilePath: string,
  
    Size: number,
    IsPEFile: boolean,
    Is64bit: string,
    CreateData: Date,
    EntrySectionName: string,
    EntryAddrRVA: string,
    EntryAddrFOA: string,
    SectionNum: number,
    ImageBase: string,
    MD5: string,
    SHA1: string,
    SAH256: string,
    SAH384: string,
    SAH512: string,
    Checksum: string,
    AuthentiHash: string, // md5
    AuthentiHash_sha1: string, // sha1
    AuthentiHash_sha256: string, // sha256
    AuthentiHash_sha384: string, // sha384
    AuthentiHash_sha512: string, // sha512
    FileType: string,
    FileVersion: string,
    SubSystem: string,
    ICON: string,
  }
  
  export interface HeadersData {
    DosHdr: IMAGE_DOS_HEADER,
    FileHdr: IMAGE_FILE_HEADER,
    OptFileHdr: IMAGE_OPTIONAL_HEADER,
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