import Header from "@/component/header/Header";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Header />
      <div className={styles.body}>
        <div className={styles.body_right}>
          <img src="Subject.png" />
        </div>
        <div className={styles.body_left}>
          <span>I&apos;M Suraz Das</span>
        </div>
      </div>
      <div className={styles.clip}></div>
      <div className={styles.medium} id="about">
        <div className={styles.medium_left}>
          <img src="middle.img.jpg" />
        </div>
        <div className={styles.medium_right}>
          <h1>About ME</h1>
          <div className={styles.medium_right_line}>
            <div className={styles.medium_right_line_lefts}></div>
            <div className={styles.medium_right_line_rights}></div>
          </div>
          <p>
            Name:suraj kumar das
            <br /> From:KTM
            <br /> study:+2
            <br /> Clz NAme:Ambition Academy
            <br /> I am learning programming since jan 2024.
          </p>
        </div>
      </div>
      <div className={styles.medium_right_share}>
        <span>Share:</span>
        <a href="https://www.facebook.com/suraz.das.127" target="_blank">
          <img src="facebook icon.webp" />
        </a>
        <a href="https://www.instagram.com/surazdas123" target="blank">
          <img src="instagram icon.png" />
        </a>
      </div>
    </div>
  );
}
