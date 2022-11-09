import Cards from '../Cards';
import uxUiImage from '../../assets/images/ux-ui-image.svg';
import FullStack from '../../assets/images/fullstack-image.svg';
import QAImage from '../../assets/images/qa-image.svg';
import Close from '../../assets/icons/close.svg';
import { useHomeContext } from '../../context/HomeProvider';

export default function SideBarTrail() {
  const { showSlide, setShowSlide } = useHomeContext();

  return (
    <>
      <div
        className={`hidden md:flex flex-col h-5/6 
      w-[973px] bg-[#ffffff] shadow-[8px_8px_0px_0px_rgb(255,50,0)] md:justify-end border rounded-[30px] 
       md:p-10 md:pl-10 md:pr-20 text-white fixed  md:h-[430px] z-40 -left-[950px] md:-left-[900px] 
       ease-in-out duration-300 top-10 md:top-1/4 
      ${showSlide ? 'translate-x-0 ' : 'translate-x-[650px] sm:translate-x-[870px]'} `}
        onClick={() => setShowSlide(!showSlide)}
      >
        <h2 className="z-50 text-center m-2 sm:m-4 text-[22px] sm:text-[35px] text-[#353131]">
          Escolha sua trilha
        </h2>
        <div className="flex flex-col md:w-[800px] w-[973px] md:flex-row items-center justify-center">
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
      </div>
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
        rounded-r-[25px] rounded-bl-[25px]  ${
          showSlide ? 'translate-x-0 ' : 'translate-x-[233px]'
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
          <Menu />
        </aside>
      </div>
    </>
  );
}

function Menu() {
  return (
    <ul className="flex flex-col">
      <li className="bg-[#ff7823] w-full h-8 mb-2 text-center p-1">Full Stack</li>
      <li className="bg-[#ff7823] w-full h-8 mb-2 text-center p-1">UX/UI Designer</li>
      <li className="bg-[#ff7823] w-full h-8 text-center p-1">QA (Qality Assurance)</li>
    </ul>
  );
}
