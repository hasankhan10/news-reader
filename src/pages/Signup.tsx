
function Signup() {
  return (
    <div className="signup w-full h-screen flex justify-center items-center bg-gray-600">
        <div className=" w-[350px] h-[400px] bg-gray-100 rounded-md">
            <div className="upper w-full h-1/4 flex justify-center items-center gap-2 flex-col">
                <h1 className=" text-3xl font-semibold">Create your Account</h1>
                <p className=" font-semibold opacity-70">Enter the field bellow to get start</p>
            </div>
            <div className="bottom w-full h-3/4">
                <form className=" w-full h-full" action="" method="">
                    <div className=" w-full h-fit px-8">
                        <label className="font-semibold opacity-80 block" htmlFor="name">Full name<span className="text-red-500">*</span></label>
                        <input className=" w-[90%] h-10 rounded-md px-3 py-1 mb-auto" type="text" name="name" id="name" placeholder="Enter name" required/>
                        <br />
                        <label className="font-semibold opacity-80 block" htmlFor="email">Email address<span className="text-red-500">*</span></label>
                        <input className=" w-[90%] h-10 rounded-md px-3 py-1 mb-auto" type="email" name="email" id="email" placeholder="Enter email" required/>
                        <br />
                        <label className="font-semibold opacity-80 block" htmlFor="password">Password<span className="text-red-500">*</span></label>
                        <input className=" w-[90%] h-10 rounded-md px-3 py-1 mb-auto" type="password" name="password" id="password" placeholder="Create password" required/>
                    </div>
                    <div className=" w-full flex justify-center items-center mt-5">
                        <button className=" w-4/5 h-8 bg-blue-500 rounded-md text-white font-semibold" type="submit">Create account</button>
                    </div>
                    <p className=" w-full flex justify-center items-center gap-2 mt-2 opacity-70 font-semibold">Already have an account? <a className=" text-blue-800 font-bold opacity-100" href="">Login</a></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup