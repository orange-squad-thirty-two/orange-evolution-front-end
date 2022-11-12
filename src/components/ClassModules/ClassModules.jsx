import './style.css';
import iconNext from '../../assets/icons/icon-next.svg'
import { Link } from 'react-router-dom';
import { useTrails } from '../../context/TrailsProvider';
import { useEffect } from 'react';

function ClassModules({ classes, index, name, id }) {
    const { setModulesClasses } = useTrails();

    useEffect(() => {
        setModulesClasses(classes);
    }, [classes, setModulesClasses])
    const nameTrail = name.split("")
    const newNameTrail = nameTrail.map((caracter) => {
        if (caracter === " ") {
            return "-"
        } else if (caracter === "/") {
            return "-"
        } else {
            return caracter
        }
    });

    return (
        <div className="relative div-modules-container ">
            <div className='div-modules-flex'>
                <h1 className='title-modules'>Módulo {index}</h1>
                <Link to={`/trail/${id}/${newNameTrail.reduce((acum, value) => acum + value)}/${index}`}>
                    <img src={iconNext} alt={`Clique para assistir as aulas do Módulo ${1} do curso`} />
                </Link>
            </div>
            <div className='div-modules'>
                {classes.map((classe, index) => {

                    return (
                        <div key={index} className="">

                            <div className='flex-row'>
                                <span>Aula {index + 1}: {classe.titulo} </span>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ClassModules