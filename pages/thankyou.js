// import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/nav'
import Sidebar from '../components/sidebar'
import WebNavbar from '../components/web/WebNavbar'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>HelloPython | Thanks</title>
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
        <WebNavbar />
        <h1 className="text-md mx-auto my-10 bg-white p-2 text-center font-semibold md:text-xl">
          Thanks for your help! Check your E-mail box in a couple of hours ⌚
        </h1>
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
