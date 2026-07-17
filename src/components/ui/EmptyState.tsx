import React from 'react'

interface EmptyStateProps {
  title: string
  description?: string
  action?: React.ReactNode
  icon?: React.ReactNode
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  action,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {icon && <div className="mb-4 text-brand-muted">{icon}</div>}
      <h3 className="text-lg font-medium text-brand-navy mb-2">{title}</h3>
      {description && <p className="text-brand-muted mb-4 max-w-sm">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  )
}
