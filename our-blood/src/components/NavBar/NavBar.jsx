import logo from '../../logo.png';
import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <nav id="ob-main-nav">
                <ul className="nav-itens">
                    <li><img src={logo} /></li>
                    <li><a href="">Quem somos</a></li>
                    <li><a href="">O que fazemos</a></li>
                </ul>
            </nav>
        </>
    )
}