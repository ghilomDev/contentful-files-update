export const Asset = `
  title
  description
  contentType
  fileName
  size
  url
  width
  height
`;
export const documentFiles = `query ($slug: String) {
    visitwynnDocumentCollection(where: {slug: $slug},limit:1) {
      items {
        sys{
          id
        }
        slug
          name
     pdfCollection{
     items{
         url
      }
    }
      }
    }
  }
`;
