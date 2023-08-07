import "./Content.css";
import Card from "../Card/Card";

export default function Content() {
  const data = [
    {
      id: 1,
      title: "Walk In For Designer Job Role",
      date: "10-Jul-2021 to 11-Jul-2021",
      expires_in: "5",
      place: "Mumbai",
      roles: [
        "Instructional Designer",
        "Software Engineer",
        "Software Quality Engineer",
      ],
      note: "Internship Opportunity for MCA Students",
    },
    {
      title: "Walk In For Gangster ship",
      date: "1-Mar-2023 to 3-Mar-2023",
      expires_in: "",
      place: "Wasseypur",
      roles: [
        "Instructional Shooter",
        "Software shooter",
        "Software Quality shooter",
      ],
      note: "Internship Opportunity for 10th Failed Citizens",
    },
    {
      title: "Walk In For Design and Development Job Role",
      date: "10-Jul-2021 to 11-Jul-2021",
      expires_in: "7",
      place: "Bengaluru",
      roles: ["Instructional Designer"],
      note: "",
    },
  ];
  const roleElements = data.map((role) => {
    return <Card key={role.id} {...role} />;
  });
  return <div className="content">{roleElements}</div>;
}
