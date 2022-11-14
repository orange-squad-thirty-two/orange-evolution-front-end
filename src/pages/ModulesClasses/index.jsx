import JsCookie from 'js-cookie';
import JWT from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import iconCheck from '../../assets/icons/icon-check.svg';
import iconDocs from '../../assets/icons/icon-docs.svg';
import iconVideo from '../../assets/icons/icon-video.svg';
import Header from '../../components/Header';
import ModalClasse from '../../components/ModalClasse';
import { useGlobalContext } from '../../context/GlobalProvider';
import trails from '../../database/trails';
import { api } from '../../services/api';
import { SplitArrayModules } from '../../utility/functions';
import iconCloseMenu from '../../assets/icons/icon-close-card.svg';
import './style.css';
import AsideMobile from '../../components/AsideMobile';

function ModulesClasses() {
    const { id, modulesClasses, classeName } = useParams();
    const { dataTrails } = useGlobalContext();
    const [trailsAll, setTrailAll] = useState(trails);
    const [modulesArray, setModulesArray] = useState([]);
    const [classeSelected, setClasseSelected] = useState({});
    const [qtdModules, setQtdModules] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (dataTrails.data) {
            setTrailAll(dataTrails.data);
        }
        window.scrollTo(0, 0);
    }, [dataTrails]);

    useEffect(() => {
        async function handleGetClasses() {
            const token = JsCookie.get('token');
            try {
                const response = await api.get(`/classes/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log('rende');
                if (response.data.length) {
                    const array = SplitArrayModules(response.data, 5);
                    const modulesSelected = array.slice(modulesClasses - 1, modulesClasses);
                    setQtdModules(array.length);
                    setModulesArray(modulesSelected[0]);
                    setClasseSelected({ ...modulesSelected[0][0], index: 0 });
                }
            } catch (error) {
                console.log(error);
            }
        }
        handleGetClasses();
    }, [id, modulesClasses]);

    async function handleStatusClasse() {
        const token = JsCookie.get('token');
        const { payload } = JWT(token);
        const data = {
            status: 'Concluido',
            curso_id: classeSelected.curso_id,
            aula_id: classeSelected.id,
        };
        try {
            await api.post(`/status/${payload.sub}`, data, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setClasseSelected({ ...classeSelected, status: 'Concluido' });
            const localModulesArray = [...modulesArray];
            const findClasse = localModulesArray.find(
                (classe) => classe.id === classeSelected.id,
            );
            findClasse.status = 'Concluido';
            setModulesArray(localModulesArray);
        } catch (error) { }
    }

    function handleNextClasse() {
        const localModulesArray = [...modulesArray];
        const findClasseIndex = localModulesArray.findIndex(
            (classe) => classe.id === classeSelected.id,
        );
        console.log(classeSelected);

        if (findClasseIndex > 3) {
        } else {
            setClasseSelected({
                ...localModulesArray[findClasseIndex + 1],
                index: findClasseIndex + 1,
            });
        }
    }
    function handleAsideClasse(data) {
        setClasseSelected(data)
        setShowModal(false)
    }
    return (
        <>
            <Header trails={trailsAll} showMenu={showMenu} setShowMenu={setShowMenu} />
            <AsideMobile trails={trailsAll} showMenu={showMenu} setShowMenu={setShowMenu} />
            <section className="container-trails-classes flex">
                <aside className="flex-col aside-modules-classes">
                    <h3>informações</h3>
                    <div className="aside-modules-classes-div-button">
                        <button className="aside-modules-classes-button ">Material do Curso</button>
                    </div>

                    {modulesArray.map((classe, index) => {
                        return (
                            <div key={classe.id}>
                                <button
                                    onClick={() => setClasseSelected({ ...classe, index })}
                                    className="btn-classes-modules"
                                >
                                    <img
                                        src={
                                            classe.tipo.toLowerCase() === 'vídeo' ||
                                                classe.tipo.toLowerCase() === 'live'
                                                ? iconVideo
                                                : iconDocs
                                        }
                                        alt={`
                                    Clique aqui para assistir a aula ${classe.titulo}`}
                                    />
                                    Aula {index + 1}
                                    {classe.status.toLowerCase() === 'concluido' && (
                                        <img src={iconCheck} alt="icone de checkout da aula" />
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </aside>
                <aside className="flex-col aside-modules-classes-mobile">
                    <h3 className='title-trail-mobile'>Trilha de {classeName}</h3>
                    <div className="aside-modules-classes-mobile-div">
                        <span
                            className="aside-modules-classes-mobile-span"
                            onClick={() => setShowModal(true)}
                        >Material do Curso
                        </span>
                    </div>
                    {showModal && <div className='aside-modules-classes-mobile-classes'>
                        <img
                            src={iconCloseMenu}
                            alt="Clique aqui para fechar o menu de aulas"
                            className="icon-close-modal-menu"
                            onClick={() => setShowModal(false)}
                        />
                        {modulesArray.map((classe, index) => {
                            return (
                                <div key={classe.id}>
                                    <button
                                        onClick={() => handleAsideClasse({ ...classe, index })}
                                        className="btn-classes-modules"
                                    >
                                        <img
                                            src={
                                                classe.tipo.toLowerCase() === 'vídeo' ||
                                                    classe.tipo.toLowerCase() === 'live'
                                                    ? iconVideo
                                                    : iconDocs
                                            }
                                            alt={`
                                    Clique aqui para assistir a aula ${classe.titulo}`}
                                        />
                                        Aula {index + 1}
                                        {classe.status.toLowerCase() === 'concluido' && (
                                            <img src={iconCheck} alt="icone de checkout da aula" />
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    }
                </aside>
                <div className="">
                    <ModalClasse
                        modulesClasses={modulesClasses}
                        handleStatusClasse={handleStatusClasse}
                        classeSelected={classeSelected}
                        handleNextClasse={handleNextClasse}
                        modulesArray={modulesArray}
                        qtdModules={qtdModules}
                    />
                </div>
            </section>
        </>
    );
}

export default ModulesClasses;
