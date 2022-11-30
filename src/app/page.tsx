import styles from "@styles/Home.module.css"
import Link from "next/link"

const Home = () => (
  <>
    <h1 className={styles.header}>The Muffiner</h1>

    <div>
      <h2>
        #Justice For [Insert Names of the Countless Ethiopian Women Stripped of
        Their Rights]
      </h2>
      <p>Safia Huyghebaert - 15/02/2021</p>
      <p>
        She stood in a field of meskel flowers, her coffee coils plaited back
        into five tight braids. Her red and sky blue uniform was stained and she
        smelled of eucalyptus and the horses that had dragged her. Under her
        long lashes were the pools of the Danakil Depression, and as she grasped
        the shotgun with her life, she had the blood of her abductor on her
        hands.
      </p>
      <Link href="/article/justice-for">Read More...</Link>
    </div>

    <div>
      <h2>The Walias: From Champions to Underdogs</h2>
      <p>By Ammar Abagumbul - 19/02/2021</p>
      <p>
        “Adane! Saladin! Adane! Seladiiiin… Goooal!!” announced the elated
        football commentator. Everyone was cheering, some were crying in joy,
        and some were daydreaming of the promised land the national team was
        headed to. Ethiopia 2, Sudan 0. If the game concludes with this result,
        Ethiopians could start thinking about buying flight tickets to South
        Africa to support their national team in the upcoming African Cup of
        Nations. And so it was. After 31 years of waiting, the Ethiopian
        national team was to participate in the African Cup of Nations. But
        alas! The team could not make its way past the group stage.
      </p>
      <Link href="/article/the-walias">Read More...</Link>
    </div>

    <div>
      <h2>Opinionated Art Commentary</h2>
      <p>Bessy Belay</p>
      <p>
        In this incredible art piece, we see eloquent strokes synthesized with
        bold colors which conveys a desolate, melancholic, and almost
        distressing atmosphere. We are also introduced to a van gogh inspired
        theme which all the more adds to the created tension. At first glance,
        The giant house, being one of the most salient features of this piece
        stood out to me. There is almost a chapel-like element to it, as the
        windows possess their own unique pattern. Additionally, the dark blue
        color of the sky fused with the black detailing also entails a more
        sinister backstory. -What could be happening?
      </p>
      <p>
        I feel as though the woman in the body of art represents a fragmented
        piece of a larger story. She is the ideal symbol of a person living in a
        towering and dark world. Much like the darkness, we are clouded within
        the real world, examples being covid, systemic racism, and other global
        issues… Us as humans are just tiny beings compared to the actual issue.
        Additionally, I also believe that us humans have the ability to make
        decisions, which in the art is illustrated through the 2 different
        paths.--And although we are unaware of what lies ahead, we still confide
        in choosing a certain route. Lastly, I think the blurred effect from the
        pastels induces the narrative that there might not necessarily be a
        binary solution to the problems that we are facing today. But
        alternatively lead us humans to a never ending cycle of confusion and
        blur.
      </p>
    </div>

    <div>
      <div className={styles.piece}>
        <p>France (34 Votes - 15%)</p>
        <div
          className={styles.podium}
          style={{
            height: "90px",
            borderRight: "2px solid black",
          }}
        ></div>
      </div>

      <div className={styles.piece}>
        <p>Brazil (76 Votes - 33%)</p>
        <div
          className={styles.podium}
          style={{
            height: "120px",
          }}
        ></div>
      </div>

      <div className={styles.piece}>
        <p>Portugal (31 Votes - 13%)</p>
        <div
          className={styles.podium}
          style={{
            height: "60px",
            borderLeft: "2px solid black",
          }}
        ></div>
      </div>
    </div>

    <iframe
      width="800"
      height="800"
      style={{
        border: "none",
      }}
      src="https://crosswordlabs.com/embed/fifa-world-cup-49?clue_height=30"
    ></iframe>
  </>
)

export default Home
