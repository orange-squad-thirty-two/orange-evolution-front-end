import { useState } from 'react';
import { FaEdit, FaTrashAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { useAdmin } from '../../context/AdminProvider';
import PopUpDelete from '../PopUpDelete';

export default function TableAdmin({ trailIdSelected, setShowModal, setIsEdit }) {
  const { dataClasses, setDataClassesEdit } = useAdmin();

  const handleEditClasses = (data) => {
    setShowModal(true);
    setIsEdit(true);
    setDataClassesEdit(data);
  };

  return (
    <div className="mt-5">
      <div className="md:w-full m-auto md:m-0">
        <div className="md:w-full">
          <div className="w-full lg:max-w-full m-0 overflow-x-auto">
            <table className="m-0 border border-texto table-auto w-full">
              <thead>
                <tr className="text-center">
                  <th className="h-10 text-md md:text-lg font-semibold text-white md:py-4 px-3 md:px-4 border border-texto">
                    Titulo
                  </th>
                  <th className="w-1/12 min-w-[160px] h-10 text-md md:text-lg font-semibold text-white  border border-texto">
                    Tipo
                  </th>
                  <th className="w-1/12 min-w-[160px] h-10 text-md md:text-lg font-semibold text-white border border-texto">
                    Url
                  </th>
                  <th className="w-1/12 min-w-[160px] h-10 text-md md:text-lg font-semibold text-white border border-texto">
                    Deletar
                  </th>
                  <th className="w-1/12 min-w-[160px] h-10 text-md md:text-lg font-semibold text-white border border-texto">
                    Editar
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataClasses.map((item) => (
                  <tr key={item.id}>
                    <td className="max-w-xs text-center truncate text-dark font-medium text-[13px] py-2 px-2 border border-texto">
                      {item.titulo}
                    </td>
                    <td className="max-w-sm truncate text-center text-dark font-medium text-[13px] py-2 px-2 border-b border-l border-texto">
                      {item.tipo}
                    </td>
                    <td className="text-center text-dark font-medium text-[13px] py-2 px-2 border-b border-l border-texto">
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt size={25} className="m-auto fill-texto" />
                      </a>
                    </td>
                    <td
                      className="max-w-xs truncate text-dark font-medium 
                      text-base py-2 px-2  border border-texto relative flex justify-center"
                    >
                      <ButtonDelete id={item.id} trail={trailIdSelected} />
                    </td>
                    <td className="max-w-xs text-center truncate text-dark font-medium text-base py-2 px-2 border border-texto">
                      <ButtonEdit
                        handleEditClasses={handleEditClasses}
                        idAula={item.id}
                        titulo={item.titulo}
                        trial={trailIdSelected}
                        autor={item.criador}
                        tipo={item.tipo}
                        duracao={item.duracao}
                        link={item.url}
                        idCurso={trailIdSelected}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const ButtonDelete = ({ id, trail }) => {
  const [popupDelet, setPopupDelet] = useState(false);

  return (
    <>
      {popupDelet ? (
        <PopUpDelete setPopupDelet={setPopupDelet} id={id} trial={trail} />
      ) : null}
      <button type="button" onClick={() => setPopupDelet(true)}>
        <FaTrashAlt size={25} className="m-auto fill-titulo" />
      </button>
    </>
  );
};

const ButtonEdit = ({
  handleEditClasses,
  titulo,
  trial,
  autor,
  tipo,
  duracao,
  link,
  idCurso,
  idAula,
}) => {
  return (
    <>
      <button
        onClick={() =>
          handleEditClasses({
            titulo,
            trial,
            autor,
            tipo,
            duracao,
            link,
            idAula,
            idCurso,
          })
        }
      >
        <FaEdit size={25} className="m-auto fill-tema" />
      </button>
    </>
  );
};
