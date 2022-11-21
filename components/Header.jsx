import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

export const Header = () => {
  return (
    <>
    <div className="flex justify-between mx-32">
        <Link href="/">
            <Image src="/simulacr.png" alt="" width="150" height="100" />
        </Link>
      <div className="space-x-10">
        <Link href="/viamo" className='hover:text-[#d4145a]'>Viamo</Link>
        <Link href="/nebula" className='hover:text-[#d4145a]'>Nebula</Link>
      </div>
    </div>
    </>
  )
}
