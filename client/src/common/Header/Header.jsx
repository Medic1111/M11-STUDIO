import classes from "./Header.module.css";
import { Bounce } from "react-awesome-reveal";

const Header = ({ title, id }) => {
  return (
    <h3 id={id} className={classes.alo}>
      <Bounce>
        <span className={`${classes.arrow} material-symbols-outlined`}>
          keyboard_arrow_down
        </span>
      </Bounce>
      {title}
    </h3>
  );
};

export default Header;
