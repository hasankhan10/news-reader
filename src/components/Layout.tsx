import Newscomponent from "./Newscomponent"

function Layout({name}) {
  return (
    <div className=" w-full h-fit">
        <div className="sectionheading w-full h-fit ">
            <p className=" text-2xl px-3 py-1 underline w-full text-white">{name}</p>
            <div className=" w-full h-fit flex flex-wrap justify-center items-center">
                <div className="image w-80 h-64 bg-cyan-600 my-2 ml-3 rounded-md"></div>
                <div className="describtion ">
                  <h1 className=" text-3xl text-white ml-3 mt-2 w-80 font-semibold">The headline goes to the main secrtion of the </h1>
                  <p className=" w-80 ml-3 mt-2 text-white opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam nesciunt voluptatem, voluptatibus officiis perspiciatis molestiae unde exercitationem placeat cumque....</p>
                </div>

                <div className="image w-80 h-64 bg-cyan-600 my-2 ml-3 rounded-md"></div>
                <div className="describtion ">
                  <h1 className=" text-3xl text-white ml-3 mt-2 w-80 font-semibold">The headline goes to the main secrtion of the </h1>
                  <p className=" w-80 ml-3 mt-2 text-white opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam nesciunt voluptatem, voluptatibus officiis perspiciatis molestiae unde exercitationem placeat cumque....</p>
                  
                  
                </div>
            </div>
        </div>

        <div className="extranews w-full h-fit px-3 py-2 flex gap-4 flex-wrap justify-center items-center">
          <Newscomponent />
          <Newscomponent />
          <Newscomponent />
          
        </div>
    </div>
  )
}

export default Layout