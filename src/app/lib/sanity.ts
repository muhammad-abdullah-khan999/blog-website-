import  ImageUrlBuilder  from "@sanity/image-url"
import { createClient } from "next-sanity"


export const client = createClient({
    projectId: 'production',
  dataset: '5qkyeq8k',
  apiVersion: '2023-01-01',

    useCdn : false,
})

const builder = ImageUrlBuilder(client);

export function urlfor(source: any){
    return builder.image(source)    
}