export type RequestStatus = 'draft' | 'open' | 'matching' | 'quotations_received' | 'negotiation' | 'awarded' | 'closed' | 'cancelled'

export interface BuyerRequest {
  id: string
  buyer_id: string
  product_name: string
  category: string
  specifications: string
  required_quantity: number
  unit: string
  target_price: number
  currency: string
  destination_country: string
  destination_city?: string
  required_delivery_date: string
  preferred_incoterm: string
  required_certifications: string[]
  packaging_requirements: string
  sample_required: boolean
  is_recurring: boolean
  purchase_frequency?: string
  preferred_supplier_countries: string[]
  excluded_countries: string[]
  notes?: string
  status: RequestStatus
  created_at: string
  updated_at: string
}