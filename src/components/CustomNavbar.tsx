import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LucideIcon, Home, Zap, DollarSign, MessageCircle, User, LogOut, LogIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuth } from '../contexts/AuthContext'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface CustomNavbarProps {
  items?: NavItem[]
  className?: string
}

export function CustomNavbar({ items, className }: CustomNavbarProps) {
  const { user, signOut } = useAuth()
  const [isMobile, setIsMobile] = useState(false)

  // Default navigation items
  const defaultItems: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "Features", url: "/features", icon: Zap },
    { name: "Pricing", url: "/pricing", icon: DollarSign },
    { name: "Contact", url: "/contact", icon: MessageCircle },
  ]

  const navItems = items || defaultItems
  const [activeTab, setActiveTab] = useState(navItems[0].name)

  // Update active tab based on current route
  React.useEffect(() => {
    const currentItem = navItems.find(item => item.url === window.location.pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [navItems])

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-black/20 border border-gray-700/50 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-gray-300 hover:text-white",
                isActive && "bg-white/10 text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-blue-500/20 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-blue-500/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-blue-500/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-blue-500/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        
        {/* Authentication Buttons */}
        <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-700/50">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors text-gray-300 hover:text-white hover:bg-white/10"
              >
                <span className="hidden md:inline">Dashboard</span>
                <span className="md:hidden">
                  <User size={18} strokeWidth={2.5} />
                </span>
              </Link>
              <button
                onClick={handleSignOut}
                className="relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors text-gray-300 hover:text-white hover:bg-white/10"
              >
                <span className="hidden md:inline">Sign Out</span>
                <span className="md:hidden">
                  <LogOut size={18} strokeWidth={2.5} />
                </span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors text-gray-300 hover:text-white hover:bg-white/10"
              >
                <span className="hidden md:inline">Sign In</span>
                <span className="md:hidden">
                  <LogIn size={18} strokeWidth={2.5} />
                </span>
              </Link>
              <Link
                to="/signup"
                className="relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                <span className="hidden md:inline">Sign Up</span>
                <span className="md:hidden">
                  <Zap size={18} strokeWidth={2.5} />
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
