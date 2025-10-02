import { Header } from './components/Header' // Importa o componente Header
import { Sidebar } from './components/Sidebar' // Importa o componente Sidebar
import { Post } from './components/Post' // Importa o componente Post

import './global.css' // Importa o arquivo de estilos globais
import styles from './App.module.css' // Importa os estilos específicos do App

const posts = [
  {
    id: 1,
    author: {
      name: 'Igor Regis',
      role: 'Web Developer',
      avatarUrl: 'https://github.com/igorregiss.png',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: 'github.com/igorregis' },
      { type: 'paragraph', content: 'Gostou? Deixa seu feedback 👇' },
    ],
    publishedAt: new Date('2025-10-02 09:50:30'),
  },
    {
    id: 2,
    author: {
      name: 'Mayk Brito',
      role: 'CTO Rocketseat',
      avatarUrl: 'https://github.com/maykbrito.png',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
      { type: 'link', content: 'github.com/maykbrito' },
    ],
    publishedAt: new Date('2025-10-01 09:50:30'),
  },
]
export function App() {

  return (
      <div>

        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(posts => (
                <Post 
                  key={posts.id}
                  author={posts.author}
                  content={posts.content}
                  publishedAt={posts.publishedAt}
                />
            ))} 
          </main>
        </div>

      </div>

  )
}

export default App

