import JsCookie from 'js-cookie';
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import imageLogo from '../../assets/icons/icon-logo.svg';
import iconMenu from '../../assets/icons/icon-menu.svg';
import buttonPrev from '../../assets/icons/icon-prev.svg';
import "./style.css";

function Header({ trails, showMenu, setShowMenu }) {
    const { id, modulesClasses } = useParams()
    const [name, setName] = useState("");
    const history = useHistory()
    useEffect(() => {
        function pathName() {
            const nameTrail = trails.find(trail => trail.id === Number(id))
            setName(nameTrail.nome)
        }
        pathName()
    });

    function logOutUser() {
        JsCookie.remove('token');
        history.replace("/")
        return
    };

    return (
        <header className="header">

            {!showMenu &&
                <img
                    className='image-menu'
                    src={iconMenu}
                    alt="Clique para abrir o menu de navegação"
                    onClick={() => setShowMenu(true)} />
            }
            <div className="path-nav-header">
                <span className="btn-cursor" onClick={() => history.replace("/home")}> Home</span>
                <span>&gt;</span>
                <span className="btn-cursor" onClick={() => history.replace("/trails/1")}>Trilha</span>
                <span>&gt;</span>
                <span className="btn-cursor" onClick={() => history.replace(`/trails/${id}`)}>{name}</span>
                <span>{modulesClasses && ">"}</span>
                <span>{modulesClasses && "Aulas"}</span>
            </div>
            {
                !modulesClasses &&
                <Link className="absolute bottom-4" to="/home">
                    <img src={buttonPrev} alt="Clique para voltar" />
                </Link>
            }

            <img className="image-logo" src={imageLogo} alt="Imagem da logo escrito Orange Evolution" />
            <button onClick={() => logOutUser()} className="btn-log-out-header">Sair</button>
            <div className="div-btn-trails-header">
                <button onClick={() => logOutUser()} className="btn-trails trail-no-choose">Sair</button>
            </div>

        </header >
    )
}

export default Header;