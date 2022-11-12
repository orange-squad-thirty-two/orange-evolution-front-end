import JsCookie from 'js-cookie';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useGlobalContext } from "../../context/GlobalProvider";
import trails from "../../database/trails";
import { api } from "../../services/api";
import { SplitArrayModules } from "../../utility/functions";
import iconDocs from '../../assets/icons/icon-docs.svg';
import iconVideo from '../../assets/icons/icon-video.svg';
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
                        console.log(classe.tipo.toLowerCase())
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
                                </button>
                            </div>
                        )
                    })}
                </aside>
                <div className="">
                    <h1>{classeSelected.titulo}</h1>
                </div>
            </section>
        </>

    )
}

export default ModulesClasses;