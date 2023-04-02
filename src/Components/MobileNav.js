import closeIcon from '../images/icon-close.svg';

import '../Styles/MobileNav.css';

function MobileNav () {
    const handleClick = (e) => {
        e.preventDefault();
        document.querySelector("aside").style.display = "none";
    };
    return (
        <aside>
            <ul>
                <li><a href='/'><img src={closeIcon} alt="close-icon" onClick={handleClick} /></a></li>
                    <li><a href='/'>Collections</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Men</a></li>
                    <li><a href='/'>Women</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
            </ul>
        </aside>
    );
}

export default MobileNav;