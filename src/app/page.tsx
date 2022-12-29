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
        <p className={styles.preview}>
          In the light of the world cup and the upcoming underdogs that have
          displayed a determined fighting spirit against some of the most
          legendary teams “The Walias: From Champions to Underdogs” tracks the
          progress and challenges of our own national team.{" "}
          <Link href="/article/the-walias" className={styles.readMore}>
            Read More
          </Link>
        </p>
      </div>

      <div className={styles.articleRight}>
        <Image src={art} alt="Paint on Canvas" className={styles.halfImage} />
        <h1>A Blurr of Art</h1>
        <h2>Bessy Belay</h2>
        <br />
        <p className={styles.body}>
          In this incredible art piece created by Zaira, we see eloquent strokes
          synthesized with bold colors which conveys a desolate, melancholic,
          and almost distressing atmosphere. We are also introduced to a van
          gogh inspired theme which all the more adds to the created tension. At
          first glance, The giant house, being one of the most salient features
          of this piece stood out to me. There is almost a chapel-like element
          to it, as the windows possess their own unique pattern. Additionally,
          the dark blue color of the sky fused with the black detailing also
          entails a more sinister backstory. –What could be happening?
          <br />
          <br />I feel as though the woman in the body of art represents a
          fragmented piece of a larger story. She is the ideal symbol of a
          person living in a towering and dark world. Much like the darkness, we
          are clouded within the real world, examples being covid, systemic
          racism, and other global issues… Us as humans are just tiny beings
          compared to the actual issue. Additionally, I also believe that us
          humans have the ability to make decisions, which in the art is
          illustrated through the 2 different paths.--And although we are
          unaware of what lies ahead, we still confide in choosing a certain
          route. Lastly, I think the blurred effect from the pastels induces the
          narrative that there might not necessarily be a binary solution to the
          problems that we are facing today. But alternatively lead us humans to
          a never ending cycle of confusion and blur.{" "}
          <Link href="/article/blurr-of-art" className={styles.readMore}>
            Read More
          </Link>
        </p>
      </div>
    </>
  )
}

export default Home
