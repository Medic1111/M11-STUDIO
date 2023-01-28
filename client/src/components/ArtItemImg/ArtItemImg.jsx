import classes from "./ArtItemImg.module.css";
import { Slide } from "react-awesome-reveal";
import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const ArtItemImg = ({ index, obj }) => {
  const uiMgr = useContext(uiCtx);
  return (
    <Slide
      style={{ order: index % 2 ? 1 : 0 }}
      className={classes.slide}
      direction={index % 2 ? "right" : "left"}
    >
      <img
        alt="street/wall art"
        onClick={() => {
          uiMgr.setSelectedArt(obj);
          uiMgr.dispatch({ type: "ART_DETAIL" });
        }}
        className={index % 2 ? classes.img2 : classes.img1}
        src={obj.url}
      />
    </Slide>
  );
};

export default ArtItemImg;
