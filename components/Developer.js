import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

export default function Developer() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="my-4 mx-auto flex-row p-4 md:my-6 md:flex">
      <div className="mx-auto items-center justify-center rounded-lg py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-center">
          {/* <div>
            <img
              src="https://avatars.githubusercontent.com/u/67477516?v=4"
              alt="Developer Profile Picture"
              className="rounded-full "
            />
          </div> */}
          <div className="mx-3 flex flex-col justify-center">
            <h1 className="my-1 text-center text-lg font-semibold text-gray-700">
              hey 👋 I'm Kenn
            </h1>
            <p className="mb-2 text-xs text-gray-500">
              {' '}
              Software Developer & Indie Maker{' '}
            </p>
          </div>
        </div>
        <div className="mx-auto my-2 flex flex-col">
          <h4 className="text-center text-xs text-gray-500">
            Reach out to me at anytime
          </h4>

          <a
            href="https://twitter.com/KennKibadi"
            target="__blank"
            className="mx-auto my-1 rounded-lg bg-white px-5 py-2 font-semibold shadow-sm outline-none hover:shadow-lg"
            style={{ background: '#1DA1F2' }}
          >
            <div className="flex flex-row text-white ">
              <FaTwitter className="my-auto text-3xl" />
              <h3 className="my-auto mx-2 text-sm font-medium">
                follow on twitter{' '}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
