import React from "react";
import Visaimg from "../../images/icon/vise-payment.svg";
import Carddetails from "./Carddetails";

function Paymentform(props) {
    const { handleCash , isCash , ActiveCash , ActiveCVisa ,handleVisa,isVisa}=props;
  return (
    <section className="paymentpage__form">
      <h3>طريقة الدفع</h3>

      <div className="form">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="cash"
            checked={isCash}
            onChange={handleCash}
          />

          <label class={"form-check-label "+ActiveCash} for="exampleRadios1">
            <span className="img">
                <img src={Visaimg} alt="" />
            </span>
            <span className="text">الدفع عند الاستلام</span>
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="visa"
            checked={isVisa}
            onChange={handleVisa}
          />

          <label class={"form-check-label "+ActiveCVisa} for="exampleRadios2">
            <span className="img">
                <img src={Visaimg} alt="" />
            </span>
            <span className="text">الدفع عن طريق بطاقه الائتمان</span>
          </label>
        </div>

        {isVisa ? <Carddetails/> :" " }
        
      </div>
    </section>
  );
}

export default Paymentform;
