import React from 'react';

export default function CustomButtonSmall({ children, ...props }) {
  return (
    <button
      className="w-[82px] mt-1 h-[30px] border-t-2 border shadow-[3px_3px_0px_0px_rgb(53,49,49)] text-[#353131]
           rounded-[30px]"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
