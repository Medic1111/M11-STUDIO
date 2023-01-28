import classes from "./CartWrapper.module.css";

const CartWrapper = ({ children }) => {
  return <article className={classes.article}>{children}</article>;
};

export default CartWrapper;
