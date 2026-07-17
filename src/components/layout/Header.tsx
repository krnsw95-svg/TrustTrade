import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/branding/Logo'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'
import { useLanguage } from '@/hooks/useLanguage'
import { translations } from '@/data/translations'

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="bg-brand-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo variant="full" size="md" showSubbrand={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/how-it-works" className="text-brand-navy hover:text-brand-red transition-colors text-sm font-medium">
              {t.nav.howItWorks}
            </Link>
            <Link to="/for-buyers" className="text-brand-navy hover:text-brand-red transition-colors text-sm font-medium">
              {t.nav.forBuyers}
            </Link>
            <Link to="/for-suppliers" className="text-brand-navy hover:text-brand-red transition-colors text-sm font-medium">
              {t.nav.forSuppliers}
            </Link>
            <Link to="/pricing" className="text-brand-navy hover:text-brand-red transition-colors text-sm font-medium">
              {t.nav.pricing}
            </Link>
            <Link to="/contact" className="text-brand-navy hover:text-brand-red transition-colors text-sm font-medium">
              {t.nav.contact}
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'nl')}
              className="px-2 py-1 border border-gray-300 rounded text-sm bg-white text-brand-navy"
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="nl">Nederlands</option>
            </select>

            {isAuthenticated && user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    {t.nav.dashboard}
                  </Button>
                </Link>
                <button
                  onClick={() => logout()}
                  className="text-sm text-brand-navy hover:text-brand-red transition-colors"
                >
                  {t.nav.logout}
                </button>
              </>
            ) : (
              <>
                <Link to="/sign-in">
                  <Button variant="outline" size="sm">
                    {t.nav.signIn}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">
                    {t.nav.register}
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-navy"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-3">
              <Link to="/how-it-works" className="text-brand-navy hover:text-brand-red text-sm font-medium" onClick={() => setIsOpen(false)}>
                {t.nav.howItWorks}
              </Link>
              <Link to="/for-buyers" className="text-brand-navy hover:text-brand-red text-sm font-medium" onClick={() => setIsOpen(false)}>
                {t.nav.forBuyers}
              </Link>
              <Link to="/for-suppliers" className="text-brand-navy hover:text-brand-red text-sm font-medium" onClick={() => setIsOpen(false)}>
                {t.nav.forSuppliers}
              </Link>
              <Link to="/pricing" className="text-brand-navy hover:text-brand-red text-sm font-medium" onClick={() => setIsOpen(false)}>
                {t.nav.pricing}
              </Link>
              <Link to="/contact" className="text-brand-navy hover:text-brand-red text-sm font-medium" onClick={() => setIsOpen(false)}>
                {t.nav.contact}
              </Link>
              <div className="pt-3 border-t border-gray-200 flex gap-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'nl')}
                  className="px-2 py-1 border border-gray-300 rounded text-sm bg-white text-brand-navy flex-1"
                >
                  <option value="en">English</option>
                  <option value="nl">Nederlands</option>
                </select>
              </div>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className="text-sm text-brand-navy hover:text-brand-red transition-colors text-left"
                >
                  {t.nav.logout}
                </button>
              ) : (
                <div className="flex gap-2 pt-2">
                  <Link to="/sign-in" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      {t.nav.signIn}
                    </Button>
                  </Link>
                  <Link to="/register" className="flex-1">
                    <Button variant="primary" size="sm" className="w-full">
                      {t.nav.register}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
