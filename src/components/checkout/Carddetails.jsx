import React from "react";

function Carddetails() {
  return (
    <section className="carddetails">
      <h3>تفاصيل البطاقه</h3>

      <div className="carddetails__form">
        <form>
          <div class="row">
            <div class="col-sm-12 col-md-8 mb_20">
              <input
                type="text"
                class="form-control"
                placeholder="اسم صاحب البطاقه*"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 mb_20">
              <input
                type="text"
                class="form-control"
                placeholder="رقم البطاقه*"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6 mb_20">
              <input
                type="text"
                class="form-control"
                placeholder="رمز الأمن*"
              />
            </div>
            <div class="col-sm-12 col-md-6 mb_20">
              <input
                type="text"
                class="form-control"
                placeholder="تاريخ انتهاء الصلاحيه*"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Carddetails;
