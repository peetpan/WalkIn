import "./Header.css";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/header_logo.svg";
import accountLogo from "../../assets/account_circle.svg";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={headerLogo} className="header-logo" />
      </Link>
      <img src={accountLogo} className="account-logo" />
    </div>
  );
}
