import { useState } from 'react';
import Input from './input';
import Button from './button';

function Login(props) {
  const { LoginPop, setLoginPop } = props;
  console.log(LoginPop)
  const [showSignup, setShowSignup] = useState(false);

  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const handleClose = () => {
    setLoginPop(false);
  };

  return (
    <div className="fixed z-10 flex w-screen items-center justify-center h-screen bg-black/70">
      <div className="rounded-lg shadow-md bg-white w-full max-w-sm p-8 relative">
        <button
          className="absolute top-0 right-0 mr-4 mt-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handleClose}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div className="px-6 pt-4">
          <div className="px-6 pt-4 text-4xl pb-5 text-center font-extrabold">
            {showSignup ? 'Sign Up' : 'Log In'}
          </div>
          <div className="pt-0 px-6 pb-4">
            <div className="grid gap-2 my-2">
              {showSignup && <Input className="w-full" placeholder="Email" type="email" />}
              <Input className="w-full" placeholder="Username" />
              <Input className="w-full" placeholder="Password" type="password" />
            </div>
            <Button className="w-full">{showSignup ? 'Sign Up' : 'Log In'}</Button>
            <div className="mt-4 text-center text-sm text-gray-600">
              {showSignup ? (
                <>
                  Already have an account?{' '}
                  <a href="#" onClick={handleToggleSignup} className="pl-1 text-blue-500 hover:underline">
                    Log In
                  </a>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <a href="#" onClick={handleToggleSignup} className="pl-1 text-blue-500 hover:underline">
                    Register
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
