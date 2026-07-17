export interface CapacityRecord {
  id: string
  product_id: string
  daily_capacity: number
  weekly_capacity: number
  monthly_capacity: number
  current_utilization: number
  next_available_production_date: string
  minimum_production_run: number
  maximum_production_run: number
  notes?: string
  updated_at: string
}