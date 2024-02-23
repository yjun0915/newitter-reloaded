import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./routs/home"
import Profile from "./routs/profile"
import Login from "./routs/login"
import CreateAccount from "./routs/create-account"

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
        path: "/profile", 
        element: <Profile/>, 
      }, 
      {
        path: "/login", 
        element: <Login/>,  
      }, 
      {
        path: "/create-account", 
        element: <CreateAccount/>, 
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
