import Comment from "@/app/components/Comment";
import { fullBlog } from "@/app/lib/interface";
import { client, urlfor } from "@/app/lib/sanity"
import { PortableText } from "next-sanity";
import { Image } from "next-sanity/image";
import React from "react";

async function getData(slug : string){
    const query = `*[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    content,
    titleImage,
}[0]`;

const data = await client.fetch(query);
return data;
}

export default async function BlogArticle({params}: {params :Promise<{slug : string}>}){
    const data : fullBlog = await getData((await params).slug);
    return (
        <><div>
            <h1>
                <span className="block mt-8 text-base text-center text-primary font-bold tracking-wide uppercase ">Abdullah Khan - Blog</span>
                <span className="block text-center mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <div className="  flex justify-center"><Image alt="titleImage" src={urlfor(data.titleImage).url()} width={500} height={500} 
            className="rounded-lg mt-8 border border-gray-400"/></div>
            <div className="mt-11 flex justify-center">
            <div className="no-break prose prose-orange prose-xl dark:prose-invert prose-h4:text-3xl prose-headings:font-semibold prose-headings:text-primary prose-li:marker:text-white white-space: pre-line">
            <PortableText value={data.content} />
            </div>
            </div>
            
            <div className="mt-10 text-white">
               
                <Comment />
            </div>
            
        </div>
        </>
    );
}



