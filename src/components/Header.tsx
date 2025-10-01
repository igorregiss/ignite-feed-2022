import styles from './header.module.css'  // Importa os estilos específicos do Header
import IgniteLogo from '../assets/ignite-logo.svg' // Importa o logotipo do Ignite

 export function Header() {
        return (
            <header className={styles.header}>
                <img src={IgniteLogo} alt="Logotipo do Ignite" />
                <strong>Ignite Feed</strong>
            </header>
        )
    }