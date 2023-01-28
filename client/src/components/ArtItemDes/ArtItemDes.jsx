import classes from "./ArtItemDes.module.css";

const ArtItemDes = ({ description, index }) => {
  return (
    <p className={classes.p}>
      {description}
      <br />
      <span className={classes.index}>0{index + 1}</span>
    </p>
  );
};

export default ArtItemDes;
