import CartItem from "../CartItem/CartItem";

const CartList = ({ cart }) => {
  return (
    <>
      {cart.map((obj, index) => {
        return <CartItem key={`CART_ITEM${index}`} obj={obj} />;
      })}
    </>
  );
};

export default CartList;
