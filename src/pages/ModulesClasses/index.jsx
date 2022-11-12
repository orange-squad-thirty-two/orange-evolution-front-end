import JsCookie from 'js-cookie';
import JWT from 'jwt-decode';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import iconCheck from '../../assets/icons/icon-check.svg';
import iconDocs from '../../assets/icons/icon-docs.svg';
import iconVideo from '../../assets/icons/icon-video.svg';
import Header from "../../components/Header";
import ModalClasse from '../../components/ModalClasse';
import { useGlobalContext } from "../../context/GlobalProvider";
import trails from "../../database/trails";
import { api } from "../../services/api";
import { SplitArrayModules } from "../../utility/functions";
import './style.css';

function ModulesClasses() {
    const { id, modulesClasses } = useParams()
    const { dataTrails } = useGlobalContext()
    const [trailsAll, setTrailAll] = useState(trails);
    const [modulesArray, setModulesArray] = useState([]);
    const [classeSelected, setClasseSelected] = useState({});

    useEffect(() => {
        if (dataTrails.data) {
            setTrailAll(dataTrails.data)
        }
        window.scrollTo(0, 0)
    }, [dataTrails]);

    useEffect(() => {
        async function handleGetClasses() {
            const token = JsCookie.get('token');
            try {
                const response = await api.get(`/classes/${id}`, { headers: { Authorization: token, } })
                console.log("rende")
                if (response.data.length) {
                    const array = SplitArrayModules(response.data, 5);
                    const modulesSelected = array.slice(modulesClasses - 1, modulesClasses)
                    setModulesArray(modulesSelected[0]);
                    setClasseSelected(modulesSelected[0][0])
                }
            } catch (error) {
                console.log(error)
            }
        }
        handleGetClasses()
    }, [id, modulesClasses])

    async function handleStatusClasse() {
        const token = JsCookie.get('token');
        const { payload } = JWT(token);
        const data = {
            status: "Concluido",
            curso_id: classeSelected.curso_id,
            aula_id: classeSelected.id
        }
        try {
            await api.post(`/status/${payload.sub}`, data, { headers: { Authorization: token, } })
            setClasseSelected({ ...classeSelected, status: "Concluido" });
            const localModulesArray = [...modulesArray];
            const findClasse = localModulesArray.find(classe => classe.id === classeSelected.id)
            console.log(findClasse)
            findClasse.status = "Concluido"
            setModulesArray(localModulesArray)
        } catch (error) {

        }
    }

    return (
        <>
            <Header trails={trailsAll} />
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
                                    onClick={() => setClasseSelected(classe)}
                                    className="btn-classes-modules"
                                >
                                    <img
                                        src={classe.tipo.toLowerCase() === "vídeo" || classe.tipo.toLowerCase() === "live" ? iconVideo : iconDocs} alt={`
                                    Clique aqui para assistir a aula ${classe.titulo}`} />
                                    Aula {index + 1}

                                    {classe.status.toLowerCase() === "concluido" &&
                                        <img src={iconCheck} alt="icone de checkout da aula" />
                                    }
                                </button>
                            </div>
                        )
                    })}
                </aside>
                <div className="">
                    <ModalClasse modulesClasses={modulesClasses}
                        handleStatusClasse={handleStatusClasse}
                        classeSelected={classeSelected} />
                </div>
            </section>
        </>

    )
}

export default ModulesClasses;