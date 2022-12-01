import soccer from "@public/soccer.jpeg"
import styles from "@styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <div className={styles.soccer}>
        <Image
          src={soccer}
          alt="Ethiopian Soccer Fans"
          className={styles.soccerImage}
        />
        <h1>The Walias: From Champions to Underdogs</h1>
        <h2>Ammar Abagumbul</h2>
        <br />
        <p className={styles.soccerBody}>
          In the light of the world cup and the upcoming underdogs that have
          displayed a determined fighting spirit against some of the most
          legendary teams “The Walias: From Champions to Underdogs” tracks the
          progress and challenges of our own national team.{" "}
          <Link href="/article/the-walias" className={styles.readMore}>
            Read More
          </Link>
        </p>
      </div>

      {/* <div className={styles.soccer}>
        <div className={styles.france}>2</div>
        <div className={styles.brazil}>1</div>
        <div className={styles.portugal}>3</div>
      </div> */}
    </>
  )
}

export default Home
