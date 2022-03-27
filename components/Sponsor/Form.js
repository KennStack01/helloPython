import React from 'react'

const Form = () => {
  return (
    <div className="my-4 w-full md:w-1/3">
      <form
        action="https://formsubmit.co/560d47194bcb65da44c8f2387e83989b"
        method="POST"
      >
        <div className="flex flex-col overflow-hidden text-left shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="flex flex-col">
              <input
                type="hidden"
                name="_subject"
                value="Sponsorship - helloPython!"
              />
              <input
                type="hidden"
                name="_next"
                value="https://helloreact-beta.vercel.app/thankyou"
              />
              <div className="my-4">
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
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-turbo-blue-500 focus:outline-none focus:ring-turbo-blue-500 sm:text-sm"
                />
              </div>

              <div className="my-2">
                <label
                  htmlFor="Email address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="Email address"
                  id="Email address"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-turbo-blue-500 focus:outline-none focus:ring-turbo-blue-500 sm:text-sm"
                />
                <p className="mt-2 text-xs text-gray-500">
                  We need your e-mail to contact you for validation
                </p>
              </div>

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
                  autoComplete="Category-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-turbo-blue-500 focus:outline-none focus:ring-turbo-blue-500 sm:text-sm"
                >
                  <option>1 Week Sponsorship 👋</option>
                  <option>1 Month Sponsorship 😎</option>
                  <option>Lifetime Sponsorship 🤯</option>
                </select>
              </div>

              <div className="my-2">
                <label
                  htmlFor="Description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="Description"
                    name="Description"
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-turbo-blue-500 focus:outline-none focus:ring-turbo-blue-500 sm:text-sm"
                    placeholder="Please, provide some details to help the project succeed"
                    defaultValue={''}
                    required
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Brief Description for your request
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-turbo-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-turbo-blue-700 focus:outline-none focus:ring-2 focus:ring-turbo-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
