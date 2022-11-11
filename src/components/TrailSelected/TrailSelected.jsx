import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JWT from 'jwt-decode';
import JsCookie from 'js-cookie';
import iconProgress from '../../assets/icons/icon-progress.svg';
import { useRequest } from "../../hooks/useRequest";
import './style.css';
import { SplitArrayModules } from "../../utility/functions";
import ClassModules from "../ClassModules/ClassModules";


function TrailSelected({ trails }) {
    const { id } = useParams()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [trail, setTrail] = useState(false);
    const [classes, setClasses] = useState([]);
    const [modules, setModules] = useState([]);
    const [userData, setUserData] = useState(false);
    const trailChoose = useRequest("/trails/choose");
    const classesTrails = useRequest(`/classes/${id}`);

    useEffect(() => {
        function pathName() {
            const nameTrail = trails.find(trail => trail.id === Number(id))
            setName(nameTrail.nome)
            setSubTitle(nameTrail.subTitulo)
            setDescription(nameTrail.descricao)
            if (trailChoose.data) {
                const trails = trailChoose.data.find(choose => choose.curso_id === Number(id))
                trails ? setTrail(true) : setTrail(false)
            }
        }
        if (classesTrails.data) {
            setClasses(classesTrails.data)
        }
        pathName()

    }, [trailChoose, id, trails, setTrail, classesTrails, setClasses]);
    useEffect(() => {
        if (classes.length) {
            const array = SplitArrayModules(classes, 5)
            console.log(array)
            setModules(array)
        }
    }, [classes, setModules])
    useEffect(() => {
        const token = JsCookie.get('token');
        const user = JWT(token);
        setUserData(user.payload.nome);
    }, [setUserData]);


    return (
        <div className="relative">
            {trail ?
                <div className="div-btn-trails">
                    <button className="btn-trails trail-choose">Inscrito</button>
                </div>
                :
                <div className="div-btn-trails">
                    <button className="btn-trails trail-no-choose">Inscrever</button>
                </div>
            }
            <h1 className="title-trial">{name}</h1>
            <h4 className="sub-title-trial">{subTitle}</h4>
            <p className="description-trial">{description}</p>


            {trail &&
                <div className="div-progress">
                    <p>{userData}, acompanhe seu progresso na trilha</p>

                    <div className="progress-bar-100">
                        <div className="progress-bar">
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

export default TrailSelected