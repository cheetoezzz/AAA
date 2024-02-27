export default function Home() {
  return (
    <main className=" bg-white min-h-screen flex flex-col items-center">
      <div className="bg-white border shadow-xl w-5/12 h-96 mb-4 rounded-xl flex flex-col items-center mt-40 ">
      <div className=" flex flex-col items-center mt-10 ">
      <div className="font-semibold">
      <h1>NextJS PROJECT 1</h1>
      </div>
      <div className="gap2 mt-4"></div>
      <div>
        <form>
          <input type="text" className="w-64 h-12 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-300" placeholder="Username"/>
        </form>
        <div className="gap2 mt-4"></div>
        <form>
          <input type="text" className="w-64 h-12 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-300" placeholder="Password"/>
        </form>
        <div className="gap2 mt-4 flex flex-col items-center">
        <div>
        <button id="button" className="w-64 h-12 bg-green-500  hover:bg-green-700 text-white font-bold py-1 px-1 rounded-md shadow-md" >Login</button>
        </div>
        <div className="gap2 mt-2 text-1 flex flex-col items-center"></div>
        <div>
        <button id="button" className="w-64 h-12 bg-green-500  hover:bg-green-700 text-white font-bold py-1 px-1 rounded-md shadow-md" ><a href="registration">Create Account</a></button>
        </div>
        <div className="gap2 mt-2 text-1 flex flex-col items-center"></div>
        <link href="/registration/page.tsx" />
        <a href="registration" className="font-thin text-green- hover:text-green-950 underline">Forgot Password</a>
        </div>
        </div>
        </div>
      </div>

    </main>

  );
}
