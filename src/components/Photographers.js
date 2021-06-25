import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Cardphotographe from "../components/Cardphotographe";
import { FilterContext } from '../contexts/filterContext';



const Photographers = () => {
  const[dataPhotographers, setDataPhotographers] = useState([]);
  const {
    filterList, 
  } = useContext(FilterContext)

  // Récupérer la data
  useEffect(() => {
      axios
      .get('https://raw.githubusercontent.com/MouniaFT/MouniaFattouh_06_21052021/main/fisheye/public/json/FishEyeData.json')
      .then((res) => setDataPhotographers(res.data.photographers));

  }, []);
  
  return(
      <main id="maincontent" className="photographers">
      <div className="container">
        <h1 className="photographers_title">Nos photographes</h1>
        <ul className="photographers_list">
          {dataPhotographers
                  .filter((photographe) => {
                      if (filterList.length <= 0) {
                        return true
                      }
                      if (photographe.tags.some(tag=> filterList.includes(tag))) {
                        return true
                      }
                      return false
                  })
                  .map((photographe) => (
                    <Cardphotographe photographe={photographe} key={photographe.id}/>
                  ))
          }
        </ul>
      </div> 
    </main>
  ) 
}

export default Photographers;