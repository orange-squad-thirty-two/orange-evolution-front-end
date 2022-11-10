import BgImage from '../../assets/images/login-register-bg-image.svg';
export default function LayoutLoginRegister({ children, title }) {
  return (
    <div>
      <div className="flex">
        <div className="hidden lg:flex flex-col bg-login-gradient justify-center items-center w-[60%] h-screen rounded-[3px]">
          <h1 className="text-[36px] mb-[84px] text-[#353131]">{title}</h1>
          <div className="hidden lg:flex">
            <img
              className="w-[628px] h-[490px]"
              src={BgImage}
              alt="Imagem da tela de login"
            />
          </div>
        </div>
        <div className="bg-login-gradient h-screen w-full lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-[40%] lg:bg-login-not">
          {children}
        </div>
      </div>
    </div>
  );
}
