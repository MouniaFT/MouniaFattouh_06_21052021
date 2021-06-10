import {useContext} from "react";
import { FilterContext } from "../contexts/filterContext";

const Navigation = () => {
    const {
      filterList, 
      setFilterList
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
    <nav className="header_nav" role="navigation" aria-label="photographer categories">
      <ul className="list-tags">
        <li className="tag-item">
          <button className={'tag-btn ' + (filterList.includes("portrait") ? 'active' : ' ')}  onClick={clickBtn} value="portrait">#Portrait</button>
        </li>
        <li className="tag-item">
          <button className={'tag-btn ' + (filterList.includes("art") ? 'active' : ' ')} onClick={clickBtn} value="art">#Art</button>
        </li>
        <li className="tag-item">
          <button className={'tag-btn ' + (filterList.includes("fashion") ? 'active' : ' ')} onClick={clickBtn} value="fashion">#Fashion</button>
        </li>
        <li className="tag-item">
          <button className={'tag-btn ' + (filterList.includes("architecture") ? 'active' : ' ')} onClick={clickBtn} value="architecture">#Architecture</button>
        </li>
        <li className="tag-item">
          <button className={'tag-btn ' + (filterList.includes("travel") ? 'active' : ' ')} onClick={clickBtn} value="travel">#Travel</button>
        </li>
        <li className="tag-item">
          <button className={'tag-btn ' + (filterList.includes("sport") ? 'active' : ' ')} onClick={clickBtn} value="sport">#Sport</button>
        </li>
        <li className="tag-item">
          <button className={'tag-btn ' + (filterList.includes("animals") ? 'active' : ' ')} onClick={clickBtn} value="animals">#Animals</button>
        </li>
        <li className="tag-item">
          <button className={'tag-btn ' + (filterList.includes("events") ? 'active' : ' ')} onClick={clickBtn} value="events">#Events</button>
        </li>
      </ul>
    </nav>
  );
  }
  
  export default Navigation;