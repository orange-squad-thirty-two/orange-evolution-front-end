import Cards from '../Cards';
import Close from '../../assets/icons/close.svg';
import { useHomeContext } from '../../context/HomeProvider';
import { useGlobalContext } from '../../context/GlobalProvider';
import { useHistory } from 'react-router-dom';

export default function SideBarTrail() {
    const history = useHistory();
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
      w-[973px] bg-[#ffffff] shadow-[0px_08px_0px_0px_rgb(255,50,0)] md:justify-end border rounded-[30px] 
       md:p-10 md:pl-10 md:pr-20 text-white fixed  md:h-[430px] z-40 -left-[950px] md:-left-[900px] 
       ease-in-out duration-300 top-10 md:top-1/4 
      ${showSlide ? 'translate-x-0 ' : 'translate-x-[650px] sm:translate-x-[870px]'} `}
            >
                <div className="flex justify-evenly w-[973px] z-50">
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
                <button
                    className="absolute h-[428px] w-10 bg-titulo top-[0.5px] right-0 rounded-r-[30px]"
                    onClick={() => setShowSlide(false)}
                ></button>
            </div>

            {/* Menu mobile */}
            <div className="md:hidden">
                <button
                    onClick={() => setShowSlide(!showSlide)}
                    className="bg-hamburger w-[28px] h-[28px] bg-no-repeat bg-center 
        m-[14px] ml-5 absolute top-0 text-[35px]"
                    id="button-aside"
                >
                    ≡
                </button>

                <aside
                    className={`flex flex-col fixed top-0 w-[233px] h-screen -left-[233px] 
        peer-focus:left-0 z-40 bg-[#ffffff] ease-out delay-150 duration-300 
        rounded-r-[25px] rounded-bl-[25px]  ${showSlide ? 'translate-x-0 ' : 'translate-x-[233px]'
                        }`}
                    id="aside"
                >
                    <div className="flex justify-around items-center">
                        <h1 className="text-[#353131] font-bold text-[16px] mt-8 text-center">
                            {' '}
                            ESCOLHA SUA TRILHA{' '}
                        </h1>
                        <button
                            type="button"
                            onClick={() => setShowSlide(!showSlide)}
                            className="text-[#353131] font-bold p-3 text-[25px] mt-8 text-center"
                        >
                            <img src={Close} alt="Botaõ fechar" />
                        </button>
                    </div>
                    <ul className="flex flex-col">
                        {dataTrails.loading ? (
                            <p>Carregando...</p>
                        ) : (
                            dataTrails.data
                                .filter((trail) => trail.nome !== 'Início')
                                .map((trail) => (
                                    <button
                                        key={trail.id}
                                        className="bg-[#ff7823] w-full h-8 mb-2 text-center p-1 disabled:opacity-75"
                                        onClick={() => handleSelectTrail(trail.id)}
                                        type="button"
                                        disabled={selectTrailsData.some((t) => t.id === trail.id)}
                                    >
                                        {trail.nome}
                                    </button>
                                ))
                        )}
                        <a
                            href="#ultimas-aulas"
                            className="bg-[#ff7823] w-full h-8 mt-7 text-center p-1"
                        >
                            Últimas Aulas
                        </a>
                    </ul>
                </aside>
            </div>
        </>
    );
}
