// 404.js
import Link from 'next/link'
import Image from 'next/image'

export default function Custom404() {
  return <>
  <div className='min-h-screen flex flex-col gap-2 justify-center items-center'>
    <img src="https://uploads-ssl.webflow.com/static/page-not-found.211a85e40c.svg" alt="error"/>
  <h1 className='text-4xl'>Page Not Found </h1>
  <h5>The page you are looking for doesn't exist or has been moved</h5>
    <Link href="/" className='hover:text-[#d4145a]'>
        Go back home
    </Link>
  </div>

  </>
}