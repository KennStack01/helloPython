import React, { useEffect, useState } from 'react'
import Ebook from './Ebook'
import eBooksListData from './urls'
import { RiArrowUpCircleFill } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { HideScroll } from 'react-hide-on-scroll'

const EBooksList = () => {
  const [ebooks, setEbooks] = useState([])
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
    tempArray = eBooksListData.sort(() => Math.random() - 0.5)
    setEbooks(shuffleArray(tempArray))
    setLoading(false)
  }, [])

  return (
    <div>
      <div>
        {loading ? (
          <div>
            <h1 className="mx-auto place-self-center text-center text-xl font-semibold text-gray-700">
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
                placeholder={`Type and Search | E-Book Title`}
                className="sticky top-0 w-full rounded bg-white px-3 py-2 text-sm text-turbo-gray-600 placeholder-gray-400 outline-none ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-turbo-blue-400"
              />
            </div>
            <div className="mx-auto grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {ebooks
                .filter((ebook) => {
                  if (searchTerm === '') {
                    return ebook
                  } else if (
                    ebook.title
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim()) ||
                    ebook.link
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim())
                  ) {
                    return ebook
                  }
                })
                .map((ebook) => (
                  <Ebook
                    key={ebook.title}
                    title={ebook.title}
                    author={ebook.author}
                    pictureURL={ebook.pictureURL}
                    pubDate={ebook.pubDate}
                    link={ebook.link}
                    isFree={ebook.isFree}
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
          // <div>
          //   {/* <HideScroll variant="down">
          //     <Link
          //       to="Banner"
          //       smooth={true}
          //       duration={1000}
          //       className=" z-30 bg-white text-gray-900 font-semibold hidden md:block sticky bottom-2 w-14 rounded-full cursor-pointer"
          //     >
          //       <RiArrowUpCircleFill className="text-6xl mx-auto justify-items-center" />
          //     </Link>
          //   </HideScroll> */}
          // </div>
          ''
        )}
      </div>
    </div>
  )
}

export default EBooksList
