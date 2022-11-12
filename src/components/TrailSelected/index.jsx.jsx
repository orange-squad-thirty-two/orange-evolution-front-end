import JsCookie from 'js-cookie';
import JWT from 'jwt-decode';
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import iconProgress from '../../assets/icons/icon-progress.svg';
import { useTrails } from '../../context/TrailsProvider';
import { api, createSelectTrails } from "../../services/api";
import { calculateProgress, SplitArrayModules } from "../../utility/functions";
import ClassModules from "../CardModulesClasses";
import './style.css';

function TrailSelected() {
    const token = JsCookie.get('token');
    const { id } = useParams()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const barProgress = useRef(null);
    const { setClassesAll } = useTrails()
    const [trail, setTrail] = useState(false);
    const [userData, setUserData] = useState(false);

    const [classes, setClasses] = useState([]);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        const user = JWT(token);
        setUserData(user.payload);
    }, [setUserData, token]);

    async function handleSignUpTrail() {
        try {
            await createSelectTrails([Number(id)]);
            setTrail(true)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        async function getAllTrails() {
            const token = JsCookie.get('token');
            try {
                const trails = await api.get('/trails', { headers: { Authorization: token, } });
                const trailChoose = await api.get('/trails/choose', { headers: { Authorization: token, } });
                const classesTrail = await api.get(`/classes/${id}`, { headers: { Authorization: token, } });

                const nameTrail = trails.data.find(trail => trail.id === Number(id));
                setName(nameTrail.nome);
                setSubTitle(nameTrail.subTitulo);
                setDescription(nameTrail.descricao);
                if (classesTrail.data.length) {
                    setClasses(classesTrail.data);
                    const array = SplitArrayModules(classesTrail.data, 5);
                    setModules(array);
                    setClassesAll(array)
                }
                const trailsSelected = trailChoose.data.find(choose => choose.curso_id === Number(id));
                if (trailsSelected) {
                    setTrail(true)
                    handleProgress(classesTrail.data)
                } else {
                    setTrail(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getAllTrails(id)

        function handleProgress(data) {
            if (!barProgress.current) return
            if (data && barProgress.current !== null) {
                barProgress.current.style.width = `${calculateProgress(data)
                    ? calculateProgress(data)
                    : "0"}%`
            }
        }
    }, [id, setClassesAll])

    return (
        <div className="relative">
            {trail ?
                <div className="div-btn-trails">
                    <button className="btn-trails trail-choose">Inscrito</button>
                </div>
                :
                <div className="div-btn-trails" onClick={() => handleSignUpTrail()}>
                    <button className="btn-trails trail-no-choose">Inscrever</button>
                </div>
            }
            <h1 className="title-trial">{name}</h1>
            <h4 className="sub-title-trial">{subTitle
                ? subTitle
                : `Se você chegou até aqui, é porque quer aprender mais sobre tecnologia, especialmente sobre ${name}`

            }</h4>
            <p className="description-trial">
                {description
                    ? description
                    :
                    ` O Orange Evolution consiste em trilhas totalmente gratuitas para que você possa iniciar a sua carreira na tecnologia. Você terá acesso a vídeos, lives, artigos, apostilas e até cursos gratuitos, além desses conteúdos serem da Orange Juice, de parceiros e empresas que confiamos. 
    
                    Essa trilha foi montada pensando em quem está começando na área, ou passando por uma migração de carreira e ainda não sabe exatamente o que é esse mundo. Então, aperta o cinto e vem com a gente nessa jornada!`
                }</p>


            {trail &&

                <div className="div-progress">
                    <p>{userData.nome}, acompanhe seu progresso na trilha</p>
                    <div className="progress-bar-100">
                        <div className="progress-bar" ref={barProgress}>
                        </div>
                        <img className="icon-progress" src={iconProgress} alt="Icone de uma bandeira" />
                    </div>
                </div>
            }
            {classes.length ?
                modules.map((classes, index) => {
                    return (
                        <ClassModules key={index} index={index + 1} classes={classes} name={name} id={id} />
                    )
                })
                : ""
            }
        </div>
    )
}

export default TrailSelected;