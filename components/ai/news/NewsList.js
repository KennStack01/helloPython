import React, { useState, useEffect } from 'react'
import keywords from '../keywords'
import rssList from './rssList'
import Parser from 'rss-parser'
import { Link } from 'react-scroll'
import { HideScroll } from 'react-hide-on-scroll'
import { RiArrowUpCircleFill } from 'react-icons/ri'
import News from './News'

const NewsList = () => {
  const [news, setNews] = useState([])
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

  const fetchNews = async (list) => {
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

  //   const getTenElements = (array, limit) => {
  //     let temp = []
  //     if (array.length > limit) {
  //       for (let i = 0; i < array.length; i++) {
  //         temp = [...temp, array[i]].slice(0, limit)
  //       }
  //     } else {
  //       temp = array
  //     }
  //     return temp
  //   }

  const getMoreNews = async () => {
    fetchNews(rssList)
      .then((data) => {
        setData(data)
      })
      .then(() => {
        const merged = [].concat.apply([], data) // to merged all arrays within data
        const tempArray = shuffleArray(merged)
        setNews(tempArray.slice(0, 70))
        setLoading(false)
        setShowBtn(true)
        console.log('news: ', news)
      })
  }

  useEffect(() => {
    getMoreNews()
  }, [loading])

  return (
    <div>
      <div>
        {loading && news.length < 1 ? (
          <h3 className="text-md mx-auto my-10 text-center font-semibold md:my-20 md:text-xl">
            Loading...
          </h3>
        ) : (
          <div>
            <div className=" mx-2 my-2 md:mx-20 md:mb-4 md:mt-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Type and Search | News Title or Blog's name`}
                className="sticky top-0 w-full rounded bg-white px-3 py-2 text-sm placeholder-gray-400 outline-none ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-turbo-blue-400"
              />
            </div>
            <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {news
                ?.filter((article) => {
                  if (searchTerm === '') {
                    return article
                  } else if (
                    article.title
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim()) ||
                    article.link
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim())
                  ) {
                    return article
                  }
                })
                .sort((a, b) => b.pubDate - a.pubDate)
                .map((article, index) => (
                  <div key={index}>
                    <News
                      imageURL={article.thumbnail}
                      title={article.title}
                      link={article.link}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
        {process.browser ? (
          <HideScroll variant="down">
            <Link
              to="banner"
              // to="MenuTab"
              smooth={true}
              duration={1000}
              className="sticky bottom-4 flex flex-row justify-between"
            >
              <div></div>
              <div></div>
              <div className="z-50 flex w-14 cursor-pointer flex-row-reverse rounded-full bg-white font-semibold text-turbo-blue-600">
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

export default NewsList
