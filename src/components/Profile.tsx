
function Profile() {
  return (
    <div className="profile h-56 w-48 rounded-md bg-gray-500 absolute right-1 sm:top-14 top-48">
        <div className="profilepic w-full h-1/2 flex flex-col justify-center items-center gap-2">
            <div className=" w-14 h-14 bg-cyan-200 rounded-full"></div>
            <h1 className="font-semibold">Hello, Mehedi Hasan</h1>
        </div>
        <div className="setting w-full h-1/2 flex flex-col justify-center items-center gap-3">
            <button className=" w-[95%] h-10 bg-cyan-500 rounded-md font-semibold">Change password</button>
            <button className=" w-[95%] h-10 bg-cyan-500 rounded-md font-semibold">Log out</button>
        </div>
    </div>
  )
}

export default Profile