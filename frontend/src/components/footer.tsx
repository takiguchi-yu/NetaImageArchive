import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <section className={styles.footer}>

      <div className={styles.boxContainer}>

        <div className={styles.box}>
            <h3>follow me</h3>
            <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
        </div>

      </div>

      <div className={styles.credit}> created by <span>takiguchi-yu</span> | all rights reserved </div>

    </section>
  )
}
