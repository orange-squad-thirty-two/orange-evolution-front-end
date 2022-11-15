import JsCookie from 'js-cookie';
import iconBalonSet from '../../assets/icons/icon-balon-set.svg';
import { useAdmin } from '../../context/AdminProvider';
import { api } from '../../services/api';
import './style.css';

function PopUpDelete({ setPopupDelet, id, trial }) {
  const { setDataClesses, dataClasses } = useAdmin();

  async function handleDelete(id) {
    const token = JsCookie.get('token');
    try {
      const response = await api.delete(`/classes/${Number(trial)}/${Number(id)}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      setDataClesses(dataClasses.filter((item) => item.id !== id));
      setPopupDelet(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="div-delete-classes">
      <img className="img-set-balon" src={iconBalonSet} alt="icone de seta" />
      <span>Apagar Aula?</span>
      <div className="btns-yes-no">
        <button className="btn-yes" onClick={() => handleDelete(id)}>
          Sim
        </button>
        <button className="btn-no" onClick={() => setPopupDelet(false)}>
          Não
        </button>
      </div>
    </div>
  );
}

export default PopUpDelete;
