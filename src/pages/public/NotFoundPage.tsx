import React from 'react'
import { PublicLayout } from '@/layouts/PublicLayout'
import { Container } from '@/components/ui/Container'

export const NotFoundPage: React.FC = () => {
  return (
    <PublicLayout>
      <Container className="py-16">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-5xl font-bold text-brand-navy mb-4">404</h1>
          <p className="text-xl text-brand-muted mb-8">Page not found</p>
          <a href="/" className="text-brand-red hover:underline">
            Back to home
          </a>
        </div>
      </Container>
    </PublicLayout>
  )
}
