import React, { useEffect, useState } from 'react';
import JWT from 'jwt-decode';
import JsCookie from 'js-cookie';
import Logo from '../../assets/images/logo.svg';
import ImageHome from '../../assets/images/image-home.svg';
import CustomButton from '../../components/CustomButton';
import SideBarTrail from '../../components/SideBarTrail';
import { useHomeContext } from '../../context/HomeProvider';

export default function Home() {
  const [userData, setUserData] = useState('');
  const { showSlide, setShowSlide } = useHomeContext();

  useEffect(() => {
    const token = JsCookie.get('token');
    const user = JWT(token);
    setUserData(user.payload.nome);
  }, []);

  return (
    <div className="">
      <SideBarTrail />
      <div className="flex flex-col h-[90%] mt-16 md:mt-20">
        <div className="justify-items-center self-center">
          <h1 className="text-[18px] md:text-[25px]">Bem vindo ao</h1>
          <img className="w-[210px] md:w-auto" src={Logo} alt="Logo do Orange Juice" />
        </div>
        <div className="flex flex-col mt-10 items-center justify-center h-2/3">
          <h2 className="text-[16px] md:text-[25px] w-[210px] md:w-[380px]">
            <span className="md:text-[25px] border-b-[3px] border-[#ff7823]">
              {userData}
            </span>
            , você ainda não começou nenhuma trilha
          </h2>
          <div className="w-[250px] mt-4 md:w-[305px]">
            <img src={ImageHome} alt="Imagem da home page" />
          </div>
          <div className="hidden md:flex mt-6">
            <CustomButton onClick={() => setShowSlide(!showSlide)} type="button">
              Escolher agora
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
