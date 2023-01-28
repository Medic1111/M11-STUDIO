import AnimBanner from "../../common/AnimBanner/AnimBanner";
import classes from "./About.module.css";
import GalOne from "../../assets/gal1.jpg";

const About = () => {
  return (
    <>
      <AnimBanner />
      <section id="us" className={classes.section}>
        <img alt="art gallery" className={classes.img} src={GalOne} />
        <div className={classes.col}>
          <div className={classes.txtBox}>
            <div className={classes.boxOne}>
              <strong className={classes.strong}>Where</strong>
              <p className={classes.p}>1111 Ocean Dr. Miami Beach, FL</p>
              <p className={classes.p}>305-111-6363</p>
            </div>
            <div className={classes.boxOne}>
              <strong className={classes.strong}>February</strong>
              <p className={classes.p}>Caçique has taught...</p>
              <p className={classes.p}>6 ltd. edition</p>
            </div>
            <div className={classes.boxOne}>
              <strong className={classes.strong}>Insurance</strong>
              <p className={classes.p}>We are backed up by strong_art_helmet</p>
              <p className={classes.p}>
                Offering a 5 year warranty on all issues
              </p>
            </div>
          </div>
          <div className={classes.popUp}>
            <strong className={classes.popUpTxt2}>MONTHLY-EXPOS</strong>
            <p className={classes.des}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
              viverra vitae congue eu consequat ac. Mattis nunc sed blandit
              libero volutpat sed cras ornare arcu. Bibendum neque egestas
              congue quisque egestas. Hac habitasse platea dictumst quisque
              sagittis purus. Proin nibh nisl condimentum id. Adipiscing
              bibendum est ultricies integer quis auctor elit.
            </p>
          </div>
          <div className={classes.detailBox}>
            <p className={classes.detail}>limited</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
