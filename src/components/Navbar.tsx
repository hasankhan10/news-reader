import { IoIosSearch } from "react-icons/io";
function Navbar() {
  return (
    <div className="navbar w-full h-full flex flex-col sm:flex-row">
        <div className="logo sm:h-full h-16 sm:w-1/5 w-full flex justify-center items-center">
            <h1 className=" sm:text-4xl text-2xl font-serif">News Reader</h1>
        </div>
        <div className="tags sm:h-full h-auto w-full sm:w-3/6 flex flex-wrap justify-center items-center sm:space-x-16 space-x-7 sm:text-xl text-sm py-2 sm:py-0 font-mono">
            <a href="">Trending</a>
            <a href="">Cricket</a>
            <a href="">Football</a>
            <a href="">Politics</a>
            <a href="">Tech</a>
        </div>
        <div className="search sm:h-full h-16 sm:w-[30%] w-full flex justify-center items-center gap-2 py-2 sm:py-0">
            <input className=" w-4/5 h-10 text-center rounded-md" placeholder="Search Anything!" type="text" />
            <IoIosSearch className=" w-6 h-6 cursor-pointer" />
        </div>
    </div>
  )
}

export default Navbar