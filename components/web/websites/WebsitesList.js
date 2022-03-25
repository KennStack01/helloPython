import React, { useEffect, useState } from 'react'
import Website from './Website'
import websitesURLs from './websitesURLs'
import { RiArrowUpCircleFill } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { HideScroll } from 'react-hide-on-scroll'

const WebsistesList = () => {
  const [websites, setWebsites] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  let tempArray = []

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1))

      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  useEffect(() => {
    tempArray = websitesURLs.sort(() => Math.random() - 0.5)
    setWebsites(shuffleArray(tempArray))
    setLoading(false)
  }, [])

  return (
    <div className="mb-5">
      <div>
        {loading ? (
          <div>
            <h1 className="mx-auto place-self-center text-center text-xl font-semibold text-gray-700">
              Loading...
            </h1>
          </div>
        ) : (
          <div>
            <div className="mx-2 my-2 md:mx-20 md:mb-4 md:mt-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Type and Search | Website's name`}
                className="sticky top-0 w-full rounded bg-white px-3 py-2 text-sm text-turbo-blue-600 placeholder-gray-400 outline-none ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-turbo-blue-400"
              />
            </div>
            <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {websites
                .filter((website) => {
                  if (searchTerm === '') {
                    return website
                  } else if (
                    website.name
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim()) ||
                    website.url
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim())
                  ) {
                    return website
                  }
                })
                .map((website) => (
                  <Website
                    key={website}
                    URL={website.url}
                    name={website.name}
                  />
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

export default WebsistesList
