import { useEffect, useState } from "react"
import styled from "styled-components"

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
  const fetchTweets = async () => {}
  useEffect(() => {
    fetchTweets()
  }, [])
  return <Wrapper>{JSON.stringify(tweets)}</Wrapper>
}
