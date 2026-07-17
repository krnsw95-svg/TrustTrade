import React from 'react'
import { Loader2 } from 'lucide-react'

export const LoadingSpinner: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Loader2 className="w-8 h-8 text-brand-red animate-spin" />
      {message && <p className="mt-2 text-brand-muted">{message}</p>}
    </div>
  )
}
