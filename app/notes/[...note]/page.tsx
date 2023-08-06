
import styles from '../../page.module.css'

async function getNoteData(id: string) {
  const note = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!note) {
      throw new Error('No data found.');
    }
    return note.json();
  }

  interface Note {
    userId: string;
    id: number;
    title: string;
    completed: string;
  }

export async function generateStaticParams() {
  return [{note: ['1', 'a']}, {note: ['2', 'b']}]
}

export default async function Note({params}: {params: {note: string}}) {
  const note : Note = await getNoteData(params?.note);
  return (
    <main className={styles.main}>
        <h1>Note Page</h1>
        <div className={styles.description}>
          <p>Note: {note?.id}</p>
          <p>Title: {note?.title}</p>
        </div>
    </main>
  )
}