import styled from "styled-components"
import { auth } from "../firebase"
import { useState } from "react"

const Wrapper = styled.div``

const AvatarUpload = styled.label``

const AvatarImage = styled.img``

const AvatarInput = styled.input`
  display: none;
`

const Name = styled.span``

export default function Profile() {
  const user = auth.currentUser
  const [avatar, setAvatar] = useState(user?.photoURL)
  return (
    <Wrapper>
      <AvatarUpload>
        {avatar ? (
          <AvatarImage src={avatar} />
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
          </svg>
        )}
      </AvatarUpload>
      <AvatarInput type="file" accept="image/*" />
      <Name>{user?.displayName ?? "Anonimous"}</Name>
    </Wrapper>
  )
}
