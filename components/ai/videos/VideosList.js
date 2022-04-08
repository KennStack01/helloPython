import React, { useState, useEffect } from 'react'
import Video from './Video'
import { Link } from 'react-scroll'
import { HideScroll } from 'react-hide-on-scroll'
import { RiArrowUpCircleFill } from 'react-icons/ri'

const VideosList = ({ dataVideos }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (dataVideos.length < 1) {
      setLoading(false)
    }
  }, [dataVideos])

  return (
    <div>
      <div>
        {loading && dataVideos.length < 1 ? (
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
                placeholder={`Type and Search | Video Title or Youtube Channel's Name`}
                className="sticky top-0 w-full rounded bg-white px-3 py-2 text-sm placeholder-gray-400 outline-none ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-turbo-blue-400"
              />
            </div>
            <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {dataVideos
                ?.filter((video) => {
                  if (searchTerm === '') {
                    return video
                  } else if (
                    video.title
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim()) ||
                    video.link
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim())
                  ) {
                    return video
                  }
                })
                .sort((a, b) => b.pubDate - a.pubDate)
                .map((video, index) => (
                  <div key={index}>
                    <Video
                      imageURL={`https://img.youtube.com/vi/${video.id.substring(
                        9
                      )}/hqdefault.jpg`}
                      title={video.title}
                      link={video.link}
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

export default VideosList
