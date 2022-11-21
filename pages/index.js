import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import database from '../database/db.json'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>greydive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen flex flex-col justify-center items-center gap-3'>
        <h1 className={styles.title}>¡Bienvenido!</h1>
        <h3>Elige al cliente a testear</h3>
        <div className='gap-4 grid'>

          <div className='flex gap-8 justify-center'>
          {data.map(test => {
            return (
              <button key={test.idVideo} className='bg-[#d4145a] rounded px-4 py-1 hover:bg-[#BE1251]'>
                <Link href={`/${test.cliente}`}>{test.cliente}</Link>
              </button>
            )
          })}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <h4>web creada por Fiamma Muscari</h4>
      </footer>
    </div>
  )
}

// fetching data
export async function getStaticProps() {
  return {
    props: {
      data: database
    }
  }
}
