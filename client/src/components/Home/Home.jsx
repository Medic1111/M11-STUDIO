import classes from "./Home.module.css";
import React from "react";
import AnimBanner from "../../common/AnimBanner/AnimBanner";
import Logo from "../../common/Logo/Logo";
const Home = () => {
  return (
    <React.Fragment>
      <AnimBanner
        orange={`- february - expo - is - on -`}
        black={`- absolute - fire - don't - miss - out -`}
      />
      <section className={classes.section}>
        <div className={classes.div}>
          <Logo />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
