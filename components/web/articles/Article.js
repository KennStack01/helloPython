import React from 'react'

const Article = ({ imageURL, title, link }) => {
  return (
    <a
      href={link}
      target="__blank"
      className="group m-2 mx-auto flex cursor-pointer flex-col justify-between overflow-hidden rounded-md shadow-turbo-blue-500 hover:shadow-sm md:hover:shadow-md"
    >
      <img
        src={
          imageURL ||
          'https://ih1.redbubble.net/image.2807627365.8890/throwpillow,small,600x-bg,f8f8f8-c,0,120,600,600.u1.jpg'
        }
        alt={
          imageURL
            ? title
            : 'Python Pillow Image Designed and sold by Mostafaelbek on RedBubble'
        }
        className="h-36 w-full rounded-md object-cover duration-200 ease-in-out group-hover:scale-105 group-hover:rounded-md group-hover:transition-transform md:h-60"
      />
      <div className="m-2 flex flex-col md:h-3/4">
        <h3 className="text-left text-xs font-semibold md:text-justify md:text-lg">
          {title}
        </h3>
      </div>
    </a>
  )
}

export default Article
