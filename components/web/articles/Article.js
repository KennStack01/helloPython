import React from 'react'

const Article = ({ imageURL, title, link }) => {
  return (
    <a
      href={link}
      target="__blank"
      className="group mx-auto flex cursor-pointer flex-col justify-between overflow-hidden"
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
        className="h-1/3 w-full rounded-md object-cover duration-200 ease-in-out group-hover:scale-105 group-hover:rounded-md group-hover:transition-transform"
      />
      <div className="flex h-2/3 flex-col">
        <h3 className="lg:text-md text-left text-xs font-semibold md:text-sm">
          {title}
        </h3>
      </div>
    </a>
  )
}

export default Article
