import classes from "./ShowroomWrapper.module.css";

const ShowroomWrapper = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default ShowroomWrapper;
