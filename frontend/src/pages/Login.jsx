import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/MatX.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      const result = await login(formData);
      
      if (result.success) {
        navigate('/');
      } else {
        setErrors({ submit: result.error || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ submit: 'An unexpected error occurred' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-matx-primary-900 to-matx-primary-800 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-md w-full animate-scaleIn">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block group">
            <img
              src={Logo}
              alt="MatX Logo"
              className="mx-auto h-14 sm:h-18 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-matx-accent to-matx-accent-light">
            Welcome Back
          </h2>
          <p className="mt-3 text-base sm:text-lg text-matx-text-secondary">
            Sign in to continue your AR experience
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-matx-primary-800/90 rounded-2xl p-7 sm:p-9 shadow-2xl border border-matx-accent/20 backdrop-blur-lg relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-matx-accent/10 blur-2xl"></div>
          <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-matx-accent/5 blur-xl"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 animate-fadeIn">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-400 text-sm font-medium">{errors.submit}</span>
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-matx-text-primary mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-0 inset-y-0 flex items-center pl-4 pointer-events-none">
                  <svg className="h-5 w-5 text-matx-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3.5 bg-matx-primary-700/90 text-matx-text-primary rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-matx-accent placeholder-matx-text-muted/60 ${
                    errors.email ? 'border-red-500/70 focus:ring-red-500/50' : 'border-matx-accent/20 focus:border-matx-accent hover:border-matx-accent/40 group-hover:border-matx-accent/30'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-400 animate-fadeIn">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="group">
              <label htmlFor="password" className="block text-sm font-medium text-matx-text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-0 inset-y-0 flex items-center pl-4 pointer-events-none">
                  <svg className="h-5 w-5 text-matx-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-12 py-3.5 bg-matx-primary-700/90 text-matx-text-primary rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-matx-accent placeholder-matx-text-muted/60 ${
                    errors.password ? 'border-red-500/70 focus:ring-red-500/50' : 'border-matx-accent/20 focus:border-matx-accent hover:border-matx-accent/40 group-hover:border-matx-accent/30'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-matx-text-secondary hover:text-matx-text-primary transition-colors duration-300 focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="mt-2 text-sm text-red-400 animate-fadeIn">{errors.password}</p>}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-matx-accent focus:ring-matx-accent border-matx-accent/30 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-matx-text-secondary">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm font-medium text-matx-accent hover:text-matx-accent-light transition-colors duration-300">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-gradient-to-r from-matx-accent to-matx-accent-dark text-black font-medium py-3.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-matx-accent/20 disabled:from-matx-accent/40 disabled:to-matx-accent-dark/40 disabled:cursor-not-allowed flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-matx-accent focus:ring-opacity-50"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3}></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>

          {/* Divider & Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="relative flex justify-center">
                <span className="px-3 bg-matx-primary-800 text-sm text-matx-text-secondary">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="group flex items-center justify-center py-3 px-4 border border-matx-accent/20 rounded-lg bg-matx-primary-700/70 hover:bg-matx-accent/10 transition-all duration-300">
              <svg className="h-5 w-5 text-black group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            <button className="group flex items-center justify-center py-3 px-4 border border-matx-accent/20 rounded-lg bg-matx-primary-700/70 hover:bg-matx-accent/10 transition-all duration-300">
              <svg className="h-5 w-5 text-black group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-matx-text-secondary">
              Don't have an account?{' '}
              <Link to="/register" className="text-matx-accent hover:text-matx-accent-light font-semibold transition-colors duration-300 inline-flex items-center">
                Create account
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
