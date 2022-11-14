import { useState } from 'react';
import JsCookie from 'js-cookie';
import HeaderAdmin from '../../components/HeaderAdmin';
import Modal from '../../components/Modal';
import TableAdmin from '../../components/TableAdmin';
import { useAdmin } from '../../context/AdminProvider';
import { useGlobalContext } from '../../context/GlobalProvider';
import { api } from '../../services/api';

const token = JsCookie.get('token');

export default function AdminPage() {
  const { dataTrails } = useGlobalContext();
  const [isActiveGer, setIsActiveGer] = useState(true);
  const [isActiveAdm, setIsActiveAdm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { setDataClesses } = useAdmin();

  const handleClick = (info) => {
    if (info === 'add') {
      setIsActiveGer(false);
      setIsActiveAdm(true);
      setShowModal(true);
    } else {
      setIsActiveAdm(false);
      setIsActiveGer(true);
    }
  };

  const handleSelectTrail = async (id) => {
    const TOKEN = `Bearer ${token}`;
    try {
      const response = await api.get(`/classes/${id}`, {
        headers: {
          Authorization: TOKEN,
        },
      });
      setDataClesses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Modal isShow={showModal} setShowModal={setShowModal} dataTrails={dataTrails} />
      <HeaderAdmin dataTrails={dataTrails} />
      <div className="md:flex w-full h-auto min-h-screen md:border-t md:border-texto">
        <div className="hidden md:flex flex-col border-r border-texto w-[280px] p-2">
          <div className="w-full flex justify-center mt-[25px]">
            <div
              className="w-[200px] h-[25px] border border-texto 
                rounded-[30px] text-[16px] shadow-[-2px_02px_0px_0px_rgb(255,50,0)] text-center"
            >
              Área do Administrador
            </div>
          </div>
          <div className="flex flex-col justify-between h-[300px] mt-4">
            <h3 className="text-[35px] text-texto text-center">Trilhas</h3>
            {!dataTrails.data ? (
              <p>carregando...</p>
            ) : (
              dataTrails.data.map((trail) => (
                <button
                  type="button"
                  onClick={() => handleSelectTrail(trail.id)}
                  key={trail.id}
                >
                  {trail.nome}
                </button>
              ))
            )}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row md:py-10">
            <div className="flex w-full md:hidden justify-center mt-[16px]">
              <div
                className="w-[153px] h-[23px] border border-texto 
                rounded-[30px] text-[12px] shadow-[-2px_02px_0px_0px_rgb(255,50,0)] text-center"
              >
                Área do Administrador
              </div>
            </div>
            <div className="w-full flex justify-center md:justify-start py-3">
              <div className="w-[50%] md:w-[40%] flex md:justify-center border-b border-r border-texto p-1">
                <button
                  className={`text-[12px] text-texto ${
                    isActiveGer ? 'border-b border-tema' : ''
                  }`}
                  onClick={() => handleClick('ger')}
                >
                  Gerenciamento das aulas
                </button>
              </div>
              <div className="w-[30%] md:w-[30%] flex justify-center border-b border-text p-1">
                <button
                  className={`text-[12px] text-texto ${
                    isActiveAdm ? 'border-b border-tema' : ''
                  }`}
                  onClick={() => handleClick('add')}
                >
                  Adicionar aula
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 md:w-full">
            <TableAdmin />
          </div>
        </div>
      </div>
    </div>
  );
}
