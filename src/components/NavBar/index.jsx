import JSCookie from 'js-cookie';
import { useHistory, useLocation } from 'react-router-dom';
import CustomButtonSmall from '../CustomButtonSmall';

export default function NavBar() {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleExitApp = () => {
    JSCookie.remove('token');
    history.push('/');
  };

  return (
    <nav className="hidden md:flex md:h-12 border-b border-[#353131] m:w-full md:justify-around md:items-center">
      <h3>{pathname.split('/')}</h3>
      <CustomButtonSmall onClick={handleExitApp}>Sair</CustomButtonSmall>
    </nav>
  );
}
