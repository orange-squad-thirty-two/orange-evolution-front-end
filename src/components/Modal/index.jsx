import FormAdmin from '../FormAdmin';

const Modal = ({ isShow, setShowModal, dataTrails }) => {
  return (
    <>
      {isShow ? (
        <>
          <div
            className="md:w-[30%] md:h-[60%] m-auto border flex justify-center
           bg-[#ffffff] items-center overflow-x-hidden overflow-y-auto
           fixed inset-0 z-50 outline-none focus:outline-none rounded-lg"
          >
            <div className="relative w-auto my-6 mx-auto md:max-w-3xl">
              <div
                className="border-0 rounded-lg shadow-lg relative flex 
                flex-col w-full bg-white outline-none focus:outline-none"
              >
                <div
                  className="flex justify-evenly items-center md:items-end 
                  md:justify-between p-4 md:p-5 border-b 
                  border-solid border-tema rounded-t "
                >
                  <h3 className="text-3xl font-semibold">Cadastro de aula</h3>
                  <button
                    className="bg-transparent border-0 text-texto"
                    onClick={() => setShowModal(false)}
                  >
                    <span
                      className="text-texto opacity-7 md:h-6 md:w-6 text-xl 
                      block bg-gray-400 py-0 rounded-full"
                    >
                      x
                    </span>
                  </button>
                </div>
                <FormAdmin setShowModal={setShowModal} dataTrails={dataTrails} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
