"use client";
import { useState } from 'react';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterClick = () => {
    if (!name || !lastname || password.length !== 6 || password !== confirmPassword) {
      alert('Please fill in all fields correctly.');
      return;
    }

    console.log('Registration successful');
  };

  return (
    <main className="bg-white min-h-screen flex flex-col items-center">
      <div className="bg-white border shadow-xl w-5/12 h-96 mb-4 rounded-xl flex flex-col items-center mt-44">
        <div className="flex flex-col items-center mt-4">
          <div className="font-semibold">
            <h1>Create Account</h1>
          </div>
          <div className="gap2 mt-4"></div>
          <div>
            <form>
              <input
                type="text"
                className={`w-64 h-12 border ${name ? 'border-green-300' : 'border-red-500'} rounded-lg px-4 py-2 focus:outline-none focus:border-green-300`}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </form>
            <div className="gap2 mt-4"></div>
            <form>
              <input
                type="text"
                className={`w-64 h-12 border ${lastname ? 'border-green-300' : 'border-red-500'} rounded-lg px-4 py-2 focus:outline-none focus:border-green-300`}
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </form>
            <div className="gap2 mt-4"></div>
            <form>
              <input
                type="password"
                className={`w-64 h-12 border ${password.length === 6 ? 'border-green-300' : 'border-red-500'} rounded-lg px-4 py-2 focus:outline-none focus:border-green-300`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <div className="gap2 mt-4"></div>
            <form>
              <input
                type="password"
                className={`w-64 h-12 border ${confirmPassword === password && confirmPassword ? 'border-green-300' : 'border-red-500'} rounded-lg px-4 py-2 focus:outline-none focus:border-green-300`}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </form>
            <div className="gap2 mt-4 flex flex-col items-center">
              <div>
                <button
                  id="button"
                  className="w-64 h-12 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded-md shadow-md"
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;