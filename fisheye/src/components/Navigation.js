import {useState} from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
    return (
      <nav className="header_nav" role="navigation" aria-label="photographer categories">
        <ul className="nav_list_tags">
          <li className="tag_item">
            {
            isMenuOpen ? (
              <button className="tag_item_btn" onClick={() => setIsMenuOpen(false)}>#Portrait</button>
            ) : (
              <div>
                <button onClick={() => setIsMenuOpen(true)}>A</button>
                <button onClick={() => setIsMenuOpen(true)}>B</button>
              </div>
            )
            }
          </li>
          <li className="tag_item"><button className="tag_item_btn">#Art</button></li>
          <li className="tag_item"><button className="tag_item_btn">#Fashion</button></li>
          <li className="tag_item"><button className="tag_item_btn">#Architecture</button></li>
          <li className="tag_item"><button className="tag_item_btn">#Travel</button></li>
          <li className="tag_item"><button className="tag_item_btn">#Sport</button></li>
          <li className="tag_item"><button className="tag_item_btn">#Animals</button></li>
          <li className="tag_item"><button className="tag_item_btn">#Events</button></li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;