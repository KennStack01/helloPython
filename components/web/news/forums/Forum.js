import React from 'react'
import { SiReddit } from 'react-icons/si'
import Moment from 'react-moment' // please install Moment too ;)
import { BiDoorOpen } from 'react-icons/bi'

const Forum = ({ title, pubDate, link }) => {
  const dateToFormat = new Date(pubDate)

  return (
    <div className="m-2 flex flex-col rounded-l-md border-l-2 border-red-400 bg-white p-2 text-gray-800 shadow-sm shadow-red-400 hover:border hover:shadow-md md:m-3 md:rounded-lg md:p-3">
      <a href={`${link}`} target="__blank" className="flex flex-col">
        <div className="mx-auto text-5xl" style={{ color: '#ff4301' }}>
          <SiReddit />
        </div>
        <div className="my-2 flex flex-col md:my-4">
          <h1 className="mx-auto text-justify text-xs font-medium">{title}</h1>
          <div className="my-3 justify-end text-xs">
            <Moment date={dateToFormat} fromNow />
          </div>
        </div>
      </a>
      <div className="flex flex-row justify-center">
        <a
          href={`${link}`}
          target="__blank"
          className="mx-auto flex flex-row rounded-xl bg-turbo-blue-600 p-2 text-sm font-bold text-white hover:bg-turbo-blue-400"
        >
          <p className="my-auto">Open</p>
          <div className="my-auto text-lg">
            <BiDoorOpen />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Forum
