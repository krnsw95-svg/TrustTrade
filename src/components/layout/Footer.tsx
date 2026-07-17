import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/branding/Logo'
import { translations } from '@/data/translations'
import { useLanguage } from '@/hooks/useLanguage'

export const Footer: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-brand-navy text-white mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo variant="full" size="md" showSubbrand={true} />
            <p className="mt-4 text-gray-400 text-sm">{t.common.tagline}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Apana
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:support@trusttrade.com" className="hover:text-white transition-colors">
                  support@trusttrade.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
