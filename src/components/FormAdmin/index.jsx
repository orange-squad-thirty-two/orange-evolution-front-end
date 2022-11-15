import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminProvider';
import { createNewClasses, updateClasses } from '../../services/api';

import CustomInput from '../CustomInput';

export default function FormAdmin({ setShowModal, dataTrails, isEdit }) {
  const { dataClassesEdit, setInputValues, inputValues, setDataClesses, dataClasses } =
    useAdmin();

  const [valueCursoId, setValueCursoId] = useState(1);

  const handleInputChange = (envet) => {
    const name = envet.target.name;

    setInputValues({
      ...inputValues,
      [name]: envet.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isEdit) {
        const data = await updateClasses(
          dataClassesEdit.idCurso,
          dataClassesEdit.idAula,
          {
            titulo: inputValues.titulo,
            tipo: inputValues.tipo,
            criador: inputValues.criador,
            url: inputValues.url,
            duracao: inputValues.duracao,
          },
        );
        setShowModal(false);
        const localArray = [...dataClasses];

        const findClasses = localArray.findIndex(
          (item) => item.id === dataClassesEdit.idAula,
        );
        console.log(findClasses);
        const result = localArray.splice(findClasses, 1, data[0]);
        console.log(result);
        return setDataClesses([...localArray]);
      }
      const curso = await createNewClasses(inputValues, valueCursoId);
      console.log(curso);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(dataClasses);
  return (
    <>
      <div className="relative md:p-6 flex-auto">
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 w-full">
          <div className="mb-2">
            <label
              className="block text-texto text-sm font-bold mb-1"
              htmlFor="selectTrail"
            >
              Seleciona a trilha
            </label>
            <select
              className="shadow appearance-none border rounded-[10px] w-[271px] h-[35px] py-2 px-2 text-black"
              id="selectTrail"
              name="cursoId"
              value={valueCursoId}
              onChange={(e) => setValueCursoId(e.target.value)}
            >
              {!dataTrails.data ? (
                <p>Carregando...</p>
              ) : (
                dataTrails.data.map((trail) => (
                  <option key={trail.id} value={trail.id}>
                    {trail.nome}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-texto text-sm font-bold mb-1" htmlFor="titulo">
              Título da Aula
            </label>
            <CustomInput
              className="shadow appearance-none border rounded-[10px] w-[271px] h-[30px] py-2 px-2 text-black"
              id="titulo"
              type="text"
              name="titulo"
              value={inputValues.titulo}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-texto text-sm font-bold mb-1" htmlFor="autor">
              Autor
            </label>
            <CustomInput
              className="shadow appearance-none border rounded-[10px] w-[271px]
           h-[30px] py-2 px-2 text-black"
              id="autor"
              type="text"
              name="criador"
              value={inputValues.criador}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-texto text-sm font-bold mb-1">Tipo</label>
            <CustomInput
              className="shadow appearance-none border rounded-[10px] 
          w-[271px] h-[30px] py-2 px-2 text-black"
              id="autor"
              type="text"
              name="tipo"
              value={inputValues.tipo}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-texto text-sm font-bold mb-1">Duração</label>
            <CustomInput
              className="shadow appearance-none border rounded-[10px] w-[271px] h-[30px] py-2 px-2 text-black"
              id="autor"
              type="text"
              name="duracao"
              value={inputValues.duracao}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-texto text-sm font-bold mb-1">Link</label>
            <CustomInput
              className="shadow appearance-none border rounded-[10px] 
          w-[271px] h-[30px] py-2 px-2 text-black"
              id="autor"
              type="text"
              name="url"
              value={inputValues.url}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div
        className="flex items-center justify-end p-6 border-t 
                  border-solid border-tema rounded-b"
      >
        <button
          className="text-tema background-transparent font-bold 
                      uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Fechar
        </button>
        <button
          className="text-texto active:bg-tema font-bold uppercase 
                      text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                         focus:outline-none mr-1 mb-1"
          type="submit"
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </div>
    </>
  );
}
