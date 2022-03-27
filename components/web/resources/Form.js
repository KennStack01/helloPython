import React from 'react'

const Form = () => {
  return (
    <div className="my-4 w-full md:w-1/3">
      <form
        action="https://formsubmit.co/560d47194bcb65da44c8f2387e83989b"
        method="POST"
      >
        <div className="mx-4 flex flex-col overflow-hidden text-left shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="flex flex-col">
              <input
                type="hidden"
                name="_subject"
                value="Resources - helloPython WEB"
              />
              <input
                type="hidden"
                name="_next"
                value="https://hellopython.vercel.app/thankyou"
              />
              <div className="my-2">
                <label
                  htmlFor="Category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="Category"
                  name="Category"
                  autoComplete="category"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Blog</option>
                  <option>Youtube Channel</option>
                  <option>E-Book</option>
                  <option>Conference</option>
                  <option>Website</option>
                </select>
              </div>
              <div className="my-2">
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  autoComplete="given-name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="my-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="my-2">
                <label
                  htmlFor="URL"
                  className="block text-sm font-medium text-gray-700"
                >
                  URL address
                </label>
                <input
                  type="text"
                  name="URL"
                  id="URL"
                  autoComplete="given-url"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-turbo-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-turbo-blue-700 focus:outline-none focus:ring-2 focus:ring-turbo-blue-500 focus:ring-offset-2"
            >
              Add Resource
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
