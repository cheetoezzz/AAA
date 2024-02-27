export default function Home() {
  return (
      <main className=" bg-white min-h-screen flex flex-col items-center">
      <div className="bg-white border shadow-xl w-5/12 h-96 mb-4 rounded-xl flex flex-col items-center mt-44 ">
      <div className=" flex flex-col items-center mt-4 ">
      <div className="font-semibold">
      <h1>Create Account</h1>
      </div>
      <div className="gap2 mt-4"></div>
      <div>
        <form>
          <input type="text" className="w-64 h-12 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-300" placeholder="Name"/>
        </form>
        <div className="gap2 mt-4"></div>
        <form>
          <input type="text" className="w-64 h-12 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-300" placeholder="Lastname"/>
        </form>
        <div className="gap2 mt-4"></div> 
        <form>
          <input type="text" className="w-64 h-12 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-300" placeholder="Password"/>
        </form>
        <div className="gap2 mt-4"></div>
        <form>
          <input type="text" className="w-64 h-12 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-300" placeholder="Confirm Password"/>
        </form>
        <div className="gap2 mt-4 flex flex-col items-center">
        <div>
        <button id="button" className="w-64 h-12 bg-green-500  hover:bg-green-700 text-white font-bold py-1 px-1 rounded-md shadow-md" >Register</button>
        </div>
        </div>
      </div>
    </div>
    </div>
    </main>

  );
}