import './style.css';
import iconNext from '../../assets/icons/icon-next.svg'
import { Link } from 'react-router-dom';

function ClassModules({ classes, index, name, id }) {
    return (
        <div className="relative div-modules-container ">
            <div className='div-modules-flex'>
                <h1 className='title-modules'>Módulo {index}</h1>
                <Link to={`/trail/${id}/${name.replace(" ", "-")}/${index}`}>
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