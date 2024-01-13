import "./plans.css";
import { plansData } from "../../data/plansData";
import tick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans" id="Plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="plans-heading">
        <div>
          <span className="stroke-text">ready to start</span>
        </div>
        <div>
          <span>your journey</span>
        </div>
        <div>
          <span className="stroke-text">now with us</span>
        </div>
      </div>
      <div className="plans-cards">
        {plansData.map((data, i) => (
          <div className="plans-card" key={i}>
            {data.icon}
            <span>{data.name}</span>
            <span>$ {data.price}</span>
            <div className="features">
              {data.features.map((feature, i) => (
                <div className="feature">
                  <img src={tick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benifits -</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
