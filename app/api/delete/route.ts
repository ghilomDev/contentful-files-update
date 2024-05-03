import cloudinary from 'cloudinary';
// import { v2 as cloudinary } from 'cloudinary';
import { v2 as cloudinaryV2 } from 'cloudinary';

import { NextRequest, NextResponse } from "next/server";
export async function PUT(req: Request) {
const body = await req.json();
console.log(body, "<-----------------body")
    const { publicId } = body;
    console.log(publicId, "<-----------------publicId")
    try {
        // Initialize cloudinary
        cloudinary.v2.config({
            cloud_name: 'dev-wynn-las-vegas',
            api_key: '292399429862315',
            api_secret: 'YjHv-NKNDtMqZTyRUkPdUWOZ-Tk'
        });
    

    const data = await cloudinaryV2.uploader.destroy(`visit-wynn/${publicId}`).then((result) => {return result}).catch((error) => {return error})
    
     console.log(data, "<-----------------data")
        // if (data.result === 'not found' || !data) {
        //     throw new Error("File not found");
        // }    // const data = await response.json();
        return NextResponse.json({ message: true, data: data, status: 200});
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "An error occurred", status: 500 });
    }
}