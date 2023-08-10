import "./Personal-Infomation.css";
import headerLogo from "../../../assets/header_logo.svg";
import backIcon from "../../../assets/back.svg";
import { parsePath, useNavigate } from "react-router-dom";
import circleGreen from "../../../assets/circle-green.svg";
import circle from "../../../assets/circle-solid.svg";
import upload from "../../../assets/upload.svg";
import photo from "../../../assets/account_circle.svg";

export default function PersonalInfomation() {
  const navigate = useNavigate();
  function onNext() {
    navigate("/qualifications");
  }
  return (
    <div>
      <div className="header">
        <img src={headerLogo} className="header-logo" />
      </div>
      <div className="create-account-bar">
        <img src={backIcon} className="header-logo" />
        Create An Account
        <div className="button-box">
          <button>CANCEL</button>
          <button disabled="true">CREATE</button>
        </div>
      </div>
      <div className="info-box">
        <div className="boxone">
          <img src={circleGreen} className="circle" />
          Personal Information
        </div>
        <hr />
        <div className="boxone">
          <img src={circle} className="circle" />
          Qualifications
        </div>
        <hr />
        <div className="boxone">
          <img src={circle} className="circle" />
          Review and Proceed
        </div>
      </div>
      <div className="input-box">
        <div className="display-box">
          <img src={photo} alt="" />
          <div className="upload-text">UPLOAD DISPLAY PHOTO</div>
          <div className="img-input-name">Max. image size: 5 MB</div>
        </div>
        <div className="input-name">First Name*</div>
        <input className="box-input" type="text" name="" id="" />
        <div className="input-name">Last Name*</div>
        <input className="box-input" type="text" name="" id="" />
        <div className="input-name">Email*</div>
        <input className="box-input" type="text" name="" id="" />
        <div className="input-name">Phone Number*</div>
        <div className="phone-input-box">
          +
          <input className="phone-small" type="text" name="" id="" />
          <input className="phone-long" type="text" name="" id="" />
        </div>
        <button className="upload-resume">
          <div className="button-content">
            <img src={upload} alt="" />
            <div className="upload-text">UPLOAD RESUME</div>
          </div>
        </button>
        <div className="input-name">Enter Portfolio URL (if any)</div>
        <input className="box-input" type="text" name="" id="" />
        <div className="input-name">Preferred Job Roles*</div>

        <div className="wrapper-remember">
          <input className="box" type="checkbox" />
          <p>Industrial Designer</p>
        </div>
        <div className="wrapper-remember">
          <input className="box" type="checkbox" />
          <p>Software Engineer</p>
        </div>
        <div className="wrapper-remember">
          <input className="box" type="checkbox" />
          <p>Quality Software Engineer</p>
        </div>
        <br />
        <div className="input-name">
          If You Are Registering Via A Referral, Please Mention Full Name Of The{" "}
          <br />
          Employee Who Referred You
        </div>
        <input className="box-input" type="text" name="" id="" />
        <div className="wrapper-remember">
          <input className="box" type="checkbox" />
          <p>Send me job related updates via mail</p>
        </div>
      </div>
      <button onClick={onNext} className="next-button" type="submit">
        NEXT
      </button>
    </div>
  );
}
