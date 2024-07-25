import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"

function News() {
  return (
    <div className=" w-full h-fit">
        <div className="navbarbox w-screen h-auto py-2 px-2 bg-slate-300 sticky top-0 z-10">
            <Navbar />
        </div>
        <div className="allnews w-full h-fit">
            <Layout />
        </div>
    </div>
  )
}

export default News