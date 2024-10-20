import "./Contact.css";
import profile1 from "../../../profile_m.jpg";
import profile2 from "../../../profile_w.jpg";

function contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-item">
        <img src={profile2} className="header-logo" alt="권세아 프로필" />
        <h4>권세아</h4>
        <h4>010.5916.7180</h4>
      </div>
      <div className="contact-item">
        <img src={profile1} className="header-logo" alt="금강산 프로필" />
        <h4>금강산</h4>
        <h4></h4>
      </div>
    </div>
  );
}

export default contact;