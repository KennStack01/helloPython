import React, { useState, useEffect } from 'react'
import Article from './Article'
import { Link } from 'react-scroll'
import { HideScroll } from 'react-hide-on-scroll'
import { RiArrowUpCircleFill } from 'react-icons/ri'

const ArticlesList = ({ dataArticles }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (dataArticles.length < 0) {
      setLoading(false)
    }
  }, [dataArticles])

  return (
    <div>
      <div>
        {loading && dataArticles.length < 1 ? (
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
                placeholder={`Type and Search | Article Title or Blog's name`}
                className="sticky top-0 w-full rounded bg-white px-3 py-2 text-sm placeholder-gray-400 outline-none ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-turbo-blue-400"
              />
            </div>
            <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {dataArticles
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
                    <Article
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

export default ArticlesList
