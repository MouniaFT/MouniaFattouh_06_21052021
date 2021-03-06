import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import PhotographeInfos from "../components/PhotographeInfos";
import PhotographeMedia from "../components/PhotographeMedia";


const Photographe = () =>{
  const {id} = useParams();
  const [isLoading, setLoading] = useState(true);
  const [dataPhotographers, setDataPhotographers] = useState([]);

  // Récupérer la data
  useEffect(() => {
      axios
      .get('https://raw.githubusercontent.com/MouniaFT/MouniaFattouh_06_21052021/main/public/json/FishEyeData.json')
      .then((res) => {
        setDataPhotographers(res.data)
        setLoading(false);
      });
      
  }, []);
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <Logo />
        </div>
      </header>
      <main className="photographers">
        <div className="container">
          <section className="photographers_infos">
            {dataPhotographers.photographers
                  .filter((photographe) => photographe.id === parseInt(id) )
                  .map((photographe) => (
                    <PhotographeInfos key={photographe.id} photographe={photographe} medias={dataPhotographers.media.filter((media) => media.photographerId === parseInt(id))} />
                  ))
            }
          </section>
          <section className="photographers_media">
            <PhotographeMedia id={id}  key={dataPhotographers.media.id} media={dataPhotographers.media} photographers={dataPhotographers.photographers} />
          </section>
        </div>
      </main>
    </>
  );
}

export default Photographe;