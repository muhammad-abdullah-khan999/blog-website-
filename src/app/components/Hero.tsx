import React from 'react'
import  Link  from 'next/link';
import { Image } from 'next-sanity/image';

const Hero = () => {
  return (
    <section className="block text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-[15vh] md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
        Welcome to
        <br className="hidden lg:inline-block" />
        Blog Website of Abdullah Khan
      </h1>
      <p className="mb-8 leading-relaxed text-muted-foreground">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-primary rounded text-lg">
          <Link href={"../page.tsx"}> Button</Link>
        </button>
        {/* <button className="ml-4 inline-flex text-primary bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-white rounded text-lg">
          Button
        </button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-full w-4/6 ">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="https://i.pinimg.com/736x/b9/27/ba/b927ba56592bdad0f8dbd569bf3e274c.jpg"
      />
    </div>
  </div>
</section>
  )
}

export default Hero