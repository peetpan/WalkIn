import "./Login.css";
import headerLogo from "../../assets/header_logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function onSubmit() {
    navigate("/appointments");
  }
  return (
    <div>
      <div className="header">
        <img src={headerLogo} className="header-logo" />
      </div>
      <div className="container">
        <p className="heading">Log in</p>
        <form onSubmit={onSubmit}>
          <div className="input-text">
            <input
              className="input-text-field"
              placeholder="Email ID*"
              type="text"
              id="fname"
              name="fname"
            />
            <a className="forgot" href="">
              FORGOT USERNAME?
            </a>
          </div>
          <div className="input-text">
            <input
              className="input-text-field"
              placeholder="Password*"
              type="password"
              id="fname"
              name="fname"
            />
            <a className="forgot" href="">
              FORGOT PASSWORD?
            </a>
          </div>
          <div className="wrapper-remember">
            <input
              className="box"
              type="checkbox"
              name="vehicle1"
              value="remember"
            />
            <p>Remember me</p>
          </div>
          {/* <Link to="/appointments"> */}
          <button type="submit">LOG IN</button>
          {/* </Link> */}
        </form>
        <div className="create-account">
          <div className="account-text">Not registered yet?</div>
          <Link to="/personal-information">
            <a className="forgot" href="">
              CREATE AN ACCOUNT?
            </a>
          </Link>
        </div>
      </div>
      <footer>
        <div className="links">
          <a href="">About</a> <span>|</span> <a href="">Contact us</a>
        </div>
      </footer>
    </div>
  );
}
