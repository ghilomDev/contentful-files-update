import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { v2 as cloudinaryV2 } from "cloudinary";
import { error } from "console";
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { public_id } = data;

  try {
    // Initialize cloudinary
    cloudinary.v2.config({
      cloud_name: "dev-wynn-las-vegas",
      api_key: "292399429862315",
      api_secret: "YjHv-NKNDtMqZTyRUkPdUWOZ-Tk",
    });
    const data = await cloudinaryV2.uploader
      .destroy(`visit-wynn/${public_id}`)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });

    console.log(data, "<-----------------data");
    if (data.result === "not found") {
      throw new Error("File not found");
    }
    return NextResponse.json({ message: true, data: data, status: 200 });

  } catch (e) {
    console.error(error);
    return NextResponse.json({ error:'internal Error', status: 500 });
  }
}
