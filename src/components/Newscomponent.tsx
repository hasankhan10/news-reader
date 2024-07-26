
function Newscomponent() {
  return (
    <div className="newscomponent w-72 h-28 rounded-md bg-cyan-600 flex">
        <div className="image w-1/3 h-full"></div>
        <div className="details w-2/3 h-full flex flex-col justify-center items-center">
            <h1 className=" text-center font-semibold">heading of the news..</h1>
            <p className=" opacity-80">Lorem ipsum, dolor sit amet consectetur elit. Quae, totam.</p>
        </div>
    </div>
  )
}

export default Newscomponent