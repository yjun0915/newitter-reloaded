import styled from "styled-components"
import { Dispatch, SetStateAction, useState } from "react"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const DoneButton = styled.button`
  background-color: #1d6bf0;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  width: fit-content;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`

export default function EditTweetForm({
  tweet,
  // photo,
  id,
  setEditing,
}: {
  tweet: string
  // photo?: string
  id: string
  setEditing: Dispatch<SetStateAction<boolean>>
}) {
  const [newTweet, setTweet] = useState(tweet)
  // const [newPhoto, setPhoto] = useState(photo)
  // const [file, setFile] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value)
  }
  const onSubmit = async () => {
    if (isLoading) return
    try {
      setLoading(true)
      await updateDoc(doc(db, "tweets", id), {
        tweet: newTweet,
      })
      setTweet("")
      // setPhoto("")
      // setFile(null)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
      setEditing(false)
    }
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
      <DoneButton onClick={onSubmit}>
        {isLoading ? "LOADING..." : "DONE"}
      </DoneButton>
    </Wrapper>
  )
}
