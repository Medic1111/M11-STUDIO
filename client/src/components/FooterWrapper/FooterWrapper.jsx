import classes from "./FooterWrapper.module.css";

const FooterWrapper = ({ children }) => {
  return <footer className={classes.footer}>{children}</footer>;
};
export default FooterWrapper;
