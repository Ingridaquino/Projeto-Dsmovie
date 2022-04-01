import { GoMarkGithub } from "react-icons/go";

import "./styles.css";


function Header () {
    return (
      <header>
          <nav className="container">
              <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Ingridaquino"> 
                        <div className="dsmovie-contact-container">
                            <GoMarkGithub /> 
                            <p className="dsmovie-contact-link">/IngridAquino</p>     
                        </div>
                    </a>
              </div>
          </nav>
      </header>
    );
  }
  
  export default Header;