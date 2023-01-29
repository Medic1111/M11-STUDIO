import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <article className={classes.article}>
      <div className={classes.loader}></div>
    </article>
  );
};

export default Spinner;
