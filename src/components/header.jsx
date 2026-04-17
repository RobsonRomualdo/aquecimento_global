import {Link, NavLink} from 'react-router-dom';
import '../css/index.css'

function Header() {
    return (
        <header>
            <img src="/src/images/global-warming.png" alt="Global Warming" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/conversor">Conversor</Link></li>
                <li><Link to="/faleconosco">Fale conosco</Link></li>
            </ul>
        </header>
    )
}

export default Header