import React from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { ImBook } from 'react-icons/im'

// This is the EBook Component
const EBook = ({ pictureURL, title, pubDate, link, author, isFree }) => {
  return (
    <div className="group mx-2 overflow-hidden ">
      <section className="h-76 w-6/7 container m-auto my-4 flex flex-col rounded-lg bg-white shadow hover:shadow-sm md:h-80">
        <div>
          <img
            className="image-video h-40 w-full rounded-md rounded-t-lg object-cover object-center duration-300 ease-in-out group-hover:scale-110 group-hover:rounded-md group-hover:transition-transform md:h-48"
            src={pictureURL}
            alt="Book Cover Image"
          />
          <p
            className={
              !isFree
                ? 'hidden'
                : `absolute -mt-20 block rounded-r bg-red-500 px-2 py-1 font-semibold text-white`
            }
          >
            free
          </p>
        </div>
        <div className="my-2 mx-2 flex-grow text-center text-gray-700">
          <div>
            <a
              href={`${link}`}
              target="__blank"
              className="flex flex-row justify-center"
            >
              <h1 className="font-sans text-xs font-semibold hover:text-turbo-blue-600 md:text-sm">
                {title}
              </h1>
            </a>
            <p className="text-center text-xs text-gray-600 md:text-sm">
              {' '}
              by {author}{' '}
            </p>
          </div>
        </div>
        <div className="m-auto my-1 flex flex-row">
          <a href={`${link}`} target="__blank" className="items-center">
            <div className="flex flex-row rounded bg-turbo-blue-500 p-1 font-semibold text-white hover:bg-turbo-blue-400 hover:drop-shadow-md  md:p-2">
              <h3 className=" my-auto mx-1">Open</h3>
              <span className="my-auto mx-1 text-lg md:text-xl">
                <ImBook />
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default EBook
