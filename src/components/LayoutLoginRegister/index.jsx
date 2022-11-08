import BgImage from '../../assets/images/login-register-bg-image.svg';
export default function LayoutLoginRegister({ children, title }) {
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
          <h1 className="text-[36px] mb-[84px] text-[#353131]">{title}</h1>
          <div className="hidden lg:flex">
            <img
              className="w-[628px] h-[490px]"
              src={BgImage}
              alt="Imagem da tela de login"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[40%]">
          {children}
        </div>
      </div>
    </div>
  );
}
