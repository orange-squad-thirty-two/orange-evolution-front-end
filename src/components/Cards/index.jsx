import React from 'react';

export default function Cards({ image, altImage, trail, text }) {
  return (
    <div className="flex flex-col mr-3 justify-center items-center w-[216px] h-[305px] rounded-[30px] border border-[#353131]">
      <div className="mt-2">
        <img className="w-[180px] h-[170px]" src={image} alt={altImage} />
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center m-[6px] text-center text-[12px] w-[60px] h-5 text-[#353131] rounded-[30px] bg-[#FF7823]">
          {trail}
        </div>
        <h3 className="text-[12px] text-[#353131]">{text}</h3>
      </div>

      <button
        className="w-[82px] mt-1 h-[30px] border shadow-[3px_3px_0px_0px_rgb(53,49,49)] text-[#353131] rounded-[30px]"
        type="button"
      >
        Detalhes
      </button>
    </div>
  );
}
