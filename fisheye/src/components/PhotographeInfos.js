import {useState} from 'react';
import Modal from 'react-modal';
import { FilterContext } from '../contexts/filterContext';
import {useContext} from "react";
import Formulaire from "./Formulaire";

Modal.setAppElement('#root')
const PhotographeInfos = (infos) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {
      filterList, 
      setFilterList,
    } = useContext(FilterContext)

    const clickBtn = (e) => {
      var value = e.target.value;
      console.log(value, e)
      // Ajouter le filtre si la valeur n'est pas presente dans la liste
      // ex: ["portrait", "travel"] 
      if (!filterList.includes(value)) {
          setFilterList([...filterList, value])
          e.target.classList.add('active')
      } else {
          setFilterList(filterList.filter((filter) => filter !== value ))
          e.target.classList.remove('active')
      }
      // Retirer le filtre si la valeur est presente dans la liste
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
                    <li className="tag-item"><button className={'tag-btn ' + (filterList.includes(tag) ? 'active' : ' ')}  onClick={clickBtn} value={tag}>#{tag}</button></li>
                ))
            }
        </ul>
      </div>
      
      <button onClick={() => setModalIsOpen(true)} className="btn btn-contact">Contactez-moi</button>
      <Modal isOpen={modalIsOpen} className="modal">
          <button onClick={() => setModalIsOpen(false)} className="modal-btn-close" title="fermer">
                  <img src="../images/close.svg" alt=""/>
            </button>
            <Formulaire name={infos.photographe.name}/>
      </Modal>
    </div>
  );
}
export default PhotographeInfos;