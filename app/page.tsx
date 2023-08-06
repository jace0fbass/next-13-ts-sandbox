"use client";

import styles from './page.module.css'

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Home Page</h1>
      </div>
    </main>
  )
}
