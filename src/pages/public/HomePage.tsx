import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { PublicLayout } from '@/layouts/PublicLayout'
import { Button } from '@/components/ui/Button'
import { translations } from '@/data/translations'
import { useLanguage } from '@/hooks/useLanguage'
import { ArrowRight, Globe, TrendingUp, Zap, Users, Lock } from 'lucide-react'

export const HomePage: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.home.hero}
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              {t.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  {t.home.findSuppliers} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  {t.home.findBuyers} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            Why Trusted Trade?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <Globe className="w-8 h-8 text-brand-red mb-4" />
              <h3 className="text-lg font-bold text-brand-navy mb-2">Global Network</h3>
              <p className="text-brand-muted">Connect with verified buyers and suppliers worldwide in one platform.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <TrendingUp className="w-8 h-8 text-brand-red mb-4" />
              <h3 className="text-lg font-bold text-brand-navy mb-2">Market Intelligence</h3>
              <p className="text-brand-muted">Real-time data on supply, demand, and market trends.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <Lock className="w-8 h-8 text-brand-red mb-4" />
              <h3 className="text-lg font-bold text-brand-navy mb-2">Trusted & Secure</h3>
              <p className="text-brand-muted">Verified companies and secure transactions with confidence.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-bg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Ready to start trading?</h2>
            <p className="text-lg text-brand-muted mb-8">Join thousands of buyers and suppliers already using Trusted Trade</p>
            <Link to="/register">
              <Button variant="primary" size="lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PublicLayout>
  )
}
