import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Logo from "../components/Logo"
import PhotographeInfos from "../components/PhotographeInfos"
import PhotographeMedia from "../components/PhotographeMedia"

const Photographe = () =>{
  const {id} = useParams();
  const [isLoading, setLoading] = useState(true);
  const [dataPhotographers, setDataPhotographers] = useState([]);
    
  useEffect(() => {
      axios
      .get('https://raw.githubusercontent.com/MouniaFT/MouniaFattouh_06_21052021/main/fisheye/public/json/FishEyeData.json')
      .then((res) => {
        setDataPhotographers(res.data)
        setLoading(false);
      });

  }, []);


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <header>
        <Logo />
      </header>
      {dataPhotographers.photographers
          .filter((photographe) => photographe.id == id)
          .map((photographe) => (
              <PhotographeInfos key={photographe.id} photographe={photographe} />
          ))
      }
      <PhotographeMedia id={id} media={dataPhotographers.media} />
    </div>
  );
}

export default Photographe;