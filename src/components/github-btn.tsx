import styled from "styled-components"

const Button = styled.span`
  margin-top: 20px;
  background-color: white;
  color: black;
`

const Logo = styled.img``

export default function GithubButton() {
  return (
    <Button>
      <Logo src="/github-logo.svg" />
      Continue with Github
    </Button>
  )
}
