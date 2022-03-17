import Link from 'next/link'
import React from 'react'
import DotsMenu from './dotsMenu'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    // <nav className="my-1 flex w-full flex-row justify-center shadow-lg shadow-turbo-gray-600/50">
    <nav className="flex w-full flex-row justify-between shadow-lg shadow-turbo-gray-600/50 md:justify-center">
      <div className="mx-auto my-auto">
        <Link href="/">
          <a>
            <img
              src="/helloPython-logo.svg"
              className="w-36 md:w-48"
              alt="helloPython logo"
            />
          </a>
        </Link>
      </div>
      <div className="my-auto mx-auto flex flex-row justify-between space-x-2 md:space-x-4 ">
        <div
          className={`${
            router.pathname == '/'
              ? 'active bg-turbo-blue-500 font-semibold text-white shadow-sm'
              : ' text-black hover:bg-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
        >
          <Link href="/">
            <a>WEB</a>
          </Link>
        </div>
        <div
          className={`${
            router.pathname == '/web/ai'
              ? 'active bg-turbo-blue-500 font-semibold text-white shadow-sm'
              : ' text-black hover:bg-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
        >
          <Link href="/">
            <a>AI/ML</a>
          </Link>
        </div>
        <div
          className={`${
            router.pathname == '/web/jobs'
              ? 'active bg-turbo-blue-500 font-semibold text-white shadow-sm'
              : ' text-black hover:bg-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
        >
          <Link href="/">
            <a>JOBS</a>
          </Link>
        </div>
      </div>
      {/* <div className="my-auto hidden md:block">
        <DotsMenu />
      </div> */}
    </nav>
  )
}

export default Navbar
