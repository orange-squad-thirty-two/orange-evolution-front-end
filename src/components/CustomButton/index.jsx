import React from 'react';

export default function CustomButton({ children, ...props }) {
  return (
    <button
      className="mt-4 bg-[#FF7823] hover:bg-orange-500 w-[152px] h-[42px] rounded-[30px]"
      {...props}
    >
      {children}
    </button>
  );
}
