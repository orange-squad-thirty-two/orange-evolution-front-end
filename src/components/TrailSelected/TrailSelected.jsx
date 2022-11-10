import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css';

function TrailSelected({ trails }) {
    const { id } = useParams()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        function pathName() {
            const nameTrail = trails.find(trail => trail.id === Number(id))
            setName(nameTrail.nome)
            setDescription(nameTrail.descricao)
        }
        pathName()
    })
    return (
        <div>
            <h1 className="title-trial">{name}</h1>
            <h4 className="sub-title-trial">Se você chegou até aqui, é porque quer aprender mais sobre tecnologia, especialmente sobre {name}</h4>
            <p className="description-trial">{description}</p>
        </div>
    )
}

export default TrailSelected