export interface InventoryRecord {
  id: string
  product_id: string
  available_quantity: number
  reserved_quantity: number
  unit: string
  storage_location: string
  batch_reference: string
  production_date: string
  expiry_date?: string
  availability_date: string
  notes?: string
  updated_at: string
}