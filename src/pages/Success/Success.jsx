import "./Success.css";
import Header from "../../components/Header/Header";
import tickIcon from "../../assets/tick.svg";

export default function Success() {
  return (
    <div>
      <Header />
      <div className="success-container">
        <div className="success-content">
          <img className="tick-icon" src={tickIcon} alt="" />
          <div className="success-title">
            Congratulations ! You have successfully applied for the walk -in
            opportunity
          </div>
          <hr />
          <div className="text-name">Date & Time of Walk-in :</div>
          <div className="text">03rd July 2021</div>
          <div className="text">9:00 AM to 11:00 AM</div>
          <hr />
          <div className="text-name">Venue of Walk-in :</div>
          <div className="text">Zeus Learning Pvt. Ltd.</div>
          <div className="text">
            1402, Tower B, Peninsula Business Park, Ganapatrao Kadam Marg
          </div>
          <div className="text">Lower Parel</div>
          <div className="text">Mumbai</div>
          <div className="text">Phone: 022 6666 6626</div>
          <hr />
          <div className="text-name">Things to remember :</div>
          <div className="text">
            - Please report 30 minutes prior to the reporting time
          </div>
          <div className="text">
            - Carry your downloaded hall ticket with you
          </div>
          <hr />
          <button className="download-button" type="submit">
            DOWNLOAD HALL TICKET
          </button>
        </div>
      </div>
    </div>
  );
}
