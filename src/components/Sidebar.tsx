import styles from './Sidebar.module.css' // Importa os estilos específicos do Sidebar
import { PencilLine } from 'phosphor-react' // Importa ícones da biblioteca Phosphor
import { Avatar } from './Avatar' // Importa o componente Avatar

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1758800601575-1bf72a461248?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     
            <div className={styles.profile}>


                <Avatar hasBorder src="https://github.com/rocketseat.png" />
                <strong>Igor Regis</strong>
                <span>Web Developer</span>
            </div> 


            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}