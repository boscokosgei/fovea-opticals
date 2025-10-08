// src/components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Fovea Opticals
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Services
            </Link>
            <Link href="/opticians" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Our Opticians
            </Link>
            <Link href="/appointments" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Book Appointment
            </Link>
          </nav>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
