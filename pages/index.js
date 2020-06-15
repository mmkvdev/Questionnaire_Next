import Head from 'next/head'
import HomePage from './HomePage';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Questionnaire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
