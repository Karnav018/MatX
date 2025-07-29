import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/MatX.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const { resetPassword, isLoading } = useAuth();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    
    try {
      const result = await resetPassword(email);
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-matx-primary-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="inline-block">
              <img src={Logo} alt="MatX Logo" className="mx-auto h-16 w-auto" />
            </Link>
            <div className="mt-6">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-matx-text-primary">
              Check your email
            </h2>
            <p className="mt-2 text-base sm:text-lg text-matx-text-secondary">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
          </div>

          {/* Success Card */}
          <div className="bg-matx-primary-800 rounded-xl p-6 sm:p-8 shadow-2xl border border-zinc-700">
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-400">What's next?</h3>
                    <div className="mt-2 text-sm text-blue-300">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Check your email inbox and spam folder</li>
                        <li>Click the reset link in the email</li>
                        <li>Create a new password</li>
                        <li>Sign in with your new password</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L3.18 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-400">Security Note</h3>
                    <p className="mt-1 text-sm text-yellow-300">
                      The reset link will expire in 24 hours for security reasons.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail('');
                    setError('');
                  }}
                  className="flex-1 bg-matx-primary-700 hover:bg-zinc-600 text-matx-text-primary font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Send another email
                </button>
                <Link
                  to="/login"
                  className="flex-1 bg-matx-accent hover:bg-matx-accent-dark text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center"
                >
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-matx-primary-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-block">
            <img src={Logo} alt="MatX Logo" className="mx-auto h-16 w-auto" />
          </Link>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-matx-text-primary">
            Forgot Password?
          </h2>
          <p className="mt-2 text-base sm:text-lg text-matx-text-secondary">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        {/* Reset Form */}
        <div className="bg-matx-primary-800 rounded-xl p-6 sm:p-8 shadow-2xl border border-zinc-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-matx-text-primary mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className={`w-full px-4 py-3 bg-matx-primary-700 text-matx-text-primary rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-matx-accent ${
                  error ? 'border-red-500 focus:ring-red-500' : 'border-zinc-600 focus:border-matx-accent'
                }`}
                placeholder="Enter your email address"
              />
              {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-matx-accent hover:bg-matx-accent-dark disabled:bg-matx-accent/50 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Reset Link</span>
              )}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6">
            <Link
              to="/login"
              className="w-full inline-flex justify-center items-center py-3 px-4 border border-zinc-600 rounded-lg bg-matx-primary-700 hover:bg-zinc-600 text-matx-text-primary font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to login
            </Link>
          </div>

          {/* Support */}
          <p className="mt-6 text-center text-sm text-matx-text-secondary">
            Still need help?{' '}
            <Link to="/contact" className="text-matx-accent hover:text-matx-accent-dark font-medium transition-colors duration-200">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
