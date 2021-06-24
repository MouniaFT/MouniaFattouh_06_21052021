import Navigation from "./Navigation";
import Logo from "./Logo";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    
      return (
        <div>
          <Link className="skip-link notfocus-visuallyhidden" to="#maincontent">Passer au contenu</Link>
          <header className="header" role="banner">
            <div className="container">
                <Logo />
                <Navigation />
            </div>  
          </header>
        </div>
        
      );
    
}
export default Header;