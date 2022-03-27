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
            router.pathname == '/ai' ||
            router.pathname.includes('/ai/articles') ||
            router.pathname.includes('/ai/websites') ||
            router.pathname.includes('/ai/ebooks') ||
            (router.pathname.includes('/ai/videos') &&
              (!router.pathname.includes('/ai/news') ||
                !router.pathname.includes('/ai/resources')))
              ? 'active border-b-4 border-turbo-blue-500 font-semibold text-black'
              : ' text-black hover:border-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
        >
          Home
        </a>
      </Link>
      <Link href="/ai/news">
        <a
          className={`${
            router.pathname.includes('/ai/news')
              ? 'active border-b-4 border-turbo-blue-500 font-semibold text-black'
              : ' text-black hover:border-turbo-gray-500 hover:shadow-sm'
          } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
        >
          News
        </a>
      </Link>
      <Link href="/ai/resources">
        <a
          className={`${
            router.pathname.includes('/ai/resources')
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
