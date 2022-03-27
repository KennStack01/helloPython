import React, { useEffect, useState } from 'react'
import Forum from './Forum'
import Parser from 'rss-parser'
import rssList from './rssList'
import keywords from '../../keywords'
import { RiArrowUpCircleFill } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { HideScroll } from 'react-hide-on-scroll'

const ForumsList = () => {
  const [forums, setForums] = useState([])
  const [temp, setTemp] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showbtn, setShowBtn] = useState(false)

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

  const fetchforums = async (list) => {
    let data = []
    for (let i = 0; i < list.length; i++) {
      const feed = await fetchSingleFeed(list[i])
      const filterdFeed = feed.items.filter((item) => {
        return keywords.some((keyword) => {
          return (
            item.title.toLowerCase().includes(keyword) ||
            item.content.toLowerCase().includes(keyword)
          )
        })
      })
      data.push(filterdFeed)
      //   data.push(feed.items)
    }
    return data
  }

  const getMoreforums = async () => {
    fetchforums(rssList)
      .then((data) => {
        setData(data)
      })
      .then(() => {
        const merged = [].concat.apply([], data) // to merged all arrays within data
        // const tempArray = shuffleArray(merged)
        setForums(merged.slice(0, 30))
        setLoading(false)
        setShowBtn(true)
        console.log('forums: ', forums)
      })
  }

  useEffect(() => {
    getMoreforums()
  }, [loading])

  return (
    <div>
      <div>
        {loading ? (
          <div>
            <h1 className="text-md mx-auto my-10 text-center font-semibold md:my-20 md:text-xl">
              Loading...
            </h1>
          </div>
        ) : (
          <div>
            <div className=" mx-2 my-2 md:mx-40 md:mb-4 md:mt-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Type and Search | Keywords`}
                className="sticky top-0 w-full rounded bg-white px-3 py-2 text-sm placeholder-gray-400 outline-none ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-turbo-blue-400"
              />
            </div>
            <div className="mx-auto grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {forums
                .filter((forum) => {
                  if (searchTerm === '') {
                    return forum
                  } else if (
                    forum.title
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim()) ||
                    forum.link
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim())
                  ) {
                    return Forum
                  }
                })
                .sort((a, b) => a.pubDate - b.pubDate)
                .map((forum) => (
                  <Forum
                    key={forum.id}
                    title={forum.title}
                    pubDate={forum.pubDate}
                    link={forum.link}
                  />
                ))}
            </div>
          </div>
        )}
        {process.browser ? (
          <HideScroll variant="down">
            <Link
              to="banner"
              smooth={true}
              duration={1000}
              className="sticky bottom-4 flex flex-row justify-between"
            >
              <div></div>
              <div></div>
              <div className="z-50 flex w-14 cursor-pointer flex-row-reverse rounded-full bg-white font-semibold text-turbo-blue-700">
                <RiArrowUpCircleFill className="mx-auto justify-items-center text-6xl" />
              </div>
            </Link>
          </HideScroll>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ForumsList
