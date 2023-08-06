"use client";

import styles from '../page.module.css'

export default async function Loading() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Loading.........</h1>
      </div>
    </main>
  )
}