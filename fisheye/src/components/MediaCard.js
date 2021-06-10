import { useState } from "react";
    
const MediaCard = (props) => {
    const [like, setLike] = useState(props.media.likes);
    
    // Incrementer au click sur l'icone coeur
    const incrementLike = () => {
        if (like === props.media.likes) {
            setLike(like + 1);
        }
    }

    return (
        <li className="media">
            {props.photographers
                .filter((photographe) => photographe.id === parseInt(props.id) )
                .map(photographe => {
                    return props.media.image ?
                    <img src={`../images/${photographe.name.replace(/\s+/g, '')}/${props.media.image}`} alt=""/>
                    :
                    <img src="../images/video-miniature.jpeg" alt></img>
                    }
                )
            }
            <div className="media-body">
                <div className="title">{props.media.title}</div>
                <span className="number">{like}</span>
                <img onClick={incrementLike} className="likes"  src="../images/likes.svg" alt="likes"/>
            </div>
        </li> 
    )
}


export default MediaCard;