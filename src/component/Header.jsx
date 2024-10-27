import { Link } from "react-router-dom"
import './Header.css'

const Header = ()=> {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to= "/home">Inicio</Link>
                    </li>
                    <li>
                        <Link to = "/water-pollution">Contaminacion del Agua</Link>
                    </li>
                    <li>
                        <Link to = "/water-scarcity">Escasez de Agua</Link>
                    </li>
                    <li>
                        <Link to = "/ocean-acidification">Acidificacion del Oceano</Link>
                    </li>
                    <li>
                        <Link to = "/test">Test</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;