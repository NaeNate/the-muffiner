import soccer from "@public/soccer.jpeg"
import art from "@public/art.jpg"
import styles from "@styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <div className={styles.article}>
        <Image
          src={soccer}
          alt="Ethiopian Soccer Fans"
          className={styles.image}
        />
        <h1>The Walias: From Champions to Underdogs</h1>
        <h2>Ammar Abagumbul</h2>
        <br />
        <p className={styles.body}>
          In the light of the world cup and the upcoming underdogs that have
          displayed a determined fighting spirit against some of the most
          legendary teams “The Walias: From Champions to Underdogs” tracks the
          progress and challenges of our own national team.{" "}
          <Link href="/article/the-walias" className={styles.readMore}>
            Read More
          </Link>
        </p>
      </div>

      <div className={styles.article}>
        <Image src={art} alt="Paint on Canvas" className={styles.image} />
        <h1>A Blurr of Art</h1>
        <h2>Bessy Belay</h2>
        <br />
        <p className={styles.body}>
          "A Blurr of Art" takes a close look at an art piece by none other than
          an ICS high school student.{" "}
          <Link href="/article/blurr-of-art" className={styles.readMore}>
            Read More
          </Link>
        </p>
      </div>
    </>
  )
}

export default Home
