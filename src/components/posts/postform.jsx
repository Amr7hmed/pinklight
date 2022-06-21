import React from "react";
import SalesDetails from "./salesdetails";

function PostForm() {
  return (
    <section className="post__form">
      <div className="form-group selectbox">
        <label>اختر الفئه الفرعيه</label>
        <select className="form-control">
          <option selected>النوع</option>
          <option>...</option>
          <option>...</option>
        </select>
      </div>

      <div className="post__details">
        <div className="header">
          <h1>تفاصيل الأعلان</h1>
        </div>

        <div className="details__form">
          <div class="form-group">
            <label>عنوان المنتج</label>
            <input
              type="text"
              class="form-control"
              placeholder="اكتب هنا اسم مميز للمنتج الذى تريد بيعه"
            />
          </div>

          <div class="form-group">
            <label>وصف المنتج/ اختيارى </label>
            <textarea
              class="form-control"
              rows="3"
              placeholder="اكتب هنا اسم وصف مميز للمنتج الذى تريد بيعه"
            ></textarea>
          </div>

          <div class="form-group">
            <label> حالة المنتج</label>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" htmlFor="inlineCheckbox1">
                جديد
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label class="form-check-label" htmlFor="inlineCheckbox2">
                مستعمل
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option2"
              />
              <label class="form-check-label" htmlFor="inlineCheckbox3">
                هديه / تبرع
              </label>
            </div>
          </div>

          <div class="form-group">
            <label>السعر</label>
            <div className="price">
              <input
                type="text"
                class="form-control"
                placeholder="اكتب هنا السعر"
              />
              <span>ر.س</span>
            </div>
          </div>

          <div class="form-group">
            <label>الألوان المتاحه</label>
            <div className="price">
              <input
                type="text"
                class="form-control"
                placeholder="أحمر - أزرق - أسود"
              />
            </div>
          </div>

          <div class="form-group">
            <label> المقاسات المتاحه</label>
            <div className="size">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" htmlFor="inlineRadio1">
                  S
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" htmlFor="inlineRadio2">
                  M
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" htmlFor="inlineRadio2">
                  L
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" htmlFor="inlineRadio2">
                  XL
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label> الماركه</label>
            <div className="price">
              <input type="text" class="form-control" placeholder="شى إن" />
            </div>
          </div>

          <div class="form-group">
            <label> المدينه / المنطقه</label>
            <div className="price">
              <input type="text" class="form-control" placeholder="الرياض" />
            </div>
          </div>

          <div className="form-proudect">
            <h6>تحميل صور المنتج </h6>
          </div>
        </div>
      </div>

      <SalesDetails />
      <button className="btn">
        نشر الاعلان
      </button>
    </section>
  );
}

export default PostForm;
