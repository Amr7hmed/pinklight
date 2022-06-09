import React from "react";
import shipping from "../../images/icon/shipping.svg";
import money from "../../images/icon/money.svg";
import cash from "../../images/icon/cash.svg";

function Ourpolicy() {
  return (
    <section className="home__ourpolicy">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="card_item">
              <img src={shipping} alt="shipping" />
              <div className="content">
                <p>شحن مجانا</p>
                <span>لكل الطلبات التي قيمتها اكثر من 100 ر.س</span>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card_item">
              <img src={money} alt="money" />

              <div className="content">
                <p>استرجاع المال</p>
                <span>
                  في حالة وجود أي مشكله في المنتج يمكنك استرجاع اموالك
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card_item">
              <img src={cash} alt="cash" />

              <div className="content">
                <p>الدفع عند الاستلام</p>
                <span>يمكنك الان الدفع عند استلام المنتج</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourpolicy;
