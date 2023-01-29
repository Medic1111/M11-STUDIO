import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <article className={classes.article}>
      <div class={classes.loader}></div>
    </article>
  );
};

export default Spinner;
