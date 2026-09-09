import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
}

export const MotionButton: React.FC<Props> = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative h-auto w-auto cursor-pointer rounded-full border border-gray-200 bg-white p-1.5 outline-none overflow-hidden transition-shadow hover:shadow-lg ${className}`}
    >
      <span
        className="absolute inset-0 bg-green-600 rounded-full scale-0 transition-transform duration-500 origin-center group-hover:scale-100"
        aria-hidden="true"
      ></span>
      
      <div className="relative flex items-center justify-between gap-6 px-6 py-2.5 z-10">
        <span className="text-gray-900 group-hover:text-white transition-colors duration-500 font-semibold tracking-tight whitespace-nowrap text-[15px]">
          {label}
        </span>
        <div className="bg-gray-100 group-hover:bg-white/20 text-gray-600 group-hover:text-white rounded-full p-1.5 transition-all duration-500 group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </button>
  );
};
