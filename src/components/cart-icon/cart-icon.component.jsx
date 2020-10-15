import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { CartContext } from "../../providers/cart/cartProvider";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });

export default CartIcon;
