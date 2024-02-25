import styled from "styled-components"

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
`

const Logo = styled.img`
  height: 25px;
`

export default function GithubButton() {
  return (
    <Button>
      <Logo src="/github-logo.svg" />
      Continue with Github
    </Button>
  )
}
