import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "../lib/interface";
import { client, urlfor } from "../lib/sanity";
import { Image } from "next-sanity/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData(){
  const query = `*[_type == 'blog'] | order(_createdAt asc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
}`

  const data = await client.fetch(query);
  return data;
}



export default async function Blogs() {
  const data:simpleBlogCard[] = await getData();
  return (
    <div className="sm:mt-10 md:mt-10">
      

    <div >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5 " >
      {data.map((value,i)=>(
        <Link href={`/blog/${value.currentSlug}`} key={i}>
        <Card className="bg-orange-100 dark:bg-[#121212] hover:text-primary border border-gray-400 dark:border-gray-700 hover:border hover:border-primary dark:hover:border-primary hover:drop-shadow-2xl dark:hover:shadow-gray-500 ">
          
          <CardContent className="mt-5">
          <Image alt="titleImage" src={urlfor(value.titleImage).url()} width={500} height={500}/>
            <h3 className="mt-7 text-xl font-bold line-clamp-2">{value.title}</h3>
            <p className="line-clamp-2 text-sm text-gray-700 mt-2 dark:text-gray-500">{value.smallDescription}</p>
            <Button asChild className="w-full mt-7 border border-primary hover:bg-white hover:text-gray-700 dark:hover:bg-card dark:hover:text-white">
              {/* <Link href={`/blog/${value.currentSlug}`} className="w-full mt-7">Read more</Link> */}
              <span>Read more</span>
            </Button>
          </CardContent>
        </Card>
        </Link>
      ))}
      </div>   
      </div> 


      </div>
  );
}
