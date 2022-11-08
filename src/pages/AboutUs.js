import React from "react";
import lama from "../images/lama.jpg";
const AboutUs = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams </span>come
            </h2>
          </div>
          <div className="hide">
            <h2> trough..</h2>
          </div>
        </div>
      </div>
      <p>
        Contact us for all your baby and todler needs, for best service and
        selection for all adorable peices we are number 1 source
      </p>
      <button>Contact</button>
      <div className="image">
        <img src={lama} alt="a cute animal" height={"500px"} />
      </div>
    </div>
  );
};
export default AboutUs;
