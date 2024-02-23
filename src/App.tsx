import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./routs/home"
import Profile from "./routs/profile"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout/>, 
    children: [
      {
        path: "", 
        element: <Home/>, 
      }, 
      {
        path: "profile", 
        element: <Profile/>, 
      }
    ]
  }
])

function App() {

  return (
    <></>
  )
}

export default App
