import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import type { UserRole } from '@/types/common'

interface RoleBasedRouteProps {
  children: React.ReactNode
  requiredRole: UserRole
}

export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ children, requiredRole }) => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!user || user.role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
