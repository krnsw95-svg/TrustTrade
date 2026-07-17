export type BuyerType = 'importer' | 'wholesaler' | 'retailer' | 'manufacturer' | 'hospitality' | 'distributor' | 'government' | 'other'

export interface BuyerProfile {
  id: string
  company_id: string
  buyer_type: BuyerType
  product_categories: string[]
  countries_of_interest: string[]
  typical_order_value: number
  purchase_frequency: string
  preferred_incoterms: string[]
  payment_preferences: string[]
  transport_preferences: string[]
  required_certifications: string[]
  preferred_supplier_countries: string[]
  completion_percentage: number
  created_at: string
  updated_at: string
}