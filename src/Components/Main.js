import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import product4 from '../images/product4.jpg';
import cartIcon from '../images/icon-cart.svg';
import minusIcon from '../images/icon-minus.svg';
import plusIcon from '../images/icon-plus.svg';
import '../Styles/Main.css';
import { useState } from 'react';

function Main (props) {
    const [image, setImage] = useState(product1);

    const handleClick = () => {
        console.log(document.querySelector(".content2"));
        document.querySelector(".content2").style.display = "block";
        document.querySelector(".content1").style.display = "none";
    };

    const handleImage = (e) => {
        let image = document.querySelectorAll(".nav-img img");
        image.forEach(img => {
            img.classList.remove("active-img");
        });
        e.currentTarget.classList.add("active-img");
        setImage(e.currentTarget.dataset.img);
    };

    return (
        <main className="container">
            <section className="main-cont">

                <div className="product">
                    <div className="main-img">
                        <img src={image} alt="main-img" />
                    </div>
                    <ul className='nav-img'>
                        <li><img data-img = {product1} onClick={handleImage} className="active-img" src={product1} alt="product" /></li>
                        <li><img data-img = {product2} onClick={handleImage} src={product2} alt="product" /></li>
                        <li><img data-img = {product3} onClick={handleImage} src={product3} alt="product" /></li>
                        <li><img data-img = {product4} onClick={handleImage} src={product4} alt="product" /></li>
                    </ul>
                </div>

                <div className='desc'>
                    <b>sneaker company</b>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p> These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <h2>$125.00 <span>50%</span></h2>
                    <p className='discount'>$250.00</p>
                    <div className='count-btn'>
                        <div className='count'>
                            <button onClick={props.minus} disabled={props.disabled}><img className='minus' src={minusIcon} alt="minus-icon" /></button>
                            <span>{props.count}</span>
                            <button onClick={props.plus}><img src={plusIcon} alt="plus-icon" /></button>
                        </div>
                        <button onClick={handleClick} className='btn'>
                            <img src={cartIcon} alt="cart" />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Main;