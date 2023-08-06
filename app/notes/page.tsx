
import styles from '../page.module.css'

async function getNotesData() {
  const notes = await fetch("https://jsonplaceholder.typicode.com/todos") 
    if(!notes) {
      throw new Error('No data found.');
    }

    return notes.json();
  }

  interface Note {
    userId: string;
    id: number;
    title: string;
    completed: string;
  }

export default async function Notes() {
const notes : Array<Note> = await getNotesData();
  return (
    <main className={styles.main}>
        <h1>Notes Page</h1>
      <div className={styles.description}>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note?.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}