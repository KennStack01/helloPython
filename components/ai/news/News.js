import React, { useState } from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

const News = ({ imageURL, title, link }) => {
  const [showBtn, setShowBtn] = useState(false)

  return (
    <a
      href={link}
      target="__blank"
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
      className="hover:shadow-xs group relative m-2 mx-auto flex cursor-pointer flex-col justify-between overflow-hidden bg-white pb-4 shadow-turbo-blue-500 md:hover:shadow-md"
    >
      <img
        src={
          imageURL ||
          'https://media4.giphy.com/media/PjJ1cLHqLEveXysGDB/200w.webp?cid=ecf05e47xhewcwojzog1edx798hsmou75x63btwnrcpfhoqf&rid=200w.webp&ct=g'
        }
        alt={imageURL ? title : 'AI GIF by Giphy'}
        className="h-36 w-full overflow-hidden object-cover duration-300 ease-in-out group-hover:scale-110 group-hover:rounded-md group-hover:transition-transform md:h-60"
      />
      {showBtn ? (
        <button className="absolute mx-auto flex flex-row justify-between rounded-sm bg-turbo-blue-600 p-2 text-white">
          <span className="my-auto">Discover</span>
          <BsArrowUpRightCircleFill className="my-auto mx-1" />
        </button>
      ) : (
        ''
      )}
      <div className="m-2 my-3 flex flex-col md:h-3/4">
        <h3 className="text-left text-xs font-semibold text-gray-700 md:text-justify md:text-lg">
          {title}
        </h3>
      </div>
    </a>
  )
}

export default News
