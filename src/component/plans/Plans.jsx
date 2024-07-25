import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './plans.css';

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>
      {/* Plans card */}
      <div className="plans" id="plans">
        {plansData.map((plan) => (
          <div className="plan" key={plan.name}> {/* Assuming `name` is unique */}
            {plan.icon} {/* Ensure this is a valid React component or element */}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}> {/* Key added here */}
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits --{'>'} </span>
              <button className='btn'>Join now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
