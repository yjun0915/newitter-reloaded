import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { db } from "../firebase"

export interface ITweet {
  id: string
  photo?: string
  tweet: string
  userId: string
  username: string
  createdAt: number
}

const Wrapper = styled.div``

export default function TimeLine() {
  const [tweets, setTweets] = useState<ITweet[]>([])
  const fetchTweets = async () => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createdAt", "desc"),
    )
    const snapshot = await getDocs(tweetsQuery)
    const tweets = snapshot.docs.map((doc) => {
      const { tweet, createdAt, userId, username, photo } = doc.data()
      return { tweet, createdAt, userId, username, photo, id: doc.id }
    })
    setTweets(tweets)
  }
  useEffect(() => {
    fetchTweets()
  }, [])
  return <Wrapper>{JSON.stringify(tweets)}</Wrapper>
}
