import { useState } from "react";

const PhotographeMedia = (props) => {
      const [count, setCount] = useState(0);
      //Incrementer les likes 
      const increment = () => {
          setCount(count + 1);
      }

    return (
      <div>
        
        <ul className="photographers_media_list">
        {props.media
            .filter((media) => media.photographerId === parseInt(props.id))
            .map((media) => (
                <li className="media">
                  {props.photographers
                    .filter((photographe) => photographe.id === parseInt(props.id) )
                    .map(photographe => {
                      return media.image ?
                        <img src={`../images/${photographe.name.replace(/\s+/g, '')}/${media.image}`} alt=""/>
                      :
                        <img src="../images/video-miniature.jpeg"></img>
                    })
                  }
                  <div className="media-body">
                    <div className="title">{media.title}</div>
                    <span className="number">{media.likes + count}</span>
                    <img className="likes" onClick={increment} src="../images/likes.svg" alt="likes"/>
                  </div>
                </li>
            ))
        }
      </ul>

      </div>
      
    );
}
export default PhotographeMedia;