import product from '../images/product1.jpg';
import cancel from '../images/icon-delete.svg';
import '../Styles/Cart.css';

function Cart (props) {

    // const zeroProduct = () => {
    //     document.querySelector(".content1").style.display = "block";
    //     document.querySelector(".content2").style.display = "none";
    //     document.querySelector(".nav-right li span").style.opacity = "0";
    // };

    return (
        <>
            <div className="Cart toggle">
                <p>Cart</p>
                <hr />
                <div className='content1'>
                    <p>Your cart is empty</p>
                </div>
                <div className='content2'>
                    <div className='buy'>
                        <div className='image'>
                        <img src={product} alt="buy-product" />
                        </div>
                        <div className='desc'>
                            <p>Fall Limited Edition Sneakers
                                <br />
                                $125.00 x {props.count}
                                <span>${props.price}.00</span>
                            </p>
                        </div>
                    </div>
                    <button onClick={props.zeroProduct} className='cancel'><img src={cancel} alt="cancel" />Cancel</button>
                    <button className='confirm'>Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Cart;