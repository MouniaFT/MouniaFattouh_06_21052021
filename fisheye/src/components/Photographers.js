import {useState, useEffect} from 'react';
import axios from 'axios';
import Cardphotographe from "../components/Cardphotographe";


const Photographers = () => {
  const[dataPhotographers, setDataPhotographers] = useState([]);
    
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
          {
            
            dataPhotographers.map((photographe) => (
              <Cardphotographe photographe={photographe} key={photographe.id}/>

            ))
          }
        </ul>
      </div> 
    </main>
  ) 
}

export default Photographers;