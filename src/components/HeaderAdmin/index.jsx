import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JsCookie from 'js-cookie';
import imageLogo from '../../assets/icons/icon-logo.svg';
import iconMenu from '../../assets/icons/icon-menu.svg';
import Close from '../../assets/icons/close.svg';

export default function HeaderAdmin({ dataTrails }) {
  const history = useHistory();
  const [showSlide, setShowSlide] = useState(true);

  function logOutUser() {
    JsCookie.remove('token');
    history.replace('/');
    return;
  }

  return (
    <header className="flex justify-between items-center mt-10 p-1">
      <img
        className="w-[30px]"
        src={iconMenu}
        alt="Clique para abrir o menu de navegação"
        onClick={() => setShowSlide(!showSlide)}
      />
      <img
        className="w-[175px]"
        src={imageLogo}
        alt="Imagem da logo escrito Orange Evolution"
      />
      <button onClick={() => logOutUser()} className="btn-log-out-header">
        Sair
      </button>
      <div className="div-btn-trails-header">
        <button onClick={() => logOutUser()} className="btn-trails trail-no-choose">
          Sair
        </button>
      </div>
      <div
        className={`top-44 flex flex-col fixed w-[320px] h-[380px] -left-[320px] 
          peer-focus:left-0 z-40 bg-[#ffffff] ease-out delay-150 duration-300 border border-[#353131] 
          shadow-[-8px_08px_0px_0px_rgb(255,50,0)] rounded-r-[10px]
          ${showSlide ? 'translate-x-0 ' : 'translate-x-[315px]'}`}
      >
        <div className="flex flex-col">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowSlide(!showSlide)}
              className="text-[#353131] font-bold p-3 text-[25px] mt-2 text-center"
            >
              <img src={Close} alt="Botaõ fechar" />
            </button>
          </div>
          <div className="w-[320px] border-b border-[#ff7823] mb-2 p-2">
            <h1 className="text-[#353131] font-bold text-[16px] text-center capitalize">
              Administrador
            </h1>
          </div>
        </div>
        {!dataTrails.data ? (
          <p>Carregando...</p>
        ) : (
          <div className="flex  h-[380px] flex-col justify-center items-center">
            {dataTrails.data.map((trail) => (
              <button key={trail.id} className="w-full p-2">
                <span className="border-b border-tema">{trail.nome}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
