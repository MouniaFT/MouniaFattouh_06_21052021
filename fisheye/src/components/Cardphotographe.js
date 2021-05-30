import {useContext} from "react";
import { FilterContext } from "../contexts/filterContext";
import { Link } from "react-router-dom";


const Cardphotographe = (props) => {
    const {photographe} = props;
    const {filterList, setFilterList} = useContext(FilterContext)


    const clickBtn = (e) => {
        var value = e.target.value;
        console.log(value, e)
        // Ajouter le filtre si la valeur n'est pas presente dans la liste
        // ex: ["portrait", "travel"] 
         if (!filterList.includes(value)) {
             setFilterList([...filterList, value])
         } else {
             setFilterList(filterList.filter((filter) => filter !== value ))
         }
        // Retirer le filtre si la valeur est presente dans la liste
    };

    console.log(filterList);
    // const {langs} = this.props;
    // const {selectedLanguages} = this.state;

    // // filter only if anything's selected else show all
    // const languages = selectedLanguages.length === 0 
    //     ? langs 
    //     : langs.filter(lang => selectedLanguages.includes(lang));
  
    
    return(
        <li className="card-photographe">
            <Link to={`/photographe/${photographe.id}`} className="card-photographe-header">
                <img src={`../images/Photographers/${photographe.portrait}`} alt=""/>
                <h2>{photographe.name}</h2>
            </Link>
            <div className="card-photographe-body">
                <p className="location">{photographe.city}, {photographe.country}</p>
                <p className="tagline">{photographe.tagline}</p>
                <p className="price">{photographe.price}€/jour</p>
                <ul className="list-tags"> 
                    {
                        photographe.tags
                        .map((tags) => (
                            <li className="tag-item"><button className="tag-btn"  onClick={clickBtn} value={tags}>#{tags}</button></li>
                        ))

                        // .filter((tag.includes) => {
                        //     return tags.includes(setValueBtn);
                        // })

                    }
                </ul>
            </div>
        </li>
        
    )
    
}

export default Cardphotographe;