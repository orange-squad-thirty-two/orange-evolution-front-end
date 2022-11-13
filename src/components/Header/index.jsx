import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import buttonPrev from '../../assets/icons/icon-prev.svg';
import imageLogo from '../../assets/icons/icon-logo.svg';
import JsCookie from 'js-cookie';
import "./style.css";

function Header({ trails }) {
    const { id, modulesClasses } = useParams()
    const [name, setName] = useState("");

    const histoty = useHistory()
    useEffect(() => {
        function pathName() {
            const nameTrail = trails.find(trail => trail.id === Number(id))
            setName(nameTrail.nome)
        }
        pathName()
    });

    function logOutUser() {
        JsCookie.remove('token');
        histoty.replace("/login")
        return
    };

    return (
        <header className="h-44 relative mt-10 ml-28 flex justify-between">
            <div className="path-nav-header">
                <span>Home</span>
                <span>&gt;</span>
                <span>Trail</span>
                <span>&gt;</span>
                <span>{name}</span>
                <span>{modulesClasses && ">"}</span>
                <span>{modulesClasses && "Aulas"}</span>
            </div>
            {!modulesClasses &&
                <Link className="absolute bottom-4" to="/home">
                    <img src={buttonPrev} alt="Clique para voltar" />
                </Link>
            }

            <img className="w-56 absolute top-2 right-80" src={imageLogo} alt="Imagem da logo escrito Orange Evolution" />
            <div className="div-btn-trails absolute top-2 right-40">
                <button onClick={() => logOutUser()} className="btn-trails trail-no-choose">Sair</button>
            </div>
        </header>
    )
}

export default Header;