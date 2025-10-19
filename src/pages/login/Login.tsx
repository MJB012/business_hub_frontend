import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
  errors: {
    email: string;
    password: string;
  };
}

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<LoginState>({
    email: '',
    password: '',
    isLoading: false,
    errors: {
      email: '',
      password: ''
    }
  });

  const handleNavigateToSignUp = () => {
    navigate('/sign-up');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: ''
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(prev => ({ ...prev, isLoading: true }));
    
    // Add your login logic here
    
    setState(prev => ({ ...prev, isLoading: false }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto space-y-8 bg-white p-8 rounded-lg shadow-lg">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-black rounded-full flex items-center justify-center">
            <svg 
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Business Management Hub
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Manage your business inventory, sales, and expenses
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Demo: Use admin@businesshub.com for admin access
          </p>
        </div>

        {/* Login/Sign Up Toggle */}
        <div className="bg-gray-100 rounded-md p-1 flex">
          <button 
            type="button"
            className="flex-1 py-2 px-4 rounded-md bg-white shadow-sm text-sm font-medium text-gray-900"
          >
            Login
          </button>
          <button 
            onClick={handleNavigateToSignUp}
            type="button"
            className="flex-1 py-2 px-4 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={state.email}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm pl-10 
                           focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={state.password}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm pl-10 
                           focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={state.isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
                       text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              {state.isLoading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
