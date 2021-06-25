import { useHistory } from 'react-router-dom';

const Logo = () => {

  const history = useHistory()
  
      return (
        // onClick : return to home
        <a href="./" onClick={() => {history.push('/')}} className="header_logo" title="fisheye - retour à l'accueil">
          <img className="logo" src={require("../images/logo.svg").default} alt="Fisheye Home page"/>
        </a>
      );
}
export default Logo;