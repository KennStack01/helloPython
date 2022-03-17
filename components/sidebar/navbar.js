import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="flex flex-row justify-center space-x-4 bg-white p-2">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>News</a>
      </Link>
      <Link href="/">
        <a>Resources</a>
      </Link>
    </div>
  )
}

export default Navbar
