import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { v2 as cloudinaryV2 } from "cloudinary";
import { error } from "console";
import ClientGenerator from "@/app/lib/contentful-client";
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { spaceId } = data;
  try {
    const client = await ClientGenerator();
    let filing = await client.getAsset(spaceId);

 const fileName = filing.fields.file?.fileName;

    // Initialize cloudinary
    cloudinary.v2.config({
      cloud_name: "dev-wynn-las-vegas",
      api_key: "292399429862315",
      api_secret: "YjHv-NKNDtMqZTyRUkPdUWOZ-Tk",
    });
    const data = await cloudinaryV2.uploader
      .destroy(`visit-wynn/${fileName}`)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });

    return NextResponse.json({ message: true, status: 200 });

  } catch (e) {
    return NextResponse.json({ error:'internal Error', status: 500 });
  }
}
