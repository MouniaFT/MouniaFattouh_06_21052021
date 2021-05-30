//import {useState} from "react";
//import Photographers from "./Photographers";

const Navigation = () => {
  

  // const [isMenuOpen, setIsMenuOpen] = useState(true)
    return (
      <nav className="header_nav" role="navigation" aria-label="photographer categories">
        <ul className="list-tags">
          <li className="tag-item">
            {/* {
            isMenuOpen ? ( */}
              <button className="tag-btn">#Portrait</button>
            {/* ) : (
              <div>
                <button onClick={() => setIsMenuOpen(true)}>A</button>
                <button onClick={() => setIsMenuOpen(true)}>B</button>
              </div>
            )
            } */}
          </li>
          <li className="tag-item"><button className="tag-btn">#Art</button></li>
          <li className="tag-item"><button className="tag-btn">#Fashion</button></li>
          <li className="tag-item"><button className="tag-btn">#Architecture</button></li>
          <li className="tag-item"><button className="tag-btn">#Travel</button></li>
          <li className="tag-item"><button className="tag-btn">#Sport</button></li>
          <li className="tag-item"><button className="tag-btn">#Animals</button></li>
          <li className="tag-item"><button className="tag-btn">#Events</button></li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;