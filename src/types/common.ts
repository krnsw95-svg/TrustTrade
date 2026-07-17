export type UserRole = 'buyer' | 'supplier' | 'logistics' | 'admin'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  company_id?: string
  created_at: string
  updated_at: string
}

export interface Company {
  id: string
  legal_name: string
  trading_name: string
  registration_number: string
  tax_number: string
  country: string
  city: string
  website?: string
  email: string
  phone: string
  contact_person: string
  year_established: number
  employees_count: number
  description: string
  preferred_language: 'en' | 'nl'
  preferred_currency: string
  verified: boolean
  verification_status: 'pending' | 'verified' | 'rejected'
  created_at: string
  updated_at: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}