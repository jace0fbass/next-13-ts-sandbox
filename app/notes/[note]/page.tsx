
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


  // PRE-RENDER ALL ID'S
export async function generateStaticParams() {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()) 
  return todos.map((todo: any) => ({
    note: todo.id.toString()
  }))
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