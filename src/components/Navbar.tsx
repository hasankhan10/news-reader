
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Profile from "./Profile";
function Navbar() {
  const [profile,setProfile] = useState<boolean>(false)
  const [value,setValue] = useState<string>()

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value) 
  }
  const handleSearch = ()=>{
    
  }
  return (
    <div className="navbar w-full h-full flex flex-col sm:flex-row">
        <div className="logo sm:h-full h-16 sm:w-1/5 w-full flex justify-center items-center">
            <NavLink to={"/"}><h1 className=" sm:text-4xl text-2xl font-serif"><span className=" opacity-70">News</span> Reader</h1></NavLink>
        </div>
        <div className="tags sm:h-full h-auto w-full sm:w-3/6 flex flex-wrap justify-center items-center sm:space-x-16 space-x-7 sm:text-xl text-sm py-2 sm:py-0 font-mono">
            <NavLink to={"/trending"} className="link hover:font-bold">Trending</NavLink>
            <NavLink to={"/cricket"} className="link hover:font-bold">Cricket</NavLink>
            <NavLink to={"/football"} className="link hover:font-bold">Football</NavLink>
            <NavLink to={"/politics"} className="link hover:font-bold">Politics</NavLink>
            <NavLink to={"/tech"} className="link hover:font-bold">Tech</NavLink>
        </div>
        <div className="search sm:h-full h-16 sm:w-[30%] w-full flex justify-center items-center gap-2 py-2 sm:py-0">

            <input className=" w-4/5 h-10 text-center rounded-md" placeholder="Search Anything!" type="text" onChange={(e)=>handleValue(e)} />

            <IoIosSearch onClick={handleSearch} className=" w-6 h-6 cursor-pointer" />
            <div onClick={()=>setProfile(!profile)} className="profile h-10 w-10 bg-red-500 rounded-full cursor-pointer">
              {/* profile photo will come. */}
            </div>
            {
              profile?<Profile />:null
            }
        </div>
        
    </div>
  )
}

export default Navbar