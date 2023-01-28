import classes from "./FooterArrow.module.css";

const FooterArrow = () => {
  return (
    <span className={`${classes.arrow} material-symbols-outlined`}>
      expand_less
    </span>
  );
};

export default FooterArrow;
