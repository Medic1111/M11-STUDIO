import classes from "./ArtDetail.module.css";
import ArtItemBtn from "../ArtItemBtn/ArtItemBtn";
import CloseModal from "../../common/CloseModal/CloseModal";
import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const ArtDetail = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <section className={classes.section}>
      <div className={classes.colOne}>
        <p className={classes.title}>{uiMgr.selectedArt.title}</p>
        <p className={classes.price}>#{uiMgr.selectedArt.id}</p>
      </div>
      <div
        className={
          uiMgr.selectedArt.view === "portrait"
            ? classes.colTwo
            : classes.colTwoAlt
        }
      >
        <img
          alt="street/wall art"
          className={classes.img}
          src={uiMgr.selectedArt.url}
        />
      </div>
      <div className={classes.colThree}>
        <div className={classes.txtBox}>
          <div className={classes.boxOne}>
            <strong className={classes.strong}>Who</strong>
            <p className={classes.p}>{uiMgr.selectedArt.artist}</p>
          </div>
          <div className={classes.boxOne}>
            <strong className={classes.strong}>Location</strong>
            <p className={classes.p}>{uiMgr.selectedArt.location}</p>
            <p className={classes.p}>9 ltd. edition</p>
          </div>
          <div className={classes.boxOne}>
            <strong className={classes.strong}>Insurance</strong>
            <p className={classes.p}>We are backed up by strong_art_helmet</p>
            <p className={classes.p}>
              Offering a 5 year warranty on all issues
            </p>
          </div>
        </div>
        <p className={classes.des}>{uiMgr.selectedArt.description}</p>
        <div className={classes.btnBox}>
          <CloseModal className={classes.back} text={"BACK"} />
          <ArtItemBtn
            content={uiMgr.selectedArt.price}
            index={uiMgr.selectedArt.identity}
            id={uiMgr.selectedArt.id}
          />
        </div>
      </div>
    </section>
  );
};

export default ArtDetail;
