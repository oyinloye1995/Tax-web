import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  bankName?: string;
  accountType?: string;
  dateOfBirth?: string;
  joinDate: string;
  totalPoints: number;
  availablePoints: number;
  redeemedPoints: number;
  membershipLevel: string;
  filingStatus?: string;
  occupation?: string;
  memberSince?: string;
  currentStreak?: number;
  activitiesCompleted?: number;
  communityImpact?: string;
  volunteerHours?: number;
  badgesEarned?: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock user database (in a real app, this would be in a backend)
  const [users, setUsers] = useState<Array<User & { password: string }>>([]);

  const isAuthenticated = !!user;

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('taxapp_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('taxapp_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find user in mock database
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('taxapp_user', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    } else {
      setIsLoading(false);
      return false;
    }
  };

  const signup = async (userData: any): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    // Create new user with all signup data
    const newUser = {
      id: Date.now().toString(),
      email: userData.email,
      password: userData.password || 'defaultpassword',
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      address: userData.address,
      city: userData.city,
      state: userData.state,
      zipCode: userData.zipCode,
      bankName: userData.bankName,
      accountType: userData.accountType,
      dateOfBirth: userData.dateOfBirth,
      joinDate: new Date().toLocaleDateString(),
      totalPoints: 0, // New user starts with 0 points
      availablePoints: 0,
      redeemedPoints: 0,
      membershipLevel: 'Bronze Member', // New users start at Bronze
      filingStatus: userData.filingStatus || 'single',
      occupation: userData.occupation || '',
      memberSince: 'October 2025', // Current signup month
      currentStreak: 0, // New user starts with 0 day streak
      activitiesCompleted: 0, // New user has completed 0 activities
      communityImpact: 'New Member', // Starting impact level
      volunteerHours: 0, // New user starts with 0 hours
      badgesEarned: 0 // New user starts with 0 badges
    };
    
    // Add to mock database
    setUsers(prev => [...prev, newUser]);
    
    // Log the user in immediately after signup
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('taxapp_user', JSON.stringify(userWithoutPassword));
    
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('taxapp_user');
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};