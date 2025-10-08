// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Clear Vision, Better Life
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional eye care services with experienced opticians. 
            Schedule your appointment today for comprehensive vision solutions at Fovea Opticals.
          </p>
          <div className="space-x-4">
            <Link 
              href="/appointments" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
              Book Appointment
            </Link>
            <Link 
              href="/services" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 font-semibold"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fovea Opticals?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Opticians</h3>
              <p className="text-gray-600">Certified professionals with years of experience in comprehensive eye care.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book appointments online at your convenience with our simple booking system.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Services</h3>
              <p className="text-gray-600">From routine eye tests to advanced vision solutions and specialized treatments.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}    
