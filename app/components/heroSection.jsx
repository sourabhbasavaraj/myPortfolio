import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            
          <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I am Sourabh Sajjan.</h1>
            <p className="text-red-300 text-lg lg:text-xl mb-6">
                As a Software Development Engineer (SDE), I specialize in crafting dynamic applications 
                across frontend, backend, and full-stack environments. With expertise in access 
                management using Sailpoint and recent engagements in ServiceNow, I excel in scripting 
                and automating processes to enhance efficiency. Currently pursuing my Masters at 
                Illinois Institute of Technology, I am committed to pushing the boundaries of
                technology and innovation.
            </p>
          </div>

          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] col-span-5 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image src="/images/img.png"
                    alt="myPicture"
                    width={300}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    height={300} />
            </div>
          </div>
        </div> 
    </section>
  )
}

export default HeroSection