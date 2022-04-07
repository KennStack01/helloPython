import React from 'react'

const Article = ({ imageURL, title, link }) => {
  return (
    <a
      href={link}
      target="__blank"
      className="group m-2 mx-auto flex cursor-pointer flex-col justify-between overflow-hidden rounded-md pb-4 shadow-turbo-blue-500 hover:shadow-sm md:hover:shadow-md"
    >
      <img
        src={
          imageURL ||
          'https://media.giphy.com/media/7VzgMsB6FLCilwS30v/giphy.gif'
        }
        alt={imageURL ? title : 'AI Gif by giphy'}
        className="h-36 w-full overflow-hidden rounded-md object-cover text-xs duration-300 ease-in-out group-hover:scale-110 group-hover:rounded-md group-hover:transition-transform md:h-60"
      />
      <div className="m-2 my-3 flex flex-col md:h-3/4">
        <h3 className="text-left text-xs font-semibold text-gray-600 md:text-justify md:text-lg md:font-medium">
          {title}
        </h3>
      </div>
    </a>
  )
}

export default Article
