
const UploadImage = async (image) => {
    // const cloudName = process.env.REACT_APP_CLOUD_NAME_CLOUDINARY;
    const cloudName = "dkbuv5v9p"
    
    if (!cloudName) {
        console.error("Cloudinary cloud name is missing. Please set REACT_APP_CLOUD_NAME_CLOUDINARY in your .env file.");
        throw new Error("Cloudinary cloud name is missing.");
    }

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mern_product");

    try {
        const dataResponse = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!dataResponse.ok) {
            throw new Error(`Failed to upload image: ${dataResponse.statusText}`);
        }

        return await dataResponse.json();
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

export default UploadImage;
