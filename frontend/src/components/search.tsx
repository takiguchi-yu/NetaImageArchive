import styles from '../styles/search.module.scss'

export default function Search() {
  return (
    <section className={styles.search}>

      <form action="" className={styles.searchForm}>
        <input type="search" name="" id="search-box" placeholder="カテゴリーで絞り込む" />
        <label htmlFor="search-box" className='fas fa-search'></label>
      </form>
      <div className={styles.tagContainer}>
        <div className={styles.tag}>煽り</div>
        <div className={styles.tag}>上から目線</div>
        <div className={styles.tag}>笑顔</div>
        <div className={styles.tag}>真顔</div>
        <div className={styles.tag}>ほだす・諭す</div>
        <div className={styles.tag}>分かりません</div>
        <div className={styles.tag}>そんなこと言われても</div>
        <div className={styles.tag}>正論・論破</div>
        <div className={styles.tag}>怒り</div>
        <div className={styles.tag}>悲・泣</div>
        <div className={styles.tag}>機嫌が悪い</div>
        <div className={styles.tag}>絶望</div>
        <div className={styles.tag}>現実</div>
        <div className={styles.tag}>感謝</div>
        <div className={styles.tag}>ドン引き</div>
        <div className={styles.tag}>驚く</div>
        <div className={styles.tag}>拒否</div>
        <div className={styles.tag}>治療が必要なレベル</div>
        <div className={styles.tag}>セリフなし</div>
      </div>

    </section>
  )
}
