import React, { useEffect, useState } from 'react';
import JWT from 'jwt-decode';
import JsCookie from 'js-cookie';
import Logo from '../../assets/images/logo.svg';
import ImageHome from '../../assets/images/image-home.svg';
import CustomButton from '../../components/CustomButton';

export default function Home() {
  const [userData, setUserData] = useState('');
  useEffect(() => {
    const token = JsCookie.get('token');

    const user = JWT(token);
    console.log(user);
    setUserData(user.payload.nome);
  }, []);

  return (
    <div>
      <div className="flex flex-col h-screen mt-20">
        <div className="justify-items-center self-center">
          <h1 className="text-[25px]">Bem vindo ao</h1>
          <img src={Logo} alt="Logo do Orange Juice" />
        </div>
        <div className="flex flex-col items-center justify-center h-2/3">
          <h2 className="text-[25px]">
            <span className="border-b-[3px] border-[#FF7823]">{userData}</span>, você
            ainda não começou
          </h2>
          <h2 className="text-[25px]">nenhuma trilha</h2>
          <img src={ImageHome} alt="Imagem da home page" />
          <div className="mt-6">
            <CustomButton type="button">Escolher agora</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
