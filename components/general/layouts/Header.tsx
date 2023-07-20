import Logo from "./Logo"
import styles from "@/styles/general/Layout.module.css"
import Options from "./Options"

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />  
            <Options />
        </header>
    )
}