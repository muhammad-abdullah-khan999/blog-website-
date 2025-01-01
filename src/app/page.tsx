import Hero from "./components/Hero";
import Blogs from "./components/Blogs";




export default async function Home() {
  return (
    <div>
      <div className="sm:h-[130vh] xl:h-screen lg:h-screen">
    <Hero></Hero>
    </div>

     <Blogs />
    </div>
  );
}
