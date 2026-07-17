import React, { createContext, useState, useCallback, useEffect } from 'react'
import type { User } from '@/types/common'
import { authService } from '@/services/auth'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (email: string, password: string, name: string, company: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser()
        setUser(currentUser)
      } finally {
        setIsLoading(false)
      }
    }
    loadUser()
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const loggedInUser = await authService.login({ email, password })
      setUser(loggedInUser)
      localStorage.setItem('currentUser', JSON.stringify(loggedInUser))
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setIsLoading(true)
    try {
      await authService.logout()
      setUser(null)
      localStorage.removeItem('currentUser')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const register = useCallback(
    async (email: string, password: string, name: string, company: string) => {
      setIsLoading(true)
      try {
        const newUser = await authService.register({ email, password, name, company_name: company })
        setUser(newUser)
        localStorage.setItem('currentUser', JSON.stringify(newUser))
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
