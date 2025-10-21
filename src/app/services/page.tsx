// src/app/services/page.tsx
import Link from 'next/link';
import { sampleServices } from '@/lib/sample-data';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive eye care services provided by our experienced opticians. 
            We offer everything from routine exams to specialized treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    ${service.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>⏱️ {service.duration} minutes</span>
                  <Link
                    href={`/appointments?service=${service.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Schedule your eye exam today and experience professional care from our certified opticians.
          </p>
          <Link
            href="/appointments"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 font-semibold"
          >
            Book Appointment Now
          </Link>
        </div>
      </div>
    </div>
  );
}
