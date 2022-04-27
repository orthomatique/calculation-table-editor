import pako from 'pako';

async function uncompress(fileContent) {
    try {
        const indexCarriageReturn = fileContent.indexOf('\n'.charCodeAt(0));
        const header = fileContent.slice(0, indexCarriageReturn);
        const compressedData = fileContent.slice(indexCarriageReturn + 5);
        const data = pako.inflate(compressedData, {to: 'string'});
        return { header, data };
    } catch (e) {
        console.log({e})
        throw e;
    }
}

async function compress(data, type) {
    const fourByteHeader = longToByteArray(data.length);

    const header = `ORTHOSCRIBE/${type}/1\n`;

    const compressedDatas = pako.deflate(data);

    const buf1 = Buffer.from(header);
    const buf2 = Buffer.from(fourByteHeader);
    const buf3 = Buffer.from(compressedDatas);
    const totalLength = buf1.length + buf2.length + buf3.length;
    return Buffer.concat([buf1, buf2, buf3], totalLength);
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
