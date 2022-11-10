import React, { useEffect, useState } from 'react';
import JWT from 'jwt-decode';
import JsCookie from 'js-cookie';
import Logo from '../../assets/images/logo.svg';
import ImageHome from '../../assets/images/image-home.svg';
import CustomButton from '../../components/CustomButton';
import SideBarTrail from '../../components/SideBarTrail';
import { useHomeContext } from '../../context/HomeProvider';
import { useGlobalContext } from '../../context/GlobalProvider';
import Cards from '../../components/Cards';
import NavBar from '../../components/NavBar';

export default function Home() {
  const [userData, setUserData] = useState('');
  const { showSlide, setShowSlide } = useHomeContext();
  const { selectTrailsData, dataTrails, dataSelectTrails, setSelectTrailsData } =
    useGlobalContext();

  useEffect(() => {
    const token = JsCookie.get('token');
    const { payload } = JWT(token);
    setUserData(payload.nome);
  }, []);

  useEffect(() => {
    const compareTrilha = () => {
      if (dataTrails.data !== null) {
        const result = dataTrails.data.filter((item) =>
          dataSelectTrails.data.find((t) => t.id === item.id),
        );

        return setSelectTrailsData(result);
      }
      return [];
    };
    compareTrilha();
  }, [dataSelectTrails.data, dataTrails.data]);

  return (
    <>
      <NavBar />
      <div className="">
        <SideBarTrail />
        <div className="flex flex-col h-[90%] mt-16 md:mt-20">
          <div className="justify-items-center self-center">
            <h1 className="text-[18px] md:text-[25px]">Bem vindo ao</h1>
            <img className="w-[210px] md:w-auto" src={Logo} alt="Logo do Orange Juice" />
          </div>
          {selectTrailsData.length > 0 ? (
            <div className="flex flex-col  mt-10 items-center justify-center h-2/3">
              <h2 className="text-[16px] md:text-[25px] w-[210px] md:w-[80%]">
                <span className="md:text-[25px] border-b-[3px] border-[#ff7823]">
                  {userData}
                </span>
                , acompanhe suas trilhas
              </h2>
              <div className="flex flex-col md:flex-row md:mt-10">
                {selectTrailsData.map((trail) => (
                  <Cards
                    altImage={`Imagem da trilha ${trail.nome}`}
                    image={trail.urlimage}
                    text={trail.subtitulo}
                    trail={trail.nome.split(' ')[0]}
                    key={trail.id}
                    hidden={false}
                    isDisabled={false}
                    isRegistered
                  />
                ))}
              </div>
              <div
                id="ultimas-aulas"
                className="w-[80%] text-[16px] md:text-[25px] mt-10"
              >
                <h2>Últimas Aulas</h2>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}
