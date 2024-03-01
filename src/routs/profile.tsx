import styled from "styled-components"
import { auth } from "../firebase"

const Wrapper = styled.div``

const AvatarUpload = styled.label``

const AvatarImage = styled.img``

const AvatarInput = styled.input`
  display: none;
`

const Name = styled.span``

export default function Profile() {
  const user = auth.currentUser
  return (
    <Wrapper>
      <AvatarUpload>
        <AvatarImage />
      </AvatarUpload>
      <AvatarInput type="file" accept="image/*" />
      <Name>{user?.displayName ?? "Anonimous"}</Name>
    </Wrapper>
  )
}
