export type ProductStatus = 'draft' | 'active' | 'paused' | 'pending_review' | 'rejected'

export interface Product {
  id: string
  supplier_id: string
  name: string
  category: string
  description: string
  country_of_origin: string
  production_location: string
  hs_code?: string
  minimum_order_quantity: number
  available_quantity: number
  monthly_production_capacity: number
  unit: string
  indicative_price: number
  currency: string
  incoterm: string
  lead_time_days: number
  shelf_life?: string
  packaging: string
  storage_conditions: string
  certifications: string[]
  export_countries: string[]
  private_label: boolean
  sample_available: boolean
  customization_available: boolean
  status: ProductStatus
  image_url?: string
  created_at: string
  updated_at: string
}