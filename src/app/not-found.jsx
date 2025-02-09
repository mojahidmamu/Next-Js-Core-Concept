import Link from 'next/link'
import React from 'react'

export default function NotFound404Page() {
  return (
    <div className='flex justify-center items-center gap-5 w-full h-full'>
      <h2>404 Not Found Page</h2>
      <Link href='/' className='text-red-400 border-b-2'>Go Back To Home</Link>
    </div>
  )
}
