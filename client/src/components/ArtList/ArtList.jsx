import classes from "./ArtList.module.css";
import ArtItem from "../ArtItem/ArtItem";
import useProducts from "../../hooks/UseProducts";

const ArtList = () => {
  const products = useProducts();

  return (
    <div className={classes.pad}>
      {products.map((obj, index) => {
        return <ArtItem key={`ART_${index}`} obj={obj} index={index} />;
      })}
    </div>
  );
};

export default ArtList;
