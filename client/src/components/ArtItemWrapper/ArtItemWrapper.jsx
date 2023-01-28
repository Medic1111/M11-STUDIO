import classes from "./ArtItemWrapper.module.css";

const ArtItemWrapper = ({ children }) => {
  return <div className={classes.div}>{children}</div>;
};
export default ArtItemWrapper;
