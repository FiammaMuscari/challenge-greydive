// 404.js
import Link from 'next/link'
import Image from 'next/image'

export default function Custom404() {
  return <>
  <div className='min-h-screen flex flex-col gap-2 justify-center items-center'>
    <img className='max-w-xs' src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png" alt="error"/>
  <h1 className='text-4xl'>Page Not Found </h1>
  <h5>The page you are looking for doesn't exist or has been moved</h5>
    <Link href="/" className='hover:text-[#d4145a]'>
        Go back home
    </Link>
  </div>

  </>
}