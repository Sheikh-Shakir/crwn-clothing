import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { useNavigate } from "react-router-dom";
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import toggleCartHidden from '../../redux/cart/cart.actions'
import './cart-dropdown.styles.scss';



const CartDropdown = ({ cartItems, dispatch }) => {
	const navigate = useNavigate();
	return (
		<div className="cart-dropdown">
			<div className="cart-items" >
				{
					cartItems.length ?
						cartItems.map(cartItem => {
							return (<CartItem key={cartItem.id} item={cartItem} />)
						})
						:
						<span className=" ">Your Cart is Empty</span>
				}
			</div>
			<CustomButton onClick={() => {
				navigate('/checkout');
				dispatch(toggleCartHidden())

			}}>Go To CHECKOUT</CustomButton>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);