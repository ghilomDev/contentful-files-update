
import ClientGenerator from '@/app/lib/contentful-client';
import Image from 'next/image';
import React from 'react'
import {Document, Page, pdfjs} from 'react-pdf';
import RenderPdf from './components/render-pdf';
import Link from 'next/link';
async function FileRender({params}:{params:{slug:string} }) {

  const client = await ClientGenerator();
  let filing = await client.getEntries({
    content_type: 'visitwynnDocument',
  });

 let dataCollection:any = filing.items.filter((entry: any) => params.slug === entry.fields.slug);
console.log(dataCollection[0]?.fields.pdf[0]?.fields?.file?.url)
if(!dataCollection[0]?.fields.pdf[0]?.fields?.file?.url){
 throw new Error("No file found")
}
  return (
    <div>
        {/* <Document
        file= {`https:${dataCollection[0].fields.file.fields.file.url}`}
        onLoadError={console.error}
        // style = {{width: '100vw', height: 'auto'}}
>

        <Page pageNumber={1} />
        </Document> */}


        <RenderPdf props={dataCollection[0]?.fields.pdf[0]?.fields?.file?.url}/>
    </div>
  );
}

export default FileRender
