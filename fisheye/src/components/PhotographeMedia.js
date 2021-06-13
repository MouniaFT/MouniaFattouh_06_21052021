import { useState } from "react";
import MediaCard from "./MediaCard";
import LightBox from "./Lightbox";


const PhotographeMedia = (props) => {
      const [isMenuOpen, setIsMenuOpen] = useState(true);
      const [MediaDisplayed, setMediaDisplayed] = useState(undefined);
      
      const type = {
        likes: "Popularité",
        date: "Date",
        title: "Titre"
      }
      const [sortedProperty, setSortedProperty] = useState('likes');
        // Créer une copie de la data
        let sortedMedias = [...props.media];

          // Trier les medias 
          if (sortedProperty !== null) {
            // Trier les medias par popularité
            if (sortedProperty == 'likes') {
              sortedMedias.sort((a,b) => b.likes - a.likes)
            }
            // Trier les medias par titre 
            if (sortedProperty == 'title') {
              sortedMedias.sort((a, b) => {
                if (a[sortedProperty] < b[sortedProperty]) {
                  return -1;
                }
                if (a[sortedProperty] > b[sortedProperty]) {
                  return 1;
                }
                return 0;
              });
            }
            // Trier les medias par date
            if (sortedProperty == 'date') { 
              sortedMedias.sort((a, b) => {
                if (new Date(a[sortedProperty]) < new Date(b[sortedProperty])) {
                  return -1;
                }
                if (new Date(a[sortedProperty]) > new Date(b[sortedProperty])) {
                  return 1;
                }
                return 0;
              });
            }
          }

    const mediasPhotographe = sortedMedias.filter((media) => media.photographerId === parseInt(props.id))
    return (
      <div>
        <div className="media_filtre" >
          <div className="media_filtre_label">Trier Par</div>
          <div className="media_filtre_menu">
            {
              // Ouvrir ou fermer la liste du menu
              isMenuOpen ? 
              <button className="media_filtre_btn" onClick={() => setIsMenuOpen(false)}>{type[sortedProperty]} </button>
              :
              <ul className="media_filtre_list" >
                <li><button onClick={() => {
                  setSortedProperty('likes');
                  setIsMenuOpen(true);
                }} value="popularite">Popularité</button></li>
                <li><button onClick={() => {
                  setSortedProperty('date');
                  setIsMenuOpen(true);
                }} value="date">Date</button></li>
                <li><button onClick={() => {
                  setSortedProperty('title');
                  setIsMenuOpen(true);
                }} value="titre">Titre</button></li>
              </ul>
            }
          </div>
        </div>
        <ul className="photographers_media_list">
          {sortedMedias
            .filter((media) => media.photographerId === parseInt(props.id))
            .map((media, index) => (
              <MediaCard mediaIndex={index} key={media.id} media={media} photographers={props.photographers} id={props.id} setMediaDisplayed={setMediaDisplayed} />
            ))
          }
        </ul>
          {
            MediaDisplayed &&
            <div className="lightbox">
                <ul className="slider-container">
                  <LightBox 
                    media={mediasPhotographe
                        .find((media) => media.id === MediaDisplayed.id)
                    } 
                    photographers={props.photographers} 
                    id={props.id} 
                    MediaDisplayed={MediaDisplayed.id} 
                    setMediaDisplayed={setMediaDisplayed}
                    nextSlide={() => setMediaDisplayed({
                        id: MediaDisplayed.index < mediasPhotographe.length - 1 ? 
                            mediasPhotographe[MediaDisplayed.index + 1].id 
                            : 
                            mediasPhotographe[0].id,
                        index: MediaDisplayed.index < mediasPhotographe.length - 1 ? 
                          MediaDisplayed.index + 1
                          : 
                          0
                    })}
                    prevSlide={() => setMediaDisplayed({
                      id: MediaDisplayed.index > 0 ?
                          mediasPhotographe[MediaDisplayed.index - 1].id
                          :
                          mediasPhotographe[mediasPhotographe.length -1].id, 
                      index: MediaDisplayed.index > 0 ?
                          MediaDisplayed.index - 1
                          :
                          mediasPhotographe.length -1
                        })}
                  /> 
                </ul>
          </div>
         }
        

      </div>
      
    );
}
export default PhotographeMedia;