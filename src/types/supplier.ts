export type SupplierType = 'manufacturer' | 'farmer' | 'processor' | 'exporter' | 'wholesaler' | 'distributor' | 'other'

export interface SupplierProfile {
  id: string
  company_id: string
  supplier_type: SupplierType
  product_categories: string[]
  countries_served: string[]
  export_countries: string[]
  minimum_order_value: number
  maximum_monthly_capacity: number
  preferred_incoterms: string[]
  payment_preferences: string[]
  transport_preferences: string[]
  certifications: string[]
  private_label: boolean
  sample_available: boolean
  customization_available: boolean
  completion_percentage: number
  created_at: string
  updated_at: string
}