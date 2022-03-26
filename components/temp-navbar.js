import Link from 'next/link'
import React from 'react'
import DotsMenu from './dotsMenu'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="my-1 flex w-full flex-col justify-around shadow-lg shadow-turbo-gray-600/50 md:flex-row">
      <div>
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
      <div className="my-auto mx-auto flex flex-row justify-between space-x-4">
        <div
          className={`${
            router.pathname.includes('/web/news')
              ? 'active bg-turbo-blue-500 font-semibold text-white shadow-sm'
              : ' text-black hover:bg-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2`}
        >
          <Link href="/">
            <a>WEB</a>
          </Link>
        </div>
        <div
          className={`${
            router.pathname == '/ai'
              ? 'active bg-turbo-blue-500 font-semibold text-white shadow-sm'
              : ' text-black hover:bg-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2`}
        >
          <Link href="/">
            <a>AI/ML</a>
          </Link>
        </div>
        <div
          className={`${
            router.pathname == '/jobs'
              ? 'active bg-turbo-blue-500 font-semibold text-white shadow-sm'
              : ' text-black hover:bg-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2`}
        >
          <Link href="/">
            <a>JOBS</a>
          </Link>
        </div>
      </div>
      <div className="my-auto hidden md:block">
        <DotsMenu />
      </div>
    </nav>
  )
}

export default Navbar
