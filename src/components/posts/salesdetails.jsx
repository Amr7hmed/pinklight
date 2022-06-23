import React from "react";
import Manimg from "../../images/icon/salse-man.svg";
function SalesDetails() {
  return (
    <div className="salesdetails">
      <h6>راجع التفاصيل الخاصه بك</h6>

      <div>

        <div class="form-group form-group-username">
          <img src={Manimg} alt="" />
          <input type="text" class="form-control" placeholder="اسم المستخدم" />
        </div>

        
        <div class="form-group">
          <input type="text" class="form-control" placeholder="رقم الجوال/اختيارى" />
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="التوقيع" />
        </div>
      </div>
    </div>
  );
}

export default SalesDetails;
