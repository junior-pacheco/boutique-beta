import React from 'react';

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg className={`w-10 h-10 ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 10C30 10 20 25 20 40C20 55 30 70 50 70C70 70 80 55 80 40C80 25 70 10 50 10Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M50 70V90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M30 90H70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

export default Logo