import  ImageUrlBuilder  from "@sanity/image-url"
import { createClient } from "next-sanity"


export const client = createClient({
    apiVersion : process.env.APIVERSION,
    dataset : process.env.DATASET,
    projectId : process.env.PROJECTID,
    useCdn : false,
})

const builder = ImageUrlBuilder(client);

export function urlfor(source: any){
    return builder.image(source)    
}