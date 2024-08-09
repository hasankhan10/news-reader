import {createBrowserRouter,RouterProvider} from "react-router-dom"
import News from "./pages/News"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Cricket from "./pages/Cricket"
import Football from "./pages/Football"
import Politics from "./pages/Politics"
import Tech from "./pages/Tech"
import Trending from "./pages/Trending"
import Search from "./pages/Search"
const router = createBrowserRouter([
  {
    path:"/",
    element:<News />
  },
  {
    path:"login",
    element:<Login />
  },
  {
    path:"signup",
    element:<Signup />
  },
  {
    path:"cricket",
    element:<Cricket />
  },
  {
    path:"football",
    element:<Football />
  },
  {
    path:"politics",
    element:<Politics />
  },
  {
    path:"tech",
    element:<Tech />
  },
  {
    path:"trending",
    element:<Trending />
  },
  {
    path:"/:search",
    element:<Search />
  }
])

function App() {

  return (
    <div className="main w-full h-screen bg-slate-800 overflow-auto">
      <RouterProvider router={router} />
    </div>
  )
}

export default App