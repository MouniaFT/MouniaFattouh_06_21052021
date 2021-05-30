import Navigation from "./Navigation";
import Logo from "./Logo";


const Header = () => {
    
      return (
        <div>
          <a class="skip-link notfocus-visuallyhidden" href="#maincontent">Passer au contenu</a>
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