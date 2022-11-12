import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import buttonPrev from '../../assets/icons/icon-prev.svg';
import CardRedirectToClasse from "../CardRedirectToClasse";
import "./style.css";

function ModalClasse({ modulesClasses, classeSelected }) {
    const { id } = useParams();
    const [clickedLink, setClickedLink] = useState(false);
    const [modalCard, setModalCard] = useState(false)
    const history = useHistory();

    useEffect(() => {
        setClickedLink(false)
    }, [classeSelected]);

    function navigate() {
        history.replace(`/trails/${id}`)
        return
    };

    return (
        <div className="relative">
            <img
                className="icon-btn-prev-classe"
                onClick={() => navigate()}
                src={buttonPrev}
                alt="Clique no icone para voltar a página" />

            <h1 className='title-modules-classes'>
                {`Módulo  ${modulesClasses}:     ${classeSelected.titulo} `}
            </h1>
            <div className="div-description-classe">
                <h3>Conteúdo produzido pela {classeSelected.criador}</h3>
                <h3>{classeSelected.duracao && "Tempo de Leitura: " + classeSelected.duracao}</h3>
                <div className="relative">
                    <h3>Status
                        {classeSelected.status === "Concluido"
                            &&
                            <div className="div-btn-classe">
                                <button className="btn-classe classe-checked">Concluído</button>
                            </div>
                        }
                    </h3>
                    {clickedLink && classeSelected.status !== "concluido" &&
                        <div className="div-btn-classe">
                            <button className="btn-classe classe-no-checked">Concluir</button>
                        </div>
                    }
                </div>
                {modalCard &&
                    <CardRedirectToClasse
                        url={classeSelected.url}
                        setClickedLink={setClickedLink}
                        setModalCard={setModalCard} />
                }
                {!modalCard &&
                    <div
                        className="link-to-classe"
                        onClick={() => setModalCard(!modalCard)}
                    >
                        <span>Acesse o conteúdo da aula aqui!</span>
                    </div>
                }
            </div>

        </div>
    )
}

export default ModalClasse;