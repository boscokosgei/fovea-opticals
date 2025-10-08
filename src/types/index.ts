// src/types/index.ts
export interface Optician {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  experience: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  appointmentDate: Date;
  serviceId: string;
  opticianId: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface TimeSlot {
  start: Date;
  end: Date;
  available: boolean;
}
