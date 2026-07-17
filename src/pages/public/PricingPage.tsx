import React, { useState } from 'react'
import { PublicLayout } from '@/layouts/PublicLayout'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { translations } from '@/data/translations'
import { useLanguage } from '@/hooks/useLanguage'

export const PricingPage: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [tradeValue, setTradeValue] = useState<number>(10000)

  const fee = tradeValue * 0.006

  return (
    <PublicLayout>
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-navy mb-4 text-center">
            {t.pricing.title}
          </h1>
          <p className="text-center text-brand-muted mb-12">
            {t.pricing.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <div className="text-center">
                <h3 className="text-lg font-bold text-brand-navy mb-2">{t.pricing.free}</h3>
                <p className="text-brand-muted text-sm">{t.pricing.freeDesc}</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <h3 className="text-lg font-bold text-brand-navy mb-2">{t.pricing.noSub}</h3>
                <p className="text-brand-muted text-sm">{t.pricing.noSubDesc}</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <h3 className="text-lg font-bold text-brand-red mb-2">{t.pricing.successFee}</h3>
                <p className="text-brand-muted text-sm">{t.pricing.successFeeDesc}</p>
              </div>
            </Card>
          </div>

          <Card className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">{t.pricing.calculate}</h2>
            <div className="space-y-4">
              <div>
                <Input
                  type="number"
                  label={t.pricing.tradeValue}
                  value={tradeValue}
                  onChange={(e) => setTradeValue(Number(e.target.value))}
                  min={0}
                />
              </div>
              <div className="bg-brand-bg p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-brand-navy font-medium">{t.pricing.fee}</span>
                  <span className="text-2xl font-bold text-brand-red">
                    {fee.toLocaleString(language === 'nl' ? 'nl-NL' : 'en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">{t.pricing.example}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>€10,000 {t.pricing.tradeValue}</span>
                <span className="font-medium text-brand-navy">€60 {t.pricing.fee}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>€25,000 {t.pricing.tradeValue}</span>
                <span className="font-medium text-brand-navy">€150 {t.pricing.fee}</span>
              </div>
              <div className="flex justify-between text-brand-muted">
                <span>€100,000 {t.pricing.tradeValue}</span>
                <span className="font-medium text-brand-navy">€600 {t.pricing.fee}</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </PublicLayout>
  )
}
