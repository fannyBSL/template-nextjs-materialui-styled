import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
          <img src="/logo.svg" alt="Logo" />
          <p>
          Get started by editing.
        </p>
      </main>

      <footer>
          © 2021 BlueSky Digital Labs
      </footer>
    </div>
  )
}
