import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

const Reason = () => {
  return (
    <>
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="Reason 1" />
        <img src={image2} alt="Reason 2" />
        <img src={image3} alt="Reason 3" />
        <img src={image4} alt="Reason 4" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div className="details-r">
          <span className="stroke-text">why</span>
          <span> choose us ?</span>
        </div>
        <div>
          <div>
            <img src={tick} alt="Tick" />
            <span>over 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="Tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="Tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div>
            <img src={tick} alt="Tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="muxxi">OUR PARTNERS</span>
        <div className="partners">
          <img src={nb} alt="New Balance" />
          <img src={adidas} alt="Adidas" />
          <img src={nike} alt="Nike" />
        </div>
      </div>
    </div>
    </>
  );
  
};

export default Reason;
