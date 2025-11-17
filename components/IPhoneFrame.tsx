import React from 'react';

interface IPhoneFrameProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

export const IPhoneFrame: React.FC<IPhoneFrameProps> = ({
  children,
  width = 220,
  height = 380,
}) => {
  return (
    <div 
      className="relative bg-black rounded-[2.5rem] p-3 shadow-2xl"
      style={{
        width: width + 24,
        height: height + 24,
      }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
      
      {/* Screen */}
      <div 
        className="relative bg-white rounded-[2rem] overflow-hidden"
        style={{
          width,
          height,
        }}
      >
        {children}
      </div>
      
      {/* Side button */}
      <div className="absolute right-0 top-24 w-1 h-12 bg-black/80 rounded-l-sm" />
      
      {/* Volume buttons */}
      <div className="absolute left-0 top-20 w-1 h-8 bg-black/80 rounded-r-sm" />
      <div className="absolute left-0 top-32 w-1 h-8 bg-black/80 rounded-r-sm" />
    </div>
  );
};

