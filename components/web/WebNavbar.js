import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const WebNavbar = () => {
  const router = useRouter()
  return (
    <nav>
      <div>
        <Link href="/web/articles">
          <a
            className={`${
              router.pathname.includes('/web/articles')
                ? 'active border-2 border-turbo-blue-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
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
                ? 'active border-2 border-turbo-blue-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
          >
            Videos
          </a>
        </Link>
      </div>
      <div>
        <Link href="/web/videos">
          <a
            className={`${
              router.pathname.includes('/web/videos')
                ? 'active border-2 border-turbo-blue-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
          >
            Websites
          </a>
        </Link>
      </div>
      <div>
        <Link href="/web/websites">
          <a
            className={`${
              router.pathname.includes('/web/websites')
                ? 'active border-2 border-turbo-blue-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
          >
            E-Books
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
            } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
          >
            Snippets
          </a>
        </Link>
      </div>
      <div>
        <Link href="/web/snipptes">
          <a
            className={`${
              router.pathname.includes('/web/snipptes')
                ? 'active border-2 border-turbo-blue-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-sm font-semibold md:text-lg`}
          >
            Snippets
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default WebNavbar
