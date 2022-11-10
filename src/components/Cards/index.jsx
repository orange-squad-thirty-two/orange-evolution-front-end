import React from 'react';

export default function Cards({ image, altImage, trail, text }) {
  return (
    <>
      <div className="hidden md:flex flex-col md:mr-3 justify-between md:justify-center items-center w-[180px] h-[150px] sm:w-[216px] md:h-[305px] rounded-[30px] border border-[#353131]">
        <div className="hidden sm:mt-2 sm:flex">
          <img className="w-[180px] h-[170px]" src={image} alt={altImage} />
        </div>
        <div className="text-center">
          <div
            className="flex items-center justify-center sm:m-[6px] text-center sm:text-[12px] 
          sm:w-[60px] h-10 sm:h-5 text-[#353131] rounded-t-[30px] sm:rounded-[30px] bg-[#FF7823]"
          >
            {trail}
          </div>
          <h3 className="mt-6 sm:mt-1 text-[12px] text-[#353131]">{text}</h3>
        </div>

        <button
          className="w-full sm:w-[82px] mt-1 sm:h-[30px] border-t-2 sm:border sm:shadow-[3px_3px_0px_0px_rgb(53,49,49)] text-[#353131]
           rounded-b-[30px] sm:rounded-[30px]"
          type="button"
        >
          Detalhes
        </button>
      </div>
    </>
  );
}
