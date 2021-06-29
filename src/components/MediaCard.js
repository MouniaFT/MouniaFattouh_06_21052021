import { useContext, useState } from "react";
import { useParams } from "react-router";
import { CalculationContext } from "../contexts/calculationContext";

const images = require.context('../images', true);

const MediaCard = ({mediaIndex, media, setMediaDisplayed, photographers}) => {
    const [like, setLike] = useState(media.likes);
    const {id} = useParams();
    const {
        maValeur, 
        setMaValeur
      } = useContext(CalculationContext)
    
    
    // Incrementer au click sur l'icone coeur
    const incrementLike = () => {
        if (like === media.likes) {
            setLike(like + 1);
            setMaValeur(maValeur + 1);
        }
    }

    return (
        <li className="media">
                {photographers
                    .filter((photographe) => photographe.id === parseInt(id) )
                    .map((photographe) => {
                        return media.image ?
                        <button className="media-image" onClick={() => setMediaDisplayed({id:media.id , index:mediaIndex})}>
                            <img src={images(`./${photographe.name.replace(/\s+/g, '')}/${media.image}`).default} alt={media.description + ", closeup view"}/>
                        </button>
                        :
                        <button className="media-image" onClick={() => setMediaDisplayed({id:media.id , index:mediaIndex})}>
                            <img src={images(`./${photographe.name.replace(/\s+/g, '')}/video-miniature.jpeg`).default} alt="imag-miniature-delavideo, closeup view"/>
                        </button>
                        }
                    )
                }
            <div className="media-body">
                <div className="title">{media.title}</div>
                <span className="number">{like}</span>
                <button className="likes" onClick={incrementLike}>
                    <img src={images("./likes.svg").default} alt="likes"/>
                </button>
            </div>
        </li> 
    )
}


export default MediaCard;