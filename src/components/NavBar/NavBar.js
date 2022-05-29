import logo from '../../assets/img/svg/logo.svg';
import CartItem from '../CartItem/CartItem';
import PlatformItem from '../PlatformItem/PlatformItem'; 

const NavBar = () => {
    return (
        <nav className='NavBarPrincipal'>
            <ul>
                <li>
                    <a href='#'>
                        <img src = { logo } className = "App-logo" alt = "logo" />
                    </a>
                </li>
                <li>
                    <a href='#' className='navBarA'>Capacitaciones y carreras</a>
                </li>
                <li>
                    <a href='#' className='navBarA'>Servicios</a>
                </li>
                <li>
                    <a href='#' className='navBarA'>Ebooks</a>
                </li>
                <li>
                    <a href='#' className='navBarA'>Indumentaria</a>
                </li>
                <li>
                    <a href='#' className='navBarA'>Membresías</a>
                </li>
                <li>
                    <a href='#'><PlatformItem /></a>
                </li>
                <li>
                    <a href='#'><CartItem /></a>
                </li>
            </ul>
    
            
        </nav>
    )
}

export default NavBar