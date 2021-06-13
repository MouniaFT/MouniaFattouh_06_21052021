import { useState } from "react";
import { useParams } from "react-router";

const MediaCard = ({mediaIndex, media, setMediaDisplayed, photographers}) => {
    const [like, setLike] = useState(media.likes);
    const {id} = useParams();
    
    
    // Incrementer au click sur l'icone coeur
    const incrementLike = () => {
        if (like === media.likes) {
            setLike(like + 1);
        }
    }
    
    return (
        <li className="media">
            {photographers
                .filter((photographe) => photographe.id === parseInt(id) )
                .map((photographe) => {
                    return media.image ?
                    <img onClick={() => setMediaDisplayed({id:media.id , index:mediaIndex})} src={`../images/${photographe.name.replace(/\s+/g, '')}/${media.image}`} alt=""/>
                    :
                    <img onClick={() => setMediaDisplayed({id:media.id , index:mediaIndex})} 
                    src="../images/video-miniature.jpeg" alt=""></img>
                    }
                )
            }
            <div className="media-body">
                <div className="title">{media.title}</div>
                <span className="number">{like}</span>
                <img onClick={incrementLike} className="likes"  src="../images/likes.svg" alt="likes"/>
            </div>
        </li> 
    )
}


export default MediaCard;