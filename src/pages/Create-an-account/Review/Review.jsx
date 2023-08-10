import "./Review.css";
import headerLogo from "../../../assets/header_logo.svg";
import backIcon from "../../../assets/back.svg";
import { parsePath, useNavigate } from "react-router-dom";
import circleGreen from "../../../assets/circle-green.svg";
import circle from "../../../assets/circle-solid.svg";
import upload from "../../../assets/upload.svg";
import photo from "../../../assets/account_circle.svg";
import edit from "../../../assets/edit.svg";

export default function Review() {
  const navigate = useNavigate();

  function onCancel() {
    navigate("/");
  }

  function onCreate() {
    navigate("/appointments");
  }

  function onPrevious() {
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
          <button onClick={onCancel}>CANCEL</button>
          <button onClick={onCreate}>CREATE</button>
        </div>
      </div>
      <div className="info-box">
        <div className="boxone">
          <img src={circle} className="circle" />
          Personal Information
        </div>
        <hr />
        <div className="boxone">
          <img src={circle} className="circle" />
          Qualifications
        </div>
        <hr />
        <div className="boxone">
          <img src={circleGreen} className="circle" />
          Review and Proceed
        </div>
      </div>
      <div className="edit-bar">
        Personal Information
        <div className="edit-box">
          <img src={edit} alt="" />
          Edit
        </div>
      </div>
      <div className="input-box">
        <div className="display-box">
          <img src={photo} alt="" />
        </div>
        <div className="input-name">First Name*</div>
        <div className="text">John</div>
        <div className="input-name">Last Name*</div>
        <div className="text">Doe</div> <div className="input-name">Email*</div>
        <div className="text">johndoe@gmail.com</div>{" "}
        <div className="input-name">Phone Number*</div>
        <div className="phone-input-box">
          <div className="text">+ 91 7314121514</div>
        </div>
        <button className="upload-resume">
          <div className="button-content">
            <img src={upload} alt="" />
            <div className="upload-text">UPLOAD RESUME</div>
            <div className="text">myResume.pdf</div>
          </div>
        </button>
        <div className="input-name">Enter Portfolio URL (if any)</div>
        <div className="text">www.myportfolio.com</div>
        <div className="input-name">Preferred Job Roles*</div>
        <div className="text">Industrial Designer</div>
        <div className="text">Software Engineer</div>
        <br />
        <div className="input-name">
          If You Are Registering Via A Referral, Please Mention Full Name Of The{" "}
          <br />
          Employee Who Referred You
        </div>
        <div className="text">-</div>
      </div>

      <div className="edit-bar">
        Educational Qualifications
        <div className="edit-box">
          <img src={edit} alt="" />
          Edit
        </div>
      </div>
      <div className="input-box">
        <div className="input-name">Aggregate Percentage*</div>
        <div className="text">65</div>
        <div className="input-name">Year of Passing*</div>
        <div className="text">2020</div>{" "}
        <div className="input-double">
          <div>
            <div className="input-name">Qualification*</div>
            <div className="text">B.TECH</div>{" "}
          </div>
          <div>
            <div className="input-name">Stream*</div>
            <div className="text">IT</div>{" "}
          </div>
        </div>
        <div className="input-double">
          <div>
            <div className="input-name">College*</div>
            <div className="text">PICT</div>{" "}
          </div>
          <div>
            <div className="input-name">
              If others, please enter your college name *
            </div>
            <div className="text">-</div>{" "}
          </div>
        </div>
        <div className="input-name">Where is your College Located*</div>
        <div className="text">Pune</div>{" "}
      </div>
      <div className="edit-bar">
        Professional Qualifications
        <div className="edit-box">
          <img src={edit} alt="" />
          Edit
        </div>
      </div>
      <div className="input-box">
        <div>
          <div className="input-name">Applicant Type</div>
          <div className="text">Experienced</div>
          <div className="input-name">Years of Experience*</div>
          <div className="text">5</div>
          <div className="input-name">Current CTC* (In Rupees)*</div>
          <div className="text">5,00,000</div>
          <div className="input-name">Expected CTC* (In Rupees)*</div>
          <div className="text">6,50,000</div>
          <div className="input-name">
            Select All The Technologies You Are Familiar In*
          </div>
          <div className="text">Javascript</div>
          <div className="input-name">If others, please mention </div>
          <div className="text">-</div>
          <div className="input-name">Are you currently on notice period?*</div>
          <div className="text">65</div>
          <br />
          <div className="input-name">
            Have You Appeared For Any Test By Zeus in the past 12 months?*{" "}
          </div>
          <div className="text">No</div>
          <br />
        </div>
      </div>
      <button onClick={onPrevious} className="next-button" type="submit">
        PREVIOUS
      </button>
    </div>
  );
}
