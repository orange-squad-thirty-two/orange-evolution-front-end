import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import iconCloseMenu from '../../assets/icons/icon-close-card.svg';
import './style.css';

function Aside({ trails, showMenu, setShowMenu }) {
    const history = useHistory();
    function handleActivePath(path) {
        if (window.location.pathname === path) {
            return true;
        }
        return false;
    }
    useEffect(() => {
        document.querySelector("body").style.overflow = showMenu ? 'hidden' : 'initial'
    }, [showMenu]);

    function handleNavigate() {
        history.replace("/home")
        setShowMenu(false)
    }
    return (
        <aside className={!showMenu ? "aside" : "aside-mobile"}>
            {showMenu &&
                <img
                    className="icon-close-modal-menu"
                    onClick={() => setShowMenu(false)}
                    src={iconCloseMenu} alt="Clique para fechar o menu de navegação" />

            }

            {!showMenu ?
                <div className='div-nav-desktop w-28 pl-4'>
                    <button className="button-trails">
                        Trilhas
                    </button>
                    {trails.map(trail => {
                        return (
                            <NavLink
                                key={trail.id}
                                to={`/trails/${trail.id}`}
                            >
                                <button
                                    className={
                                        handleActivePath(`/trails/${trail.id}`)
                                            ? "pl-3 is-active"
                                            : "pl-3 inactive"
                                    }
                                >
                                    {trail.nome.split(" ")[0]}
                                </button>
                            </NavLink>
                        )
                    })}
                </div>
                :
                <div className='div-nav-desktop w-28 pl-4'>
                    <button className="button-trails-mobile"
                        onClick={() => handleNavigate()}
                    >
                        Home

                    </button>
                    {trails.map(trail => {
                        return (
                            <NavLink
                                key={trail.id}
                                to={`/trails/${trail.id}`}
                            >
                                <button
                                    onClick={() => setShowMenu(false)}
                                    className={
                                        handleActivePath(`/trails/${trail.id}`)
                                            ? "pl-3 is-active-mobile"
                                            : "pl-3 inactive-mobile"
                                    }
                                >
                                    {trail.nome.split(" ")[0]}
                                </button>
                            </NavLink>
                        )
                    })}
                </div>
            }
        </aside>
    )
}

export default Aside;