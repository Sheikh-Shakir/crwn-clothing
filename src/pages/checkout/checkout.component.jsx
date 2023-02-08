import React from "react";
import './checkout.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";


const Checkout = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span className="">Product</span>
				</div>
				<div className="header-block">
					<span className="">Description</span>
				</div>
				<div className="header-block">
					<span className="">Quantity</span>
				</div>
				<div className="header-block">
					<span className="">Price</span>
				</div>
				<div className="header-block">
					<span className="">Remove</span>
				</div>
			</div>
			{
				cartItems.map(cartItem =>
					cartItem.name
				)
			}
			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
		</div>
	)
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})
export default connect(mapStateToProps)(Checkout);