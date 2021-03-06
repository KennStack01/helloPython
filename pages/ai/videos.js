// import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar/ai'
import AINavbar from '../../components/ai/AINavbar'
import VideosList from '../../components/ai/videos/VideosList'

import rssList from '../../components/ai/videos/rssList'
import keywords from '../../components/ai/keywords'
import Parser from 'rss-parser'

const Videos = ({ data }) => {
  const meta = {
    title: 'HelloPython AI | Videos',
    description:
      'All the Resources you need for Python Programming | From Web to AI and Machine Learning',
    image: '/helloPython.svg',
    type: 'website',
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Python AI | Videos</title>
        <link rel="icon" href="/favicon.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="All the Resources you need for Python Programming | From Web to AI and Machine Learning"
        />
        <link rel="icon" href="/favicon.svg" />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="helloPython" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta
          name="twitter:card"
          content="All Free Resources for Python Developers"
        />
        <meta name="twitter:site" content="@KennKibadi" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter.description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      {/* <Navbar /> */}
      <div className="w-full">
        <Nav />
      </div>

      <div className=" w-full ">
        <Sidebar />
      </div>
      <main className="flex w-full flex-1 flex-col items-center bg-turbo-gray-500 px-2 text-center md:px-5">
        <AINavbar />
        <VideosList dataVideos={data} />
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

export async function getServerSideProps() {
  // Variables
  let videos = []
  let loading = true
  let myData = []

  // Fetch data from external API
  const fetchSingleFeed = async (url) => {
    let parser = new Parser()
    const feed = await parser.parseURL(`https://cors.eu.org/${url}`)

    return feed
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))

      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  const fetchVideos = async (list) => {
    let data = []
    for (let i = 0; i < list.length; i++) {
      const feed = await fetchSingleFeed(list[i])
      const filterdFeed = feed.items.filter((item) => {
        return keywords.some((keyword) => {
          return (
            item.title.toLowerCase().includes(keyword) &&
            !item.title.toLowerCase().includes('html')
          )
        })
      })
      data.push(filterdFeed)
      //   data.push(feed.items)
    }
    return data
  }

  const getMoreVideos = async () => {
    myData = await fetchVideos(shuffleArray(rssList))
    const merged = [].concat.apply([], myData)
    const tempArray = merged
    // const tempArray = shuffleArray(merged)
    videos = tempArray.slice(0, 70)
    loading = false

    // console.log('videos: ', videos)
    return videos
  }

  const data = await getMoreVideos()

  return {
    props: { data: data || null },
  }
}

export default Videos
