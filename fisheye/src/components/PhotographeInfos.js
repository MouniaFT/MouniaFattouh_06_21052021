import {useState} from 'react';
import Modal from 'react-modal';
import { FilterContext } from '../contexts/filterContext';
import {useContext} from "react";
import Formulaire from "./Formulaire";
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root')

const PhotographeInfos = (infos) => {
    const history = useHistory()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {
      filterList, 
      setFilterList,
    } = useContext(FilterContext)

    // filtrer les photographes par tag au click sur le tag
    const clickBtn = (e) => {
      var value = e.target.value;

      // Ajouter le filtre si la valeur n'est pas presente dans la liste
      // ex: ["portrait", "travel"] 
      if (!filterList.includes(value)) {
          setFilterList([...filterList, value])
          e.target.classList.add('active')
      // Retirer le filtre si la valeur est presente dans la liste
      } else {
          setFilterList(filterList.filter((filter) => filter !== value ))
          e.target.classList.remove('active')
      }
    };

  return (
    <div className="card-photographe">
      <img src={`../images/Photographers/${infos.photographe.portrait}`} alt=""/>
      <div className="card-photographe-body">
        <h1 className="name">{infos.photographe.name}</h1>
        <p className="location">{infos.photographe.city}, {infos.photographe.country}</p>
        <p className="tagline">{infos.photographe.tagline}</p>
        <ul className="list-tags"> 
            {
              infos.photographe.tags
              .map((tag) => (
                  <li className="tag-item" onClick={() => {history.push('/')}}>
                    <button className={'tag-btn ' + (filterList.includes(tag) ? 'active' : ' ')}  onClick={clickBtn} value={tag}>#{tag}</button>
                  </li>
              ))
            }
        </ul>
      </div>

      {/* Ouvrir la modal */}
      <button onClick={() => setModalIsOpen(true)} className="btn btn-contact">Contactez-moi</button>
      <Modal isOpen={modalIsOpen} className="modal">
          {/* Fermer la modal */}
          <button onClick={() => setModalIsOpen(false)} className="modal-btn-close" title="Close Contact">
                  <img src="../images/close.svg" alt=""/>
          </button>
          <Formulaire name={infos.photographe.name}/>
      </Modal>
    </div>
  );
}
export default PhotographeInfos;