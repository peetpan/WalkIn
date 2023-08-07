import "./Card.css";
import locationIcon from "../../assets/location.svg";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      {props.expires_in.length != 0 && (
        <div className="expire">Expires in {props.expires_in} days</div>
      )}
      <div className="title">{props.title}</div>
      <span>Date & Time :</span>
      <div className="date-place">
        <div className="date">10-Jul-2021 to 11-Jul-2021</div>
        <div className="line">|</div>
        <img src={locationIcon} className="location-icon" />
        <div className="place">{props.place}</div>
      </div>
      <hr />
      <span>Job Roles :</span>
      <div className="roles">
        {props.roles.map((role, index) => {
          return (
            <div className="inner-element">
              <div className="role-name">{role}</div>
              {props.roles.length != index + 1 && <div className="line">|</div>}
            </div>
          );
        })}
      </div>
      {props.note.length != 0 && <div className="note">{props.note}</div>}
      <button>VIEW MORE DETAILS</button>
    </div>
  );
}
