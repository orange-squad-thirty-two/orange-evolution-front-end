import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import buttonPrev from '../../assets/icons/icon-prev.svg';
import buttonNext from '../../assets/icons/icon-next.svg';
import CardRedirectToClasse from "../CardRedirectToClasse";
import "./style.css";

function ModalClasse({ modulesClasses, classeSelected, handleStatusClasse,
    handleNextClasse, qtdModules, modulesArray }) {
    const { id, classeName } = useParams();
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

    function handleNextModules() {
        history.replace(`/trail/${id}/${classeName}/${Number(modulesClasses) + 1}`)
    }

    return (
        <div className="relative div-classe-mobile">
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
                <h3>{classeSelected.duracao && "Tempo de Aula: " + classeSelected.duracao}</h3>
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
                            <button className="btn-classe classe-no-checked"
                                onClick={() => handleStatusClasse()}
                            >Concluir</button>
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
            {classeSelected.index < modulesArray.length - 1 ?
                <button className="btn-next-classe"
                    onClick={() => handleNextClasse()}
                >
                    <span>Próxima aula</span>
                    <img src={buttonNext} alt="Clique aqui para ir para próxima aula" />
                </button>
                :
                modulesClasses < qtdModules ?
                    <button className="btn-next-classe"
                        onClick={() => handleNextModules()}
                    >
                        <span>Próximo Módulo</span>
                        <img src={buttonNext} alt="Clique aqui para ir para próximo Módulo" />
                    </button>
                    :
                    <button className="btn-next-classe"
                        onClick={() => navigate()}
                    >
                        <span>Próximo Curso</span>
                        <img src={buttonNext} alt="Clique no icone para escolher seu próximo curso" />
                    </button>
            }
        </div>
    )
}

export default ModalClasse;