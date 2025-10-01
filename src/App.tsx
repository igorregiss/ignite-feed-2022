import { Header } from './components/Header' // Importa o componente Header
import { Sidebar } from './components/Sidebar' // Importa o componente Sidebar
import { Post } from './Post' // Importa o componente Post
import './global.css' // Importa o arquivo de estilos globais
import styles from './App.module.css' // Importa os estilos específicos do App

function App() {

  return (
      <div>

        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              author="John Doe"
              content="Meu primeiro post"
            />
            <Post
              author="John Doe"
              content="Meu primeiro post"
            />
            <Post
              author="John Doe"
              content="Meu primeiro post"
            />
          </main>
        </div>

      </div>

  )
}

export default App
