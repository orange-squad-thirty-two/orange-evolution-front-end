import { useEffect, useState } from "react";
import "./style.css";
import JsCookie from 'js-cookie';
import JWT from 'jwt-decode';
import iconClose from '../../assets/icons/icon-close-card.svg';
import iconCheck from '../../assets/icons/icon-check-card.svg';

function CardRedirectToClasse({ url, setModalCard, setClickedLink }) {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const token = JsCookie.get('token');
        const { payload } = JWT(token);
        setUserName(payload.nome)
    }, [url]);

    function handleClickLink() {
        setClickedLink(true)
        setModalCard(false)
    }
    return (
        <div className="container-card">
            <div className="card-redirect-to-classe">
                <img
                    className="icon-close-card"
                    src={iconClose}
                    alt="Clique para fechar o card"
                    onClick={() => setModalCard(false)} />

                <p>{userName}! Você será encaminhado para o site de um parceiro nosso, mas fica tranquilo que a segurança está garantida.  </p>
                <a
                    className="icon-check-card"
                    href={url}
                    target="_blanck"
                    onClick={() => handleClickLink()}
                >
                    <img src={iconCheck} alt="Clique para abrir o site da aula" />
                </a>
            </div>
        </div>

    )
}

export default CardRedirectToClasse;