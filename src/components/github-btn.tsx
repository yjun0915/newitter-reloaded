import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { auth } from "../firebase"

const Button = styled.span`
  margin-top: 50px;
  width: 100%;
  background-color: white;
  color: black;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const Logo = styled.img`
  height: 25px;
`

export default function GithubButton() {
  const navigate = useNavigate()

  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider()
      await signInWithPopup(auth, provider)
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
      Continue with Github
    </Button>
  )
}
