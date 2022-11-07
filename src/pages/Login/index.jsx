import React from 'react';
import ImageLogin from '../../assets/imageLogin.svg';

export default function Login() {
  return (
    <div>
      <div className="flex">
        <div
          style={{
            background:
              'linear-gradient(324.33deg, #FF7823 1.18%, rgba(255, 120, 35, 0) 50.24%)',
          }}
          className="flex flex-col justify-center items-center w-[60%] h-screen rounded-[3px]"
        >
          <h1 className="text-[36px] mb-[84px] text-[#353131]">Você voltou!</h1>
          <img
            className="w-[628px] h-[490px]"
            src={ImageLogin}
            alt="Imagem da tela de login"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-[40%]">
          <div>
            <label className="flex flex-col" htmlFor="email">
              E-mail
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 w-[336px] h-10 border border-[#5B5B5B] rounded-lg text-[#353131]"
              />
            </label>
          </div>
          <div className="mt-2">
            <label className="flex flex-col" htmlFor="password">
              Senha
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 w-[336px] h-10 border border-[#5B5B5B] rounded-lg"
              />
            </label>
          </div>
          <button
            className="mt-4 bg-[#FF7823] w-[152px] h-[42px] rounded-[30px]"
            type="button"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
