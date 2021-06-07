import {useContext} from "react";
import { FilterContext } from "../contexts/filterContext";

const Navigation = () => {
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

  

  // const [isMenuOpen, setIsMenuOpen] = useState(true)
  return (
    <nav className="header_nav" role="navigation" aria-label="photographer categories">
      <ul className="list-tags">
        <li className="tag-item">
          {/* {
          isMenuOpen ? ( */}
            <button className={'tag-btn ' + (filterList.includes("portrait") ? 'active' : ' ')}  onClick={clickBtn} value="portrait">#Portrait</button>
          {/* ) : (
            <div>
              <button onClick={() => setIsMenuOpen(true)}>A</button>
              <button onClick={() => setIsMenuOpen(true)}>B</button>
            </div>
          )
          } */}
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