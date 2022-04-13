import {unzip, deflate} from "zlib";
import pako from 'pako';

async function uncompress(fileContent) {
    try {
        const indexCarriageReturn = fileContent.indexOf('\n');
        const header = fileContent.slice(0, indexCarriageReturn);
        const compressedData = fileContent.slice(indexCarriageReturn + 5);
        const uncompressedData = pako.inflate(compressedData);
        const data = uncompressedData.toString('utf8');
        return { header, data };
    } catch (e) {
        console.log({e})
        throw e;
    }
}

async function compress(data, type, fileName) {
    const fourByteHeader = longToByteArray(data.length);

    const header = `ORTHOSCRIBE/${type}/1\n`;

    const compressedDatas = await deflate(data);

    const buf1 = Buffer.from(header);
    const buf2 = Buffer.from(fourByteHeader);
    const buf3 = Buffer.from(compressedDatas);
    const totalLength = buf1.length + buf2.length + buf3.length;
    const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);
    await writeFile(fileName, bufA);
}

const longToByteArray = long => {
    // we want to represent the input as a 8-bytes array
    const byteArray = [0, 0, 0, 0];
    let val = long;
    for (let index = byteArray.length - 1; index > 0; index -= 1) {
        // eslint-disable-next-line no-bitwise
        const byte = val & 0xff;
        byteArray[index] = byte;
        val = (long - byte) / 256;
    }
    return byteArray;
};

export { uncompress, compress };
