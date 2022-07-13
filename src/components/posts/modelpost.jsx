import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Modelpost(props) {
  const { vispiltymodule , Hidemodule } = props;
  const [checked, setChecked] = useState(false);
  return (
    <section className={"modelpost " + vispiltymodule}>
      <div className="modelpost__contener">
        <h4>سياسة الاستخدام ونموذج التعهد</h4>
        <p>
          توضح سياسة الخصوصيه كيفية جمع معلوماتك الشخصيه واستخدامها ومشاركتها
          ومعالجتها عند الوصول الى الموقع هذا او استخدام الخدمات الأخرى بما في
          ذلك اى اتصالات ومشتريات مكتوبه او الكترونيه يتم اجراؤها
        </p>
        <p>
          بالاضافه الى الحقوق والاختيارات التي قمت بربطها بهه المعلومات يرجى
          قراءه الشروط والاحكام الخاصه بنا وهذه السياسه قبل الوصول الى خدمتنا او
          استخدامها اذا كنت لا توافق على هذه السياسه او الشروط والاحكام فيرجى
          عدم الوصول الى خدمتنا او استخدامها
        </p>

        <div className="modelpost__checkbox">
          <input type="checkbox" value="lsRememberMe" id="rememberMe" 
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}/>
          <label htmlFor="rememberMe">
            أوافق على هذه الشروط والاحكام وسياسة الخصوصيه
          </label>
        </div>

        <div className="modelpost__buttons">
          <NavLink to="/post" className={checked === false ?"button-disabled btn button-right":"button-active btn button-right"} onClick={Hidemodule}>
            المتابعه
          </NavLink>
          <button className="btn button-left" onClick={Hidemodule}>إلغاء</button>
        </div>
      </div>
    </section>
  );
}

export default Modelpost;
