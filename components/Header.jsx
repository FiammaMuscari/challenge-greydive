import Link from 'next/link'
import React from 'react'
import database from '../database/db.json'
import Image from 'next/image'

export const Header = (props) => {

  return (
    <div className="flex justify-between mx-32">
        <Link href="/">
            <Image src="/simulacr.png" alt="" width="150" height="100" />
        </Link>
      <div className='flex gap-4'>
          {database.map((db) => {
          return (
              <Link href={`/client/${db.cliente}`} key={db.idVideo} className='hover:text-[#d4145a]'>
                {db.cliente}
              </Link>
              );
          })}
        </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: database,
    },
  };
}

