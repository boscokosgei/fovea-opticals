// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fovea Opticals</h3>
            <p className="text-gray-400">
              Professional eye care services with experienced opticians. Your vision is our priority.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-white transition duration-300">Services</a></li>
              <li><a href="/opticians" className="hover:text-white transition duration-300">Our Team</a></li>
              <li><a href="/appointments" className="hover:text-white transition duration-300">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (+254) 702-116-349</li>
              <li>✉️ elias@foveaopticals.com</li>
              <li>📍 Oginga Odinga Street, Eldoret City</li>
              <li> Sirgoi Plaza, Opposite jumahaji</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fovea Opticals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
