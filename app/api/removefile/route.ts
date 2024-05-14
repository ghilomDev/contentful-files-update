import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { v2 as cloudinaryV2 } from "cloudinary";
import { error } from "console";
import ClientGenerator from "@/app/lib/contentful-client";
export async function POST(req: NextRequest) {
  const fileCollector = await req.json();

   const { spaceId } = fileCollector;
  console.log(fileCollector, "<-------starting, data")
  if (!fileCollector) {
    return NextResponse.json({ message: false, status: 400 });
  }
  const client = await ClientGenerator();
  let filing = await client.getAsset(spaceId);
  if (!filing) {
    return NextResponse.json({ message: false, status: 400 });
  }
  const fileName = filing.fields.title;


  return NextResponse.json({ message: true, status: 200 ,datas:fileName  });




  // const fileCollector = await req.json();
  // const { spaceId } = fileCollector;
  // console.log(fileCollector, "<-------starting, data")

//     const client = await ClientGenerator();
//     let filing = await client.getAsset(spaceId);
//   console.log("filing", filing);
//  const fileName = filing.fields.title;
// console.log(fileName, "fileName"),
// console.log(filing, "<-------starting, filing")
// console.log(spaceId, "<-------starting, data")

    // Initialize cloudinary
//     cloudinary.v2.config({
//       cloud_name: "dev-wynn-las-vegas",
//       api_key: "292399429862315",
//       api_secret: "YjHv-NKNDtMqZTyRUkPdUWOZ-Tk",
//     });
//     const data = await cloudinaryV2.uploader.destroy(`visit-wynn/${fileName}`)
//       .then((result) => {
// console.log(result, "result")
//         return result;
//       })
//       .catch((error) => {
// console.log(error, "result")
//         return error;
//       });

    // return NextResponse.json({ message: true, status: 200 });
}
