import Navigation from "./Navigation";
import Logo from "./Logo";


const Header = () => {
    
      return (
        <header className="header" role="banner">
          <div className="container">
              <Logo />
              <Navigation />
          </div>  
        </header>
      );
    
}
export default Header;