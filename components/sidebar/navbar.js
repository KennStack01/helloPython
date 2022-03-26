import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="sticky top-0 my-1 flex flex-row justify-center space-x-4 bg-white p-2  font-semibold backdrop-blur-md backdrop-brightness-150">
      <Link href="/">
        <a
          className={`${
            router.pathname == '/' &&
            (!router.pathname.includes('/web/news') ||
              !router.pathname.includes('/web/resources'))
              ? 'active border-b-4 border-turbo-blue-500 font-semibold text-black'
              : ' text-black hover:border-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
        >
          Home
        </a>
      </Link>
      <Link href="/web/news">
        <a
          className={`${
            router.pathname.includes('/web/news')
              ? 'active border-b-4 border-turbo-blue-500 font-semibold text-black'
              : ' text-black hover:border-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
        >
          News
        </a>
      </Link>
      <Link href="/web/resources">
        <a
          className={`${
            router.pathname.includes('/web/resources')
              ? 'active border-b-4 border-turbo-blue-500 font-semibold text-black'
              : ' text-black hover:border-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
        >
          Resources
        </a>
      </Link>
    </div>
  )
}

export default Navbar
