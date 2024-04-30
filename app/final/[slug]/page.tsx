import ClientGenerator from '@/app/lib/contentful-client';
import React from 'react'

async function page() {
  const client = await ClientGenerator();
  let filing = await client.getEntries({
    content_type: 'visitwynnCom',
  });
  filing.items.map((entry: any) => 
  
  {
    console.log(entry.fields, "<------------this is entry------------->")
    console.log(entry.fields.slugs, "<------------this is entry------------->")
  
  });
  return (
    <div>
      he
    </div>
  )
}

export default page
