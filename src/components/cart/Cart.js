import './Cart.css';

function Cart(props) {
    const cards = props.items.map((item, idx) => (
        <div className="cartCard" key={idx}>
            <div className="itemContainer">
                <img src={item.photo} alt="itemPhoto" width="70px"/>
                <div className="textContainer">
                    <span className="cartTitle">{item.title}</span>
                    <span className="cartPrice">{item.price}$</span>
                </div>
                <span className="cartQty">Qty: {item.quantity}</span>
            </div>
            <div className="buttonsContainer">
                <button className="cartButton" onClick={() => props.addItem(item)}><img src="/icons/plus.png" alt="plus" width="30"/></button>
                <button className="cartButton" onClick={() => props.removeItem(item)}><img src="/icons/minus.png" alt="plus" width="30"/></button>
                <button className="cartButton" onClick={() => props.removeAllOfItem(item, item.quantity)}><img src="/icons/remove.png" alt="plus" width="30"/></button>
            </div>
        </div>
    ))

    let totalPrice = 0;
    props.items.forEach(item => totalPrice += item.price * item.quantity);

    return (
        <div className="cartContainer">
            <div className="cartCardsContainer">
                {cards}
            </div>
            <div className="checkoutContainer">
                <span className="checkoutTitle">Total Items</span>
                <span className="checkoutValue">{props.totalItems}</span>
                <span className="checkoutTitle">Total Payment</span>
                <span className="checkoutValue">{totalPrice}$</span>
                <button className="checkoutButton checkoutButtonPrimary">Checkout</button>
                <button className="checkoutButton checkoutButtonSecondary" onClick={() => props.clearCart()}>Clear</button>
            </div>
        </div>
    )
}

export default Cart;