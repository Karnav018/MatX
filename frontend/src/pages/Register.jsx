import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/MatX.png';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      const result = await register(formData);
      
      if (result.success) {
        navigate('/');
      } else {
        setErrors({ submit: result.error || 'Registration failed' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ submit: 'An unexpected error occurred' });
    }
  };

  return (
    <div className="min-h-screen bg-matx-primary-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-md w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-block group">
            <img 
              src={Logo} 
              alt="MatX Logo" 
              className="mx-auto h-12 sm:h-16 w-auto transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-matx-text-primary leading-tight">
            Create Account
          </h2>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-matx-text-secondary max-w-sm mx-auto">
            Join MatX and start your AR journey today
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-matx-primary-800 rounded-xl p-6 sm:p-8 shadow-2xl border border-matx-border-light backdrop-blur-sm bg-opacity-95">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 sm:p-4 animate-fadeIn">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-400 text-sm">{errors.submit}</span>
                </div>
              </div>
            )}
            
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-matx-text-primary mb-2">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-matx-primary-700 text-matx-text-primary rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-matx-accent focus:ring-opacity-50 placeholder-matx-text-muted ${
                    errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-matx-border-light focus:border-matx-accent hover:border-matx-accent/50'
                  }`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-400 animate-fadeIn">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-matx-text-primary mb-2">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-matx-primary-700 text-matx-text-primary rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-matx-accent focus:ring-opacity-50 placeholder-matx-text-muted ${
                    errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-matx-border-light focus:border-matx-accent hover:border-matx-accent/50'
                  }`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-400 animate-fadeIn">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-matx-text-primary mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-10 bg-matx-primary-700 text-matx-text-primary rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-matx-accent focus:ring-opacity-50 placeholder-matx-text-muted ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-matx-border-light focus:border-matx-accent hover:border-matx-accent/50'
                  }`}
                  placeholder="Enter your email address"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-matx-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs sm:text-sm text-red-400 animate-fadeIn">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-matx-text-primary mb-2">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-12 bg-matx-primary-700 text-matx-text-primary rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-matx-accent focus:ring-opacity-50 placeholder-matx-text-muted ${
                    errors.password ? 'border-red-500 focus:ring-red-500' : 'border-matx-border-light focus:border-matx-accent hover:border-matx-accent/50'
                  }`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-matx-text-muted hover:text-matx-text-primary transition-colors duration-200 focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {/* Password Requirements */}
              <div className="mt-2 text-xs text-matx-text-muted">
                Password must contain at least 8 characters, including uppercase, lowercase, and a number
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs sm:text-sm text-red-400 animate-fadeIn">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-matx-text-primary mb-2">
                Confirm Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-12 bg-matx-primary-700 text-matx-text-primary rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-matx-accent focus:ring-opacity-50 placeholder-matx-text-muted ${
                    errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-matx-border-light focus:border-matx-accent hover:border-matx-accent/50'
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-matx-text-muted hover:text-matx-text-primary transition-colors duration-200 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs sm:text-sm text-red-400 animate-fadeIn">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="bg-matx-primary-700/30 rounded-lg p-3 sm:p-4 border border-matx-border-light">
              <div className="flex items-start">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-matx-accent focus:ring-matx-accent focus:ring-opacity-50 border-matx-border-light rounded bg-matx-primary-700 transition-colors duration-200"
                  />
                </div>
                <div className="ml-3 text-xs sm:text-sm">
                  <label htmlFor="agreeTerms" className="text-matx-text-secondary leading-relaxed">
                    I agree to the{' '}
                    <Link to="/terms" className="text-matx-accent hover:text-matx-accent-light underline underline-offset-2 transition-colors duration-200">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-matx-accent hover:text-matx-accent-light underline underline-offset-2 transition-colors duration-200">
                      Privacy Policy
                    </Link>
                    . By creating an account, you confirm you are at least 13 years old.
                  </label>
                </div>
              </div>
              {errors.agreeTerms && (
                <p className="mt-2 text-xs sm:text-sm text-red-400 animate-fadeIn ml-7">{errors.agreeTerms}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-matx-accent to-matx-accent-dark hover:from-matx-accent-dark hover:to-matx-accent disabled:from-matx-accent/50 disabled:to-matx-accent/50 text-black font-semibold py-3 sm:py-3.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg disabled:scale-100 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-matx-accent focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-matx-primary-800"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span>Create Account</span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 sm:mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-matx-border-light"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-3 bg-matx-primary-800 text-matx-text-muted">Already have an account?</span>
              </div>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="mt-4 text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center space-x-2 text-matx-accent hover:text-matx-accent-light font-medium transition-all duration-200 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-matx-accent focus:ring-opacity-50 rounded px-2 py-1"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Sign in to existing account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
