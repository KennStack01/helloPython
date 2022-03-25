import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const WebNavbar = () => {
  const router = useRouter()
  return (
    <nav className="sticky top-0 z-20 mx-auto flex w-full justify-around space-x-1 rounded-sm bg-white px-2 py-3 md:space-x-6">
      <div>
        <Link href="/web/articles">
          <a
            className={`${
              router.pathname.includes('/web/articles') ||
              router.pathname == '/'
                ? 'active border-2 border-turbo-blue font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-xs font-semibold sm:text-sm md:text-lg`}
          >
            Articles
          </a>
        </Link>
      </div>
      <div>
        <Link href="/web/videos">
          <a
            className={`${
              router.pathname.includes('/web/videos')
                ? 'active border-2 border-red-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-xs font-semibold sm:text-sm md:text-lg`}
          >
            Videos
          </a>
        </Link>
      </div>
      <div>
        <Link href="/web/websites">
          <a
            className={`${
              router.pathname.includes('/web/websites')
                ? 'active border-2 border-gray-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            }  my-1 rounded-sm  p-2 text-xs font-semibold sm:text-sm md:text-lg`}
          >
            Websites
          </a>
        </Link>
      </div>
      <div>
        <Link href="/web/ebooks">
          <a
            className={`${
              router.pathname.includes('/web/ebooks')
                ? 'active border-2 border-turbo-blue-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-xs font-semibold sm:text-sm md:text-lg`}
          >
            E-Books
          </a>
        </Link>
      </div>
      {/* <div>
        <Link href="/web/snippets">
          <a
            className={`${
              router.pathname.includes('/web/snippets')
                ? 'active border-2 border-turbo-blue-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-xs font-semibold sm:text-sm md:text-lg`}
          >
            Snippets
          </a>
        </Link>
      </div> */}
    </nav>
  )
}

export default WebNavbar
