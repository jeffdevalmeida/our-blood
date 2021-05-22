import logo from '../../logo.png';
import './NavBar.css';
import { Navbar, Nav  } from 'react-bootstrap';

export default function NavBar() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top " style={{backgroundColor: "#F9EDED"}}>
            <div class="container">
                <a class="" href="#"><img src={logo} className="ob_header-logo"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav m-2" >
                    <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#">Quem somos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">O que fazemos</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}