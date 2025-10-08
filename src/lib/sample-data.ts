// src/lib/sample-data.ts
import { Optician, Service } from '@/types';

export const sampleOpticians: Optician[] = [
  {
    id: '1',
    name: 'Dr. Elias Kibet',
    specialty: 'Pediatric Optometry',
    bio: 'With over 10 years of experience in pediatric eye care, Dr. Johnson specializes in children\'s vision development and myopia control.',
    imageUrl: '/images/opticians/dr-sarah.jpg',
    experience: 10,
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Contact Lenses',
    bio: 'Dr. Chen is an expert in fitting specialty contact lenses and managing complex corneal conditions.',
    imageUrl: '/images/opticians/dr-chen.jpg',
    experience: 8,
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Ocular Disease',
    bio: 'Specializing in the diagnosis and management of ocular diseases including glaucoma and macular degeneration.',
    imageUrl: '/images/opticians/dr-rodriguez.jpg',
    experience: 12,
  },
];

export const sampleServices: Service[] = [
  {
    id: '1',
    name: 'Comprehensive Eye Exam',
    description: 'Complete vision assessment including refraction, eye health evaluation, and prescription update.',
    duration: 60,
    price: 120,
  },
  {
    id: '2',
    name: 'Contact Lens Fitting',
    description: 'Professional fitting and training for new contact lens wearers.',
    duration: 45,
    price: 80,
  },
  {
    id: '3',
    name: 'Pediatric Vision Screening',
    description: 'Specialized eye examination for children to detect vision problems early.',
    duration: 30,
    price: 90,
  },
  {
    id: '4',
    name: 'Glaucoma Screening',
    description: 'Advanced testing to detect early signs of glaucoma.',
    duration: 45,
    price: 100,
  },
];
