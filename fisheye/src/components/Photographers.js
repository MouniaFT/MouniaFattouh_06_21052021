import {useState, useEffect} from 'react';
import axios from 'axios';
import Cardphotographe from "../components/Cardphotographe"

const Photographers = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('./json/FishEyeData.json')
      .then((res) => setData(res.data.photographers));
  
  }, []);
  return(
    <main className="photographers">
      <div className="container">
        <h1 className="photographers_title">Nos photographes</h1>
        <ul className="photographers_list">
          {
            data.map((photographe) => (
              <Cardphotographe photographe={photographe} key={photographe.id}/>
            ))
          }
        </ul>
      </div>
      
    </main>
  ) 
}

export default Photographers;