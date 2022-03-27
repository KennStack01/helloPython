import React from 'react'

const Conference = ({ URL, name }) => {
  return (
    <a
      href={URL}
      target="__blank"
      className="flex flex-row rounded-md bg-white p-2 shadow-sm hover:shadow-turbo-blue-100"
    >
      <img
        src="/python-logo.svg"
        className="md:w-18 my-auto w-8 rounded-full bg-white"
        alt="helloPython logo"
      />
      <h3 className="my-auto text-xs font-semibold md:text-lg">{name}</h3>
    </a>
  )
}

export default Conference
