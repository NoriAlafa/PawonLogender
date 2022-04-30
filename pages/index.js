import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../sections/layout'

export default function Home() {
  return (
    <>
      <Layout pageTitle="Homepage">
        <div className="dark:bg-gray-900  dark:text-gray-100 ">
          <main className={styles.main}>
            <h1>Test</h1>
          </main>
        </div>
      </Layout>
    </>
  )
}
