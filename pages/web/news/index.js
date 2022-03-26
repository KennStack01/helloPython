// import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../../../components/nav'
import Sidebar from '../../../components/sidebar'
import NewsNavbar from '../../../components/web/NewsNavbar'
import ArticlesList from '../../../components/web/articles/ArticlesList'
import NewsList from '../../../components/web/news/NewsList'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>HelloPython | News</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* <Navbar /> */}
      <div className="w-full">
        <Nav />
      </div>

      <div className=" w-full ">
        <Sidebar />
      </div>
      <main className="flex w-full flex-1 flex-col items-center bg-turbo-gray-500 px-2 text-center md:px-5">
        <NewsNavbar />
        <NewsList />
      </main>

      <footer className="md:text-md flex h-6 w-full items-center justify-center border-t text-sm md:h-10">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.twitter.com/KennKibadi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by{' '}
          <span className="font-bold hover:text-turbo-blue-500">
            Kenn Kibadi
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home