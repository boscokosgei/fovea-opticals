// src/components/layout/Header.tsx
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3"> {/* Reduced padding for better logo fit */}
        <div className="flex justify-between items-center">
          <Logo />
          
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">
              Home
            </a>
            <a href="/services" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">
              Services
            </a>
            <a href="/opticians" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">
              Our Opticians
            </a>
            <a 
              href="/appointments" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            >
              Book Appointment
            </a>
          </nav>

          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
