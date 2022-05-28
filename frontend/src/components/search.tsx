import styles from '../styles/search.module.scss'

export default function Search() {
  return (
    <section className={styles.search}>

      <form action="" className={styles.searchForm}>
        <input type="search" name="" id="search-box" placeholder="カテゴリーで絞り込む" />
        <label htmlFor="search-box" className='fas fa-search'></label>
      </form>
      <div className={styles.keywordContainer}>
        <div className={styles.keyword}>煽り</div>
        <div className={styles.keyword}>上から目線</div>
        <div className={styles.keyword}>笑顔</div>
        <div className={styles.keyword}>真顔</div>
        <div className={styles.keyword}>ほだす・諭す</div>
        <div className={styles.keyword}>分かりません</div>
        <div className={styles.keyword}>そんなこと言われても</div>
        <div className={styles.keyword}>正論・論破</div>
        <div className={styles.keyword}>怒り</div>
        <div className={styles.keyword}>悲・泣</div>
        <div className={styles.keyword}>機嫌が悪い</div>
        <div className={styles.keyword}>絶望</div>
        <div className={styles.keyword}>現実</div>
        <div className={styles.keyword}>感謝</div>
        <div className={styles.keyword}>ドン引き</div>
        <div className={styles.keyword}>驚く</div>
        <div className={styles.keyword}>拒否</div>
        <div className={styles.keyword}>治療が必要なレベル</div>
        <div className={styles.keyword}>セリフなし</div>
      </div>

    </section>
  )
}
