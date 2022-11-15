import JSCookie from 'js-cookie';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const history = useHistory();

  const handleExitApp = () => {
    JSCookie.remove('token');
    history.push('/');
  };

  return (
    <nav className="md:hidden flex h-12 w-full px-3 justify-between items-center">
      <div></div>
      <button onClick={handleExitApp}>Sair</button>
    </nav>
  );
}
