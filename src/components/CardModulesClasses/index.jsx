import './style.css';
import iconNext from '../../assets/icons/icon-next.svg';
import iconCheck from '../../assets/icons/icon-check.svg';
import { Link } from 'react-router-dom';
import { useTrails } from '../../context/TrailsProvider';
import { useEffect } from 'react';

function CardModulesClasses({ classes, index, name, id }) {
  const { setModulesClasses } = useTrails();
  console.log(classes);
  useEffect(() => {
    setModulesClasses(classes);
  }, [classes, setModulesClasses]);
  const nameTrail = name.split('');
  const newNameTrail = nameTrail.map((caracter) => {
    if (caracter === ' ') {
      return '-';
    } else if (caracter === '/') {
      return '-';
    } else {
      return caracter;
    }
  });

  return (
    <div className="relative div-modules-container ">
      <div className="div-modules-flex">
        <h1 className="title-modules">Módulo {index}</h1>
        <Link
          to={`/trail/${id}/${newNameTrail.reduce(
            (acum, value) => acum + value,
          )}/${index}`}
        >
          <img
            src={iconNext}
            alt={`Clique para assistir as aulas do Módulo ${1} do curso`}
          />
        </Link>
      </div>
      <div className="div-modules">
        {classes.length > 0 ? (
          classes.map((classe, index) => {
            return (
              <div className="div-classe-modules" key={index}>
                <p className="div-classe-modules-span">
                  Aula {index + 1}: {classe.titulo}
                </p>

                {classe.status.toLowerCase() === 'concluido' && (
                  <img
                    className="icon-check-classe-modules"
                    src={iconCheck}
                    alt="icone de checkout da aula"
                  />
                )}
              </div>
            );
          })
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}

export default CardModulesClasses;
