import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-[#0000FF]/20 supports-[backdrop-filter]:bg-[#0000FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="/images/pionext_logoicon.svg" 
                alt="Pionext Icon" 
                className="h-8 w-8"
              />
              <img 
                src="/images/pionext_logotype.svg" 
                alt="Pionext" 
                className="h-6"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="#features" 
                className="border-transparent text-white/80 hover:text-white hover:border-white/50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="border-transparent text-white/80 hover:text-white hover:border-white/50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

