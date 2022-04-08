import React, { useEffect, useState } from 'react'
import Forum from './Forum'
import { RiArrowUpCircleFill } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { HideScroll } from 'react-hide-on-scroll'

const ForumsList = ({ dataForums }) => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  console.log(dataForums)

  useEffect(() => {
    if (dataForums.length < 0) {
      setLoading(false)
    }
  }, [dataForums])

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
              {dataForums
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
