import menuIcon from '../images/icon-menu.svg';
import logo from '../images/logo.svg';
import iconCart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import '../Styles/Header.css';
import MobileNav from './MobileNav';
import Cart from './Cart';

function Header (props) {
    const handleClick = () => {
        document.querySelector("aside").style.display = 'block';
    };
    const cart = () => {
        document.querySelector(".Cart").classList.toggle("toggle");
    }

    return (
        <>
            <header>
                <div className='container'>
                    <ul className='nav-left'>
                        <li><img src={menuIcon} alt="menu-icon" onClick={handleClick} /></li>
                        <li><a className='logo' href='/'><img src={logo} alt="logo" /></a></li>
                        <li><a href='/'>Collections</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Men</a></li>
                        <li><a href='/'>Women</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                    <ul className='nav-right'>
                        <li><img src={iconCart} alt="icon-cart" onClick={cart} /> <span>{props.count}</span></li>
                        <li><img src={avatar} alt="avatar" /></li>
                    </ul>
                    <Cart count={props.cart} price={props.price} zeroProduct={props.zeroProduct} />
                </div>
            </header>
            <MobileNav />
        </>
    );
}

export default Header;