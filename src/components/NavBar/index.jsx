import JSCookie from 'js-cookie';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const history = useHistory();

  const handleExitApp = () => {
    JSCookie.remove('token');
    history.push('/');
  };

  return (
    <header className="hidden md:flex">
      <dir className="w-full flex justify-evenly items-center mt-10 p-1 md:justify-center md:items-center">
        <button
          onClick={() => handleExitApp()}
          className="hidden md:flex absolute right-36"
        >
          Sair
        </button>
      </dir>
    </header>
  );
}
