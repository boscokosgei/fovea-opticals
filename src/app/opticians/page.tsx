// src/app/opticians/page.tsx
import Link from 'next/link';
import { sampleOpticians } from '@/lib/sample-data';

export default function OpticiansPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Opticians</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team of certified opticians brings years of experience and specialized expertise 
            to provide you with the best eye care possible.
          </p>
        </div>

        {/* Opticians Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleOpticians.map((optician) => (
            <div
              key={optician.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Placeholder for image - you'll add real images later */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <div className="text-4xl">👓</div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{optician.name}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    {optician.experience}+ years
                  </span>
                </div>
                
                <p className="text-blue-600 font-medium mb-3">{optician.specialty}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{optician.bio}</p>
                
                <Link
                  href={`/appointments?optician=${optician.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Book with {optician.name.split(' ')[1]} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Care in Every Specialty</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Each of our opticians brings unique expertise to ensure you receive specialized care 
            tailored to your specific vision needs.
          </p>
        </div>
      </div>
    </div>
  );
}
