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
      className="group relative m-2 mx-auto flex cursor-pointer flex-col justify-between overflow-hidden bg-white pb-4 shadow-turbo-blue-500 hover:shadow-sm md:hover:shadow-md"
    >
      <img
        src={
          imageURL ||
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f5643096750899.5eb54f3381b8f.png'
        }
        alt={imageURL ? title : 'Python Logo by Jessica Williamson'}
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
