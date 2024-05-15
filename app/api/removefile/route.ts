import { NextRequest, NextResponse } from "next/server";
import { createClient } from 'contentful';
import cloudinary from "cloudinary";
import { v2 as cloudinaryV2 } from "cloudinary";
import { error } from "console";
import ClientGenerator from "@/app/lib/contentful-client";
export async function POST(req: NextRequest) {
  const fileCollector = await req.json();

   const { spaceId } = fileCollector;
  // console.log(fileCollector, "<-------starting, data")
  if (!fileCollector) {
    return NextResponse.json({ message: false, status: 400 });
  }
  const client = createClient({
    space:"dk7sfup6zsex",
    accessToken: "Bp5GzW9gdTzqQRTIROu4ZgNMPS72dlSWNuYGF8f6jMo",
  });
try {
  const res = await client.getAsset(spaceId);

  // console.log(res.sys, "<-------------res"); // Access the 'status' property from 'sys' object
  if (!res) {
    return NextResponse.json({ message: false, status: 400 });
  }
  const fileName = res.fields.title;

  // Initialize cloudinary
  cloudinary.v2.config({
    cloud_name: "dev-wynn-las-vegas",
    api_key: "292399429862315",
    api_secret: "YjHv-NKNDtMqZTyRUkPdUWOZ-Tk",
  });
  const data = await cloudinaryV2.uploader.destroy(`visit-wynn/${fileName}`);
  const result = await data;
  return NextResponse.json({ message: true, status: 200, result: result });
} catch (error) {
  console.error(error);
  return NextResponse.json({ message: error, status: 400 });
}
}
