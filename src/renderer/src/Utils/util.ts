export function uint8ArrayToBase64(u8Array : Uint8Array) : string{
    let binaryString = '';
    u8Array.forEach((byte) => {
        binaryString += String.fromCharCode(byte);
    });

    const base64 = btoa(binaryString);
    return base64;
}

export function base64ToUint8Array(base64String : string) : Uint8Array{
    if (typeof Buffer !== 'undefined') {
      const buffer = Buffer.from(base64String, 'base64');
      return new Uint8Array(buffer);
    }

    const binaryString = window.atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

export function hexToNumber(hex : string) : number{
  return parseInt(hex, 16)
}

export function numberToHex(num : number) : string{
  return Number(num).toString(16)
}