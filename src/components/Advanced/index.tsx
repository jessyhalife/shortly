import React from "react";

import "./styles.css";

import brand from '../../images/icon-brand-recognition.svg';
import detailed from '../../images/icon-detailed-records.svg';
import customizable from '../../images/icon-fully-customizable.svg';

const Advanced: React.FC = () => {
  return (
    <section className="advanced">
      <div className="advanced__header">
        <h1 className="advanced__title">Advanced Statistics</h1>
        <p className="advanced__text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="advanced__graph">
        <div className="graph">
          <div className="graph__img">
            <img src={brand} alt="" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="graph">
          <div className="graph__img">
            <img src={detailed} alt="" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Detailed Records Gain insights into who is clicking your links.
            Knowing when and where people engage with your content helps inform
            better decisions.
          </p>
        </div>

        <div className="graph">
          <div className="graph__img">
            <img src={customizable} alt="" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advanced;
