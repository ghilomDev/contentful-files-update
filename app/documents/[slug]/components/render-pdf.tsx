'use client'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
function RenderPdf(props: any) {
  const docs = [
    { uri: `https:${props.props}` }, // Remote file
  ];

  return <DocViewer
   documents={docs} 
   pluginRenderers={DocViewerRenderers}
   initialActiveDocument={docs[1]}
   config={{ header: { disableHeader: true,
    disableFileName:true,
    retainURLParams: false } , pdfVerticalScrollByDefault: true,
    pdfZoom: {
      defaultZoom: 0.3, // 1 as default,
      zoomJump: 0.5, // 0.1 as default,
      },}}
   style={{ maxWidth: '100vw', maxHeight: '100vh', overflow: 'auto', color: 'black'}}
   />;
}

export default RenderPdf




