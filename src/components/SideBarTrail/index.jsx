import React, { useState } from 'react';
import Cards from '../Cards';
import uxUiImage from '../../assets/images/ux-ui-image.svg';
import FullStack from '../../assets/images/fullstack-image.svg';
import QAImage from '../../assets/images/qa-image.svg';

export default function SideBarTrail() {
  const [showSlide, setShowSlide] = useState(true);
  return (
    <div
      className={`flex flex-col flex-1 h-screen md:flex-row
      w-[973px] bg-white shadow-[8px_8px_0px_0px_rgb(255,50,0)] justify-end border rounded-[30px] 
       p-10 pl-10 pr-20 text-white fixed md:h-[411px] z-40 -left-[900px] 
       ease-in-out duration-300 top-1/4 
      ${showSlide ? 'translate-x-0 ' : 'translate-x-[870px]'} `}
      onClick={() => setShowSlide(!showSlide)}
    >
      <Cards
        image={uxUiImage}
        altImage="Imagem da trilha de UX/UI"
        text="Um alto contraste de cores facilita a leitura"
        trail="UX/UI"
      />
      <Cards
        image={FullStack}
        altImage="Imagem da trilha de Full Stack"
        text="Uma trilha para você que quer tornar-se um desenvolvedor"
        trail="Full Stack"
      />
      <Cards
        image={QAImage}
        altImage="Imagem da trilha de QA"
        text="Uma trilha para você que gosta de qualidade"
        trail="QA"
      />
    </div>
  );
}
