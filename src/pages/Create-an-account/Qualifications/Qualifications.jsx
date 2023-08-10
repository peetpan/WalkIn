import "./Qualifications.css";
import headerLogo from "../../../assets/header_logo.svg";
import backIcon from "../../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import circleGreen from "../../../assets/circle-green.svg";
import circle from "../../../assets/circle-solid.svg";
import down from "../../../assets/down.svg";
import { useState } from "react";

export default function PersonalInfomation() {
  const [isValues, setValues] = useState({
    isEducationToggle: "False",
    isProfessionalToggle: "False",
    radioValue: 1,
  });

  const navigate = useNavigate();
  function onNext() {
    navigate("/review");
  }
  function onPrevious() {
    navigate("/personal-information");
  }

  function eduClick() {
    setValues((prevState) => ({
      ...prevState,
      isEducationToggle: !prevState.isEducationToggle,
    }));
  }

  function proClick() {
    setValues((prevState) => ({
      ...prevState,
      isProfessionalToggle: !prevState.isProfessionalToggle,
    }));
  }

  function radioClick(num) {
    setValues((prevState) => ({
      ...prevState,
      radioValue: num,
    }));
    console.log(isValues.radioValue);
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
          <img src={circle} className="circle" />
          Personal Information
        </div>
        <hr />
        <div className="boxone">
          <img src={circleGreen} className="circle" />
          Qualifications
        </div>
        <hr />
        <div className="boxone">
          <img src={circle} className="circle" />
          Review and Proceed
        </div>
      </div>
      <div className="qual-input-box">
        <div className="education-header">
          Educational Qualification
          <img src={down} alt="" onClick={eduClick} />
        </div>
        {isValues.isEducationToggle && (
          <div className="education-input">
            <div className="input-name">Aggregate Percentage*</div>
            <input className="box-input" type="text" name="" id="" />
            <div className="input-name">Year of Passing*</div>
            <input className="box-input" type="text" name="" id="" />
            <div className="input-double">
              <div>
                <div className="input-name">Qualification*</div>
                <input className="box-input" type="text" name="" id="" />
              </div>
              <div>
                <div className="input-name">Stream*</div>
                <input className="box-input" type="text" name="" id="" />
              </div>
            </div>
            <div className="input-double">
              <div>
                <div className="input-name">College*</div>
                <input className="box-input" type="text" name="" id="" />
              </div>
              <div>
                <div className="input-name">
                  If others, please enter your college name *
                </div>
                <input className="box-input" type="text" name="" id="" />
              </div>
            </div>
            <div className="input-name">Where is your College Located*</div>
            <input className="box-input" type="text" name="" id="" />
          </div>
        )}
      </div>
      <div className="qual-input-box">
        <div className="education-header">
          Professional Qualification
          <img src={down} alt="" onClick={proClick} />
        </div>
        {isValues.isProfessionalToggle && (
          <div className="education-input">
            <div className="input-name">Applicant Type*</div>
            <div className="radio-double">
              <div className="inner-radio">
                <input
                  className="radio-input"
                  type="radio"
                  name="choice"
                  onChange={() => radioClick(1)}
                />
                Fresher
              </div>
              <div className="inner-radio">
                <input
                  className="radio-input"
                  type="radio"
                  name="choice"
                  onChange={() => radioClick(2)}
                />
                Experienced
              </div>
            </div>
            <br />
            {isValues.radioValue === 1 ? (
              <div>
                <div className="input-name">
                  Select All The Technologies You Are Familiar In*
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>Javascript</p>
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>Angular JS</p>
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>React</p>
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>Node JS</p>
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>Others</p>
                </div>
                <div className="input-name">If others, please mention </div>
                <input className="box-input" type="text" name="" id="" />
                <div className="input-name">
                  Have You Appeared For Any Test By Zeus in the past 12 months?*{" "}
                </div>
                <div className="radio-double">
                  <div className="inner-radio">
                    <input
                      className="radio-input"
                      type="radio"
                      name="choice"
                      onChange={() => radioClick(1)}
                    />
                    Yes
                  </div>
                  <div className="inner-radio">
                    <input
                      className="radio-input"
                      type="radio"
                      name="choice"
                      onChange={() => radioClick(2)}
                    />
                    No
                  </div>
                </div>
                <br />
                <div className="input-name">
                  If Yes, which role did you apply for?
                </div>
                <input className="box-input" type="text" name="" id="" />
              </div>
            ) : (
              <div>
                <div className="input-name">Years of Experience*</div>
                <input className="box-input" type="text" name="" id="" />
                <div className="input-name">Current CTC* (In Rupees)*</div>
                <input className="box-input" type="text" name="" id="" />
                <div className="input-name">Expected CTC* (In Rupees)*</div>
                <input className="box-input" type="text" name="" id="" />
                <div className="input-name">
                  Select All The Technologies You Are Familiar In*
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>Javascript</p>
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>Angular JS</p>
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>React</p>
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>Node JS</p>
                </div>
                <div className="wrapper-remember">
                  <input className="box" type="checkbox" />
                  <p>Others</p>
                </div>
                <div className="input-name">If others, please mention </div>
                <input className="box-input" type="text" name="" id="" />
                <div className="input-name">
                  Are you currently on notice period?*{" "}
                </div>
                <div className="radio-double">
                  <div className="inner-radio">
                    <input
                      className="radio-input"
                      type="radio"
                      name="notice-period"
                    />
                    Yes
                  </div>
                  <div className="inner-radio">
                    <input
                      className="radio-input"
                      type="radio"
                      name="notice-period"
                    />
                    No
                  </div>
                </div>
                <br />
                <div className="input-name">
                  Have You Appeared For Any Test By Zeus in the past 12 months?*{" "}
                </div>
                <div className="radio-double">
                  <div className="inner-radio">
                    <input className="radio-input" type="radio" name="choice" />
                    Yes
                  </div>
                  <div className="inner-radio">
                    <input className="radio-input" type="radio" name="choice" />
                    No
                  </div>
                </div>
                <br />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="bottom-button-box">
        <button onClick={onPrevious} className="nextbutton" type="submit">
          PREVIOUS
        </button>
        <button onClick={onNext} className="nextbutton" type="submit">
          NEXT
        </button>
      </div>
    </div>
  );
}
