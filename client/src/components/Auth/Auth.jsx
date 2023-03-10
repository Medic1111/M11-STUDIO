import classes from "./Auth.module.css";
import { useContext, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { authCtx } from "../../features/auth-ctx";
import { uiCtx } from "../../features/ui-ctx";
import axios from "axios";
import CloseModal from "../../common/CloseModal/CloseModal";
import FormWrapper from "../../common/FormWrapper/FormWrapper";

const Auth = () => {
  const authMgr = useContext(authCtx);
  const uiMgr = useContext(uiCtx);

  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const inputChangeHandler = (e) => {
    setErrMsg("");
    setErr(false);
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = async (e) => {
    uiMgr.setIsLoading(true);
    e.preventDefault();
    let url = authMgr.isLoggin ? "/api/v1/auth/login" : "/api/v1/auth/register";
    await axios
      .post(url, formData)
      .then((serverRes) => {
        authMgr.setCurrentUser(serverRes.data.user);
        authMgr.setIsAuth(true);
        uiMgr.dispatch({ type: "CLOSE" });
        uiMgr.setIsLoading(false);
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        setErr(true);
        uiMgr.setIsLoading(false);
      });
  };

  return (
    <FormWrapper>
      <Slide className={classes.form} direction="up">
        <form onSubmit={submitHandler} className={classes.form}>
          <p className={classes.title}>
            {authMgr.isLoggin ? "Login" : "Register"}
          </p>
          {authMgr.isLoggin || (
            <input
              className={classes.input}
              type={"email"}
              placeholder={"Email address"}
              value={formData.email}
              name="email"
              onChange={inputChangeHandler}
            />
          )}
          <input
            className={classes.input}
            type={"username"}
            placeholder={"Username"}
            value={formData.username}
            name="username"
            onChange={inputChangeHandler}
          />
          <input
            className={classes.input}
            type={"password"}
            placeholder={"Password"}
            value={formData.password}
            name="password"
            onChange={inputChangeHandler}
          />
          {authMgr.isLoggin || (
            <input
              className={classes.input}
              type={"password"}
              placeholder={"Confirm Password"}
              value={formData.passwordConfirm}
              name="passwordConfirm"
              onChange={inputChangeHandler}
            />
          )}
          <div className={classes.btnBox}>
            <CloseModal text={"BACK"} className={classes.back} />
            <input className={classes.submit} type={"submit"} />
          </div>
          <p
            className={classes.p}
            onClick={() => {
              authMgr.setIsLoggin((prev) => !prev);
            }}
          >
            {authMgr.isLoggin
              ? "Dont have an account? Register"
              : "Already have an account? Login"}
          </p>
          {err && <p className={classes.err}>{errMsg}</p>}
        </form>
      </Slide>
    </FormWrapper>
  );
};

export default Auth;
