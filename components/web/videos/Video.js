import React, { useState } from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

const Article = ({ imageURL, title, link }) => {
  const [showBtn, setShowBtn] = useState(false)

  return (
    <a
      href={link}
      target="__blank"
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
      className="group relative m-2 mx-auto flex cursor-pointer flex-col justify-between overflow-hidden rounded-md pb-4 shadow-turbo-blue-500 hover:shadow-sm md:hover:shadow-md"
    >
      <img
        src={
          imageURL ||
          'https://ih1.redbubble.net/image.2807627365.8890/throwpillow,small,600x-bg,f8f8f8-c,0,120,600,600.u1.jpg'
        }
        alt={imageURL ? title : "Youtube Video's thumbnail"}
        className="h-36 w-full overflow-hidden rounded-md object-cover md:h-60"
      />
      {showBtn ? (
        <button className="absolute mx-auto flex flex-row justify-between rounded-sm bg-red-600 p-2 text-white">
          <span className="my-auto">Open</span>
          <BsArrowUpRightCircleFill className="my-auto mx-1" />
        </button>
      ) : (
        ''
      )}
      <div className="m-2 my-3 flex flex-col md:h-3/4">
        <h3 className="text-left text-xs font-semibold text-gray-600 md:text-justify md:text-lg md:font-medium">
          {title}
        </h3>
      </div>
    </a>
  )
}

export default Article
