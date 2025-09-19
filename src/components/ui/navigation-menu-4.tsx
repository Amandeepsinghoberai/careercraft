import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { to: "/", label: "Home" },
  {
    label: "Features",
    submenu: true,
    type: "description",
    items: [
      {
        to: "/features",
        label: "AI Resume Builder",
        description: "Create professional resumes with AI assistance.",
      },
      {
        to: "/features",
        label: "ATS Optimization",
        description: "Ensure your resume passes ATS systems.",
      },
      {
        to: "/features",
        label: "Templates",
        description: "Choose from professional resume templates.",
      },
    ],
  },
  {
    label: "Pricing",
    submenu: true,
    type: "simple",
    items: [
      { to: "/pricing", label: "Free Plan" },
      { to: "/pricing", label: "Pro Plan" },
      { to: "/pricing", label: "Enterprise" },
      { to: "/pricing", label: "Custom" },
    ],
  },
  {
    label: "About",
    submenu: true,
    type: "icon",
    items: [
      { to: "/contact", label: "Getting Started", icon: "BookOpenIcon" },
      { to: "/contact", label: "Support", icon: "LifeBuoyIcon" },
      { to: "/contact", label: "About Us", icon: "InfoIcon" },
    ],
  },
]

export default function Component() {
  const location = useLocation();
  
  return (
    <header className="border-b border-gray-700/50 bg-black/20 backdrop-blur-sm px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                            {link.label}
                          </div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.to}
                                    className="py-1.5 block"
                                  >
                                    {item.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link to={link.to} className="py-1.5 block">
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      )}
                      {/* Add separator between different types of items */}
                      {index < navigationLinks.length - 1 &&
                        // Show separator if:
                        // 1. One is submenu and one is simple link OR
                        // 2. Both are submenus but with different types
                        ((!link.submenu &&
                          navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            !navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            navigationLinks[index + 1].submenu &&
                            link.type !== navigationLinks[index + 1].type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="bg-border -mx-1 my-1 h-px w-full"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-white hover:text-gray-300 font-bold text-xl">
              ResumeAI Pro
            </Link>
            {/* Navigation menu */}
            <div className="max-md:hidden">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      {link.submenu ? (
                        <>
                          <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium">
                            {link.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className={cn(
                              "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                              link.type === "description" && "md:grid-cols-1"
                            )}>
                              {link.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={item.to}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      {/* Display icon if present */}
                                      {link.type === "icon" && "icon" in item && (
                                        <div className="flex items-center gap-2">
                                          {item.icon === "BookOpenIcon" && (
                                            <BookOpenIcon
                                              size={16}
                                              className="text-foreground opacity-60"
                                              aria-hidden="true"
                                            />
                                          )}
                                          {item.icon === "LifeBuoyIcon" && (
                                            <LifeBuoyIcon
                                              size={16}
                                              className="text-foreground opacity-60"
                                              aria-hidden="true"
                                            />
                                          )}
                                          {item.icon === "InfoIcon" && (
                                            <InfoIcon
                                              size={16}
                                              className="text-foreground opacity-60"
                                              aria-hidden="true"
                                            />
                                          )}
                                          <div className="text-sm font-medium leading-none">
                                            {item.label}
                                          </div>
                                        </div>
                                      )}

                                      {/* Display label with description if present */}
                                      {link.type === "description" && "description" in item && (
                                        <>
                                          <div className="text-sm font-medium leading-none">
                                            {item.label}
                                          </div>
                                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            {item.description}
                                          </p>
                                        </>
                                      )}

                                      {/* Display simple label if simple type */}
                                      {link.type === "simple" && (
                                        <div className="text-sm font-medium leading-none">
                                          {item.label}
                                        </div>
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.to}
                            className="text-gray-300 hover:text-white py-1.5 px-2 font-medium"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
                <NavigationMenuViewport />
              </NavigationMenu>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm text-white hover:text-gray-300">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild size="sm" className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}