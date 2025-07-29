import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = () => {
    try {
      const userData = localStorage.getItem('matx_user');
      const token = localStorage.getItem('matx_token');
      
      if (userData && token) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error checking auth state:', error);
      // Clear invalid data
      localStorage.removeItem('matx_user');
      localStorage.removeItem('matx_token');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data - replace with actual API response
      const userData = {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: credentials.email,
        avatar: null,
        role: 'user',
        createdAt: new Date().toISOString(),
      };
      
      const token = 'mock_jwt_token_' + Date.now();
      
      // Store in localStorage
      localStorage.setItem('matx_user', JSON.stringify(userData));
      localStorage.setItem('matx_token', token);
      
      setUser(userData);
      setIsAuthenticated(true);
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Invalid credentials' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock user creation - replace with actual API response
      const newUser = {
        id: Date.now().toString(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        avatar: null,
        role: 'user',
        createdAt: new Date().toISOString(),
      };
      
      const token = 'mock_jwt_token_' + Date.now();
      
      // Store in localStorage
      localStorage.setItem('matx_user', JSON.stringify(newUser));
      localStorage.setItem('matx_token', token);
      
      setUser(newUser);
      setIsAuthenticated(true);
      
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Registration failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('matx_user');
    localStorage.removeItem('matx_token');
    
    // Reset state
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = async (updates) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedUser = { ...user, ...updates };
      
      // Update localStorage
      localStorage.setItem('matx_user', JSON.stringify(updatedUser));
      
      setUser(updatedUser);
      
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Profile update error:', error);
      return { success: false, error: 'Failed to update profile' };
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would send a reset email
      console.log('Password reset requested for:', email);
      
      return { success: true, message: 'Password reset email sent' };
    } catch (error) {
      console.error('Password reset error:', error);
      return { success: false, error: 'Failed to send reset email' };
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    resetPassword,
    checkAuthState,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
