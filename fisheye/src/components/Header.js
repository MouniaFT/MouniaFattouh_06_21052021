import Navigation from "./Navigation";
import Logo from "./Logo";


const Header = () => {
    
      return (
        <header className="header" role="banner">
            <Logo />
            <Navigation />
            <h1 className="header_title">Nos photographes</h1>
        </header>
      );
    
}
export default Header;