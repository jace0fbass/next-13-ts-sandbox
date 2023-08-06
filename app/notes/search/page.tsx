"use client";

import styles from '../../page.module.css'
import { useRouter } from 'next/navigation'

export default function SearchNote() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Search Note Page</h1>
        <button type="button" onClick={() => router.push('/notes')}>Notes</button> 
      </div>
    </main>
  )
}