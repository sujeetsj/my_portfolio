import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>If you have any query or suggestion</h4>
        <p>
        i would be happy to answer them, feel free to contact me.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
               New Delhi, Delhi ,India.
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">sujeetyadav02222@gmail.com</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+91 8354802222</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
