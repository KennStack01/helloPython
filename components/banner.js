import React, { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
// import wavingHand from '../public/wave.png'
import { SiPython } from 'react-icons/si'
import { BiDoorOpen } from 'react-icons/bi'
import Developer from './Developer'

const Banner = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="mx-auto flex w-full flex-row justify-between rounded-md bg-turbo-blue-500 py-4 px-4 text-white md:w-2/3 md:rounded-3xl md:py-5">
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
            <p
              onClick={openModal}
              className="mx-auto mt-5 cursor-pointer text-xs"
            >
              {' '}
              <span className="underline"> Indie Maker</span>🛠
            </p>
          </div>
        </div>
      </div>
      <Link href="/sponsor">
        <a className="flex cursor-pointer flex-col place-content-end rounded-3xl bg-turbo-blue-600 py-4 px-4 md:py-10 md:px-8">
          <p className="md:text-md text-xs md:italic">Sponsor Space</p>
          <h2 className="md:text-md mb-4 text-center text-xs font-bold">
            Call Kenn😎
          </h2>
          <div className="flex flex-row justify-center rounded-xl bg-yellow-500 p-2 font-bold text-turbo-blue-700">
            <p className="md:text-md text-sm">Open</p>
            <div className="my-auto text-xl">
              <BiDoorOpen />
            </div>
          </div>
        </a>
      </Link>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm backdrop-filter" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="z-50 my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-50 text-left align-middle shadow-xl transition-all">
                <Developer />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Banner
