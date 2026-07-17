// Supabase service abstraction - ready for future integration
// Currently mock-only, but structure supports seamless Supabase migration

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export interface SupabaseServiceConfig {
  url?: string
  key?: string
  mock?: boolean
}

let isSupabaseEnabled = false

if (supabaseUrl && supabaseKey) {
  isSupabaseEnabled = true
  // Future: import { createClient } from '@supabase/supabase-js'
  // const supabase = createClient(supabaseUrl, supabaseKey)
}

export const getSupabaseClient = () => {
  if (!isSupabaseEnabled) {
    throw new Error(
      'Supabase not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env'
    )
  }
  // Future: return supabase
}

export const supabaseService = {
  isConfigured: () => isSupabaseEnabled,
  getConfig: () => ({ url: supabaseUrl, key: supabaseKey }),
}
