import { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    console.log('Next.js app loaded')
  }, [])

  return (
    <>
      <Head>
        <title>SPA Shop</title>
        <meta name="description" content="Welcome to SPA Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to SPA Shop</h1>
        <p className="text-lg">Your one-stop shop for spa products</p>
      </main>
    </>
  )
} 