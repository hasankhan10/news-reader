import {createBrowserRouter,RouterProvider} from "react-router-dom"
import News from "./pages/News"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Cricket from "./pages/Cricket"
import Football from "./pages/Football"
import Politics from "./pages/Politics"
import Tech from "./pages/Tech"
import Trending from "./pages/Trending"
const router = createBrowserRouter([
  {
    path:"/",
    element:<News />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/signup",
    element:<Signup />
  },
  {
    path:"/cricket",
    element:<Cricket />
  },
  {
    path:"/football",
    element:<Football />
  },
  {
    path:"/politics",
    element:<Politics />
  },
  {
    path:"/tech",
    element:<Tech />
  },
  {
    path:"/trending",
    element:<Trending />
  }
])

function App() {

  return (
    <div className="main w-full h-screen bg-slate-800 overflow-auto">
      <div className="navbarbox w-screen h-auto py-2 px-2 bg-slate-300 sticky top-0 z-10">
        <Navbar />
      </div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App