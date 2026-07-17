import type { User, AuthState } from '@/types/common'

interface LoginCredentials {
  email: string
  password: string
}

interface RegisterCredentials {
  email: string
  password: string
  name: string
  company_name: string
}

// Mock auth service - will be replaced by Supabase
const mockUsers: Record<string, { password: string; user: User }> = {
  'demo@trusttrade.com': {
    password: 'demo123',
    user: {
      id: '1',
      email: 'demo@trusttrade.com',
      name: 'Demo User',
      role: 'buyer',
      company_id: '1',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const mockUser = mockUsers[credentials.email]
    if (mockUser && mockUser.password === credentials.password) {
      return mockUser.user
    }
    throw new Error('Invalid credentials')
  },

  register: async (credentials: RegisterCredentials): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const newUser: User = {
      id: Date.now().toString(),
      email: credentials.email,
      name: credentials.name,
      role: 'buyer',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    mockUsers[credentials.email] = {
      password: credentials.password,
      user: newUser,
    }
    return newUser
  },

  logout: async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
  },

  getCurrentUser: async (): Promise<User | null> => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const stored = localStorage.getItem('currentUser')
    return stored ? JSON.parse(stored) : null
  },
}
