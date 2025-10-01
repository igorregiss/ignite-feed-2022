import { Header } from './components/header'
import { Post } from './Post'
import './global.css'

function App() {

  return (
      <div>

        <Header />
          <Post
            author="John Doe"
            content="Meu primeiro post"
          />
      </div>

  )
}

export default App
