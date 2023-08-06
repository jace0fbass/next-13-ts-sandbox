"use client";

import styles from '../page.module.css'

const getData= ():Promise<string> => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          return resolve("any data");
      }, 2000)
  })
}

export default async function Notes() {
  const data : string = await getData() 
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Notes Page</h1>
        <p>{data}</p>
      </div>
    </main>
  )
}