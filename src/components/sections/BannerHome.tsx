"use client"
import React from "react"
import ShinyButton from "../ui/ShinyButton"
import { PiPaperPlaneRight } from "react-icons/pi"
import { MdArrowOutward } from "react-icons/md"
import Image from "next/image"
import Link from "next/link"

const BannerHome = () => {
  return (
    <section className="w-full max-w-5xl mx-auto pt-8 pb-16">
      <div
        className="
          flex flex-col-reverse lg:flex-row 
          items-center lg:items-start 
          justify-between 
          gap-8 lg:gap-20
          relative z-10
        "
      >
        {/* Left Column */}
        <div className="w-full lg:w-1/2 lg:mt-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
            Software Development Agency
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md">
            We build cutting-edge digital solutions to empower your business and
            bring your vision to life.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href={'/contact'}>
              <ShinyButton
                icon={<PiPaperPlaneRight />}
                bgColor="black"
                iconHoverEffect="rotate"
                className="border"
              >
                Get in touch
              </ShinyButton>
            </Link>

            <Link href={'/services'}>
              <ShinyButton
                icon={<MdArrowOutward />}
                bgColor="white"
                shineColor="black"
                iconHoverEffect="raiseTopRight"
                textColor="black"
                className="border"
                shineOpacity={0.3}
              >
                Our Services
              </ShinyButton>
            </Link>
          </div>
        </div>

        {/* Right Column (3D Illustration) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-72 md:w-96 lg:w-[420px] aspect-[835/794]">
            <Image
              src="/images/3d/software_website_application.webp"
              alt="Banner Image"
              fill
              priority
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerHome
