import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import buttonPrev from '../../assets/icons/icon-prev.svg';
import imageLogo from '../../assets/icons/icon-logo.svg';
import "./style.css";

function Header({ trails }) {
    const { id } = useParams()
    const [name, setName] = useState("");
    useEffect(() => {
        function pathName() {
            const nameTrail = trails.find(trail => trail.id === Number(id))
            setName(nameTrail.nome)
        }
        pathName()
    })
    return (
        <header className="h-44 relative mt-10 ml-28 flex justify-between">
            <div className="path-nav-header">
                <span>Home &gt; </span> <span>Trail 	&gt;</span>  <span>{name}</span>

            </div>
            <Link className="absolute bottom-4" to="/home">
                <img src={buttonPrev} alt="Clique para voltar" />
            </Link>

            <img className="w-56 absolute top-2 right-80" src={imageLogo} alt="Imagem da logo escrito Orange Evolution" />
        </header>
    )
}

export default Header;