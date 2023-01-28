import classes from "../../components/CartItem/CartItem.module.css";
import Placeholder from "../../assets/placeholder.jpg";
const CartPlaceholder = () => {
  return (
    <div className={classes.card}>
      <img alt="wall/street art" className={classes.img} src={Placeholder} />
      <div className={classes.txtBox}>
        <p className={classes.pTitle}>.NOTHING.</p>
        <p className={classes.pDes}>Your cart is currently empty</p>
        <p className={classes.pPrice}>.m-11</p>
      </div>
    </div>
  );
};

export default CartPlaceholder;
