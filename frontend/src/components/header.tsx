import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>

      <a href="#" className={styles.logo}><span>ネタ</span>画像庫</a>

    </header>
  )
}
