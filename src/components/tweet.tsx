import styled from "styled-components"
import { ITweet } from "./timeline"

const Wrapper = styled.div``

const Column = styled.span``

const Username = styled.text``

const Payload = styled.textarea``

const Photo = styled.img``

export default function Tweet({ username, photo, tweet }: ITweet) {
  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        <Payload>{tweet}</Payload>
      </Column>
      {photo ? (
        <Column>
          <Photo src={photo} />
        </Column>
      ) : null}
    </Wrapper>
  )
}
