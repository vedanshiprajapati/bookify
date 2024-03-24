import React, { useState } from 'react';
import Login from './Login';
import Header from './Header';

const HomePage = () => {
    const [LoginPopup, setLoginPopup] = useState(false);

    function HandleLoginPopup() {
        setLoginPopup(!LoginPopup);

    }
    return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
        <Header HandleLoginPopup={HandleLoginPopup} />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 text-blue-600">
            Unleash Your Reading Adventure
          </h1>
          <p className="text-gray-600 mb-8">
            Bookify is your ultimate companion for organizing and cherishing your book collection.
          </p>

          {/* Call to Action */}
          <div className="flex justify-center space-x-4">
            <div
              onClick={HandleLoginPopup}
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
            >
              Get Started
            </div>
        
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} Bookify. All rights reserved.
        </div>
            </footer>
            
            {LoginPopup && <Login LoginPop={LoginPopup} setLoginPop={setLoginPopup} />}
    </div>
  );
};

export default HomePage;