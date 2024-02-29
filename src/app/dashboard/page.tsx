const Dashboard = () => {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-row-3 gap-2">
          <div className="bg-gray-200 w-28 p-4 rounded-lg"><a href="notes">Notepad</a></div> 
          <div className="bg-gray-200 w-28 p-4 rounded-lg"><a href="">Profile</a></div>  
          <div className="bg-gray-200 w-28 p-4 rounded-lg"><a href="C:\Users\PREDATOR\Desktop\next proj1\proj1\src">Signout</a></div>       
        </div>
      </div>
    );
  };
  
  export default Dashboard;