import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <Wrapper>
      <Menu>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </Menu>
      <Outlet />
    </Wrapper>
  )
}
