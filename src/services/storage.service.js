import ImageKit from "@imagekit/nodejs";

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadImage(fileName,bufferBase64String){
    const result = await client.files.upload({
  file: bufferBase64String,
  fileName: fileName,
});

return result
}

export default uploadImage