import { useState } from "react";
import MediaCard from "./MediaCard";

const PhotographeMedia = (props) => {
      const [isMenuOpen, setIsMenuOpen] = useState(true);

      const type = {
        likes: "Popularité",
        date: "Date",
        title: "Titre"
      }
      const [sortedProperty, setSortedProperty] = useState('likes');
        // Créer une copie de la data
        let sortedMedias = [...props.media];
      
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

    return (
      <div>
        <div className="media_filtre" >
          <div className="media_filtre_label">Trier Par</div>
          <div className="media_filtre_menu">
            {
              // Ouvrir ou fermer la list du menu
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
            .map((media) => (
              <MediaCard key={media.id} media={media} photographers={props.photographers} id={props.id} />
            ))
          }
        </ul>

      </div>
      
    );
}
export default PhotographeMedia;