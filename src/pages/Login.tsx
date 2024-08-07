
function Login() {
  return (
    <div className="login w-full h-screen flex justify-center items-center bg-gray-600">
        <div className=" w-[350px] h-[400px] bg-gray-100 rounded-md flex flex-col gap-4">
            <div className="upper w-full h-1/4 flex justify-center items-center gap-1 flex-col mt-4">
                <h1 className=" text-3xl font-semibold">Welcome back</h1>
                <section className=" leading-5">
                    <p className=" font-semibold opacity-70 text-center">Glad to see you again 👋</p>
                    <p className=" font-semibold opacity-70 text-center">Login to your account bellow</p>
                </section>
            </div>
            <div className="bottom w-full h-3/4">
                <form className=" w-full h-full" action="" method="">
                    <div className=" w-full h-fit px-8">
                        <label className="font-semibold opacity-80 block" htmlFor="email">Email address<span className="text-red-500">*</span></label>
                        <input className=" w-[90%] h-10 rounded-md px-3 py-1 mb-auto" type="email" name="email" id="email" placeholder="Enter email" required/>
                        <br />
                        <label className="font-semibold opacity-80 block" htmlFor="password">Password<span className="text-red-500">*</span></label>
                        <input className=" w-[90%] h-10 rounded-md px-3 py-1 mb-auto" type="password" name="password" id="password" placeholder="Enter password" required/>
                    </div>
                    <div className=" w-full flex justify-center items-center mt-8">
                        <button className=" w-4/5 h-8 bg-blue-500 rounded-md text-white font-semibold" type="submit">Login</button>
                    </div>
                    <p className=" w-full flex justify-center items-center gap-2 mt-2 opacity-70 font-semibold">Don't have an account? <a className=" text-blue-800 font-bold opacity-100" href="">Sign up for free</a></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login