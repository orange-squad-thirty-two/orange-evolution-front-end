import React from 'react';

export default function CustomButtonSmall({ children, ...props }) {
  return (
    <button
      className="w-full md:w-[82px] mt-1 sm:h-[30px] border-t-2 md:border md:shadow-[3px_3px_0px_0px_rgb(53,49,49)] text-[#353131]
           rounded-b-[30px] md:rounded-[30px]"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
