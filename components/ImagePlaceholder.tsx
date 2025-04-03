import React from 'react';

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  width = 400, 
  height = 300,
  className = ''
}) => {
  return (
    <div 
      className={`bg-gray-100 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <svg 
        className="w-12 h-12 text-gray-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
    </div>
  );
};

export default ImagePlaceholder; 