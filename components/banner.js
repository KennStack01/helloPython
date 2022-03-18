import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import wavingHand from '../public/wave.png'
import { SiPython } from 'react-icons/si'
import { BiDoorOpen } from 'react-icons/bi'

const Banner = () => {
  return (
    <div className="mx-auto flex w-full flex-row justify-between rounded-md bg-turbo-blue-500 py-5 px-4 text-white md:w-2/3 md:rounded-3xl md:py-5">
      <div className="flex flex-row">
        <div className="mx-4 my-auto hidden md:block md:text-8xl">
          {' '}
          <SiPython />{' '}
        </div>
        <div className=" my-auto">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-around">
              <h1 className="text-lg font-bold md:text-3xl md:font-extrabold">
                Hello, Python{' '}
              </h1>
              {/* <Image
                src={wavingHand}
                alt="Waving Hand"
                // placeholder="blur"
                //   placeholderStyle={{ rounded: "100%" }}
                width={35}
                height={30}
                className="mx-4 my-auto"
              />{' '} */}
            </div>
            <p className="text-xs font-light md:text-lg ">
              All the Resources you need...
            </p>
          </div>
        </div>
      </div>
      <Link href="/adsBanner">
        <a className="flex cursor-pointer flex-col place-content-end rounded-3xl bg-turbo-blue-600 py-4 px-4 md:py-10 md:px-8">
          <p className="md:text-md text-xs md:italic">Reserved Space</p>
          <h2 className="md:text-md mb-4 text-center text-xs font-bold">
            Contact us
          </h2>
          <div className="flex flex-row justify-center rounded-xl bg-yellow-500 p-2 font-bold text-turbo-blue-700">
            <p>Open</p>
            <div className="my-auto text-xl">
              <BiDoorOpen />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Banner
