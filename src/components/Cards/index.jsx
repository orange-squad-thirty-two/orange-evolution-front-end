import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomButtonSmall from '../CustomButtonSmall';

export default function Cards({
  id,
  hidden,
  image,
  altImage,
  trail,
  text,
  functionCallBack,
  isDisabled,
  isRegistered,
}) {
  const history = useHistory();
  return (
    <>
      <div
        className={`${
          hidden ? 'hidden' : 'flex'
        } md:flex flex-col mb-3 md:mr-3 justify-center items-center w-[216px] h-[305px] rounded-[30px] border border-[#353131]`}
      >
        <div className={`${hidden ? 'hidden' : 'flex'} md:mt-2 sm:flex`}>
          <img className="w-[180px] h-[170px]" src={image} alt={altImage} />
        </div>
        <div className="text-center">
          <div
            className="flex items-center justify-center m-[6px] text-center text-[12px] 
          w-[105px] h-5 text-[#353131] rounded-[30px] bg-[#FF7823]"
          >
            {trail}
          </div>
          <h3 className="mt-6 sm:mt-1 text-[12px] text-[#353131]">{text}</h3>
        </div>
        {isRegistered ? (
          <CustomButtonSmall
            disabled={isDisabled}
            onClick={() => {
              history.push('/trails');
            }}
          >
            Ir
          </CustomButtonSmall>
        ) : (
          <CustomButtonSmall disabled={isDisabled} onClick={() => functionCallBack(id)}>
            Detalhes
          </CustomButtonSmall>
        )}
      </div>
    </>
  );
}
