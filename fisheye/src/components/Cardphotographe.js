import {useContext} from "react";
import { FilterContext } from "../contexts/filterContext";
import { Link } from "react-router-dom";


const Cardphotographe = (props) => {
    const {photographe} = props;
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

    return(
        <li className="card-photographe">
            <Link to={`/photographe/${photographe.id}`} className="card-photographe-header">
                <img src={`./images/Photographers/${photographe.portrait}`} alt=""/>
                <h2 className="name">{photographe.name}</h2>
            </Link>
            <div className="card-photographe-body">
                <p className="location">{photographe.city}, {photographe.country}</p>
                <p className="tagline">{photographe.tagline}</p>
                <p className="price">{photographe.price}€/jour</p>
                <ul className="list-tags"> 
                    {photographe.tags
                            .map((tag) => (
                                <li className="tag-item">
                                    <button className={'tag-btn ' + (filterList.includes(tag) ? 'active' : ' ')}  onClick={clickBtn} value={tag}>#{tag}</button>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </li>
    )
}

export default Cardphotographe;