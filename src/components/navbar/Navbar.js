import './Navbar.css';
import {
  Link
} from "react-router-dom";

function Navbar(props) {
    const cartItemsNumber = props.cartItemsNumber;
    return (
        <nav className="navbar">
            <ul className="list">
                <li className="listItem"><Link to="/">Store</Link></li>
                <li className="listItem"><Link to="/cart"><img src="icons/cart.png" width="20px" alt="cart"/>Cart ({cartItemsNumber})</Link></li>

                {/* <li className="listItem"><a href="#">Store</a></li>
                <li className="listItem"><img src="icons/cart.png" width="20px" alt="cart"/><a href="#">Cart ({cartItemsNumber})</a></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;