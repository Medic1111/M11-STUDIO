import classes from "./Logo.module.css";
import { Fade } from "react-awesome-reveal";

const Logo = () => {
  return (
    <Fade cascade>
      <p className={classes.logo}>m-11</p>
      <div className={classes.studio}>
        <Fade cascade>studio </Fade>
      </div>
    </Fade>
  );
};

export default Logo;
