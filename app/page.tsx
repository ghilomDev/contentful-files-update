import Image from "next/image";
import ClientGenerator from "./lib/contentful-client";
import { UseContent } from "./lib/get-all-content";
import { documentFiles } from "./lib/query-constants";
import { useEffect } from "react";
import Link from "next/link";

export default async function Home() {

  
  // const data = await UseContent(documentFiles,
  //   { preview: false ? true : false, slug: '04191996' },
  //   false)
  //  console.log(data , "this is")
  // // });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
      <Link href="/final/04191996">tone</Link>
      <Link href={"https://assets.ctfassets.net/gtcwaiarb0xp/6VZvmKq5h5RFyJXWsFoUz5/b0e2526432c2c037ef3b9a3cd0f03c8b/Ticket_number_.pdf"}>
 link button
</Link>
    </main>
  );
}
