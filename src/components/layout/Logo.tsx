// src/components/layout/Logo.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto', 
    lg: 'h-12 w-auto'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <div className={sizeClasses[size]}>
        <Image
          src="/images/logo/logo-optician.jpeg"
          alt="Fovea Opticals Logo"
          width={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
          height={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
      
      {/* Optional Text - you can remove this if your JPEG already includes text */}
      {showText && (
        <div className={`font-bold text-gray-900 ${textSizes[size]}`}>
          Fovea<span className="text-blue-600">Opticals</span>
        </div>
      )}
    </Link>
  );
}
