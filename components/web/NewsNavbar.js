import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NewsNavbar = () => {
  const router = useRouter()
  return (
    <nav className="sticky top-0 z-20 mx-auto flex w-full justify-around space-x-1 rounded-sm bg-white px-2 py-3 md:space-x-6">
      <div>
        <Link href="/web/news">
          <a
            className={`${
              router.pathname.includes('/web/news') &&
              !(
                router.pathname.includes('/web/news/forums') ||
                router.pathname.includes('/web/news/conferences/')
              )
                ? 'active border-2 border-turbo-blue font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-xs font-semibold sm:text-sm md:text-lg`}
          >
            News
          </a>
        </Link>
      </div>
      <div>
        <Link href="/web/news/forums">
          <a
            className={`${
              router.pathname == '/web/news/forums'
                ? 'active border-2 border-red-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            } my-1 rounded-sm p-2 text-xs font-semibold sm:text-sm md:text-lg`}
          >
            Forums
          </a>
        </Link>
      </div>
      <div>
        <Link href="/web/news/conferences">
          <a
            className={`${
              router.pathname == '/web/news/conferences'
                ? 'active border-2 border-gray-500 font-semibold text-black'
                : ' border-turbo-gray-600 text-black hover:border-2 hover:shadow-sm'
            }  my-1 rounded-sm  p-2 text-xs font-semibold sm:text-sm md:text-lg`}
          >
            Conferences
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default NewsNavbar
