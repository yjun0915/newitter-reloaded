import { collection, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { db } from "../firebase"

export interface ITweet {
  photo: string
  tweet: string
  userId: string
  username: string
  updatedAt: number
}

const Wrapper = styled.div``

export default function TimeLine() {
  const [tweets, setTweets] = useState<ITweet[]>([])
  const fetchTweets = async () => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createdAt", "desc"),
    )
  }
  useEffect(() => {
    fetchTweets()
  }, [])
  return <Wrapper>{JSON.stringify(tweets)}</Wrapper>
}
