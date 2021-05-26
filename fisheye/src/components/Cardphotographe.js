import Navigation from "../components/Navigation";
const Cardphotographe = (props) => {
    const {photographe} = props;
    
    return(
        <li className="card-photographe">
            <a href="#" className="card-photographe-header">
                <img src={`../images/Photographers/${photographe.portrait}`} alt=""/>
                <h2>{photographe.name}</h2>
            </a>
            <div className="card-photographe-body">
                <p className="location">{photographe.city}, {photographe.country}</p>
                <p className="tagline">{photographe.tagline}</p>
                <p className="price">{photographe.price}€/jour</p>
                <ul className="list-tags"> 
                    {
                        photographe.tags.map((tags) => (
                            <li className="tag-item"><button className="tag-btn">#{tags}</button></li>
                        ))
                    }
                </ul>
            </div>
            
        </li>
    )
    
}

export default Cardphotographe;