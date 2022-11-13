import Cards from '../Cards';
import Close from '../../assets/icons/close.svg';
import { useHomeContext } from '../../context/HomeProvider';
import { useGlobalContext } from '../../context/GlobalProvider';
import { useHistory, useLocation } from 'react-router-dom';

import Checked from '../../assets/icons/checked.svg';

export default function SideBarTrail() {
    const history = useHistory();
    const { pathname } = useLocation();
    const { showSlide, setShowSlide } = useHomeContext();
    const { trailsId, setTrailsId, dataTrails, selectTrailsData } = useGlobalContext();

    const handleSelectTrail = async (id) => {
        setTrailsId([...trailsId, id]);
        history.push(`/trails/${id}`);
    };

    return (
        <>
            <div
                className={`hidden md:flex flex-col
      w-[973px] bg-[#ffffff] shadow-[-8px_08px_3px_2px_rgb(255,50,0)] md:justify-end border rounded-[30px] 
       md:p-10 md:pl-10 md:pr-20 text-white fixed  md:h-[430px] z-40 -left-[950px] md:-left-[900px] 
       ease-in-out duration-300 top-10 md:top-1/4 
      ${showSlide ? 'translate-x-0 ' : 'translate-x-[650px] sm:translate-x-[870px]'}`}
            >
                <div className="flex justify-around items-center w-[973px] z-50">
                    <div />
                    <h2 className="z-50 text-center m-2 sm:m-4 text-[22px] sm:text-[35px] text-[#353131]">
                        Escolha sua trilha
                    </h2>
                    <button
                        className="w-[46px] h-[46px] p-2"
                        type="button"
                        onClick={() => setShowSlide(true)}
                    >
                        <img src={Close} alt="Botão para fechar" />
                    </button>
                </div>
                <div className="flex flex-col md:w-[800px] w-[973px] md:flex-row items-center justify-center">
                    {dataTrails.loading ? (
                        <p>Carregando...</p>
                    ) : (
                        dataTrails.data
                            .filter((item) => item.nome !== 'Início')
                            .map((item) => (
                                <Cards
                                    key={item.id}
                                    image={item.urlimage}
                                    altImage={item.alt}
                                    text={item.subtitulo}
                                    trail={item.nome.split(' ')[0]}
                                    functionCallBack={() => handleSelectTrail(item.id)}
                                    isDisabled={selectTrailsData.some((t) => t.id === item.id)}
                                    isRegistered={false}
                                />
                            ))
                    )}
                </div>
                <div
                    className="absolute h-[428px] w-10 bg-titulo top-[0px] cursor-pointer z-50 right-0 rounded-r-[30px]"
                    onClick={() => setShowSlide(false)}
                ></div>
            </div>

            {/* Menu mobile */}
            <div className="md:hidden relative">
                <button
                    onClick={() => setShowSlide(!showSlide)}
                    className="bg-hamburger w-[28px] h-[28px] bg-no-repeat bg-center 
        m-[14px] ml-5 absolute top-0 text-[35px]"
                    id="button-aside"
                >
                    ≡
                </button>

                <aside
                    className={`top-64 flex flex-col fixed w-[320px] h-[380px] -left-[320px] 
        peer-focus:left-0 z-40 bg-[#ffffff] ease-out delay-150 duration-300 border border-[#353131] 
        shadow-[-8px_08px_0px_0px_rgb(255,50,0)] rounded-r-[10px]
        ${showSlide ? 'translate-x-0 ' : 'translate-x-[315px]'}`}
                    id="aside"
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
                                {pathname.split('/')}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 h-screen">
                        <ul className="flex flex-col justify-center items-center w-[320px] p-2 border-b border-[#ff7823]">
                            {dataTrails.loading ? (
                                <p>Carregando...</p>
                            ) : (
                                dataTrails.data
                                    .filter((trail) => trail.nome !== 'Início')
                                    .map((trail) => (
                                        <button
                                            key={trail.id}
                                            className="flex justify-center items-center w-[330px] h-8 mb-3 p-1"
                                            onClick={() => handleSelectTrail(trail.id)}
                                            type="button"
                                            disabled={selectTrailsData.some((t) => t.id === trail.id)}
                                        >
                                            <span className="text-center border-b-[2px] border-tema">
                                                {trail.nome}
                                            </span>
                                            <span className="ml-2">
                                                {selectTrailsData.some((t) => t.id === trail.id) ? (
                                                    <img src={Checked} alt="" />
                                                ) : (
                                                    ''
                                                )}
                                            </span>
                                        </button>
                                    ))
                            )}
                        </ul>
                        <a href="#ultimas-aulas" className="w-full h-8 mt-7 text-center p-1">
                            <span className="border-b-[2px] border-tema ">Últimas Aulas</span>
                        </a>
                    </div>
                </aside>
            </div>
        </>
    );
}
