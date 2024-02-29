import styled from "styled-components"
import { useState } from "react"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: none;
  border-radius: 15px;
`

const TextArea = styled.textarea`
  border: none;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  outline: none;
`

export default function EditTweetForm({
  tweet,
  photo,
}: {
  tweet: string
  photo?: string
}) {
  const [newTweet, setTweet] = useState(tweet)
  const [newPhoto, setPhoto] = useState(photo)
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(newTweet)
    setTweet(e.target.value)
  }
  return (
    <Wrapper>
      <TextArea
        required
        rows={5}
        maxLength={180}
        onChange={onChange}
        value={newTweet}
      />
    </Wrapper>
  )
}
