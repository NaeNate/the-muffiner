"use client"

import { auth, db } from "@firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import { FormEvent, useState } from "react"

const New = () => {
  const [articles, setArticles] = useState([
    { title: "", body: "" },
    { title: "", body: "" },
  ])
  const [password, setPassword] = useState("")

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signInWithEmailAndPassword(
      auth,
      "nathaniel.davis@icsaddis.org",
      password
    ).then(async () => {
      const article = await addDoc(collection(db, "issues"), {
        articles,
        created: Date.now(),
      })
    })
  }

  const change = (
    articleNum: number,
    field: "title" | "body",
    value: string
  ) => {
    const newArticles = [...articles]

    newArticles[articleNum][field] = value

    setArticles(newArticles)
  }

  return (
    <>
      <h1>New</h1>

      <form onSubmit={submit}>
        <h2>Article 1</h2>
        <input
          placeholder="Title"
          value={articles[0].title}
          onChange={(e) => change(0, "title", e.target.value)}
        />
        <input
          placeholder="Body"
          value={articles[0].body}
          onChange={(e) => change(0, "body", e.target.value)}
        />

        <h2>Article 2</h2>
        <input
          placeholder="Title"
          value={articles[1].title}
          onChange={(e) => change(1, "title", e.target.value)}
        />
        <input
          placeholder="Body"
          value={articles[1].body}
          onChange={(e) => change(1, "body", e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </>
  )
}

export default New
