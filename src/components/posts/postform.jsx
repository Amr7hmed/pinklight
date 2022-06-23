import React from "react";
import SalesDetails from "./salesdetails";
import InputImgUpload from "../../images/icon/img-upload.svg";

export function DressForm() {
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
          <h2>تفاصيل الأعلان</h2>
        </div>

        <div className="details__form">
          <div className="form-group">
            <label>عنوان المنتج</label>
            <input
              type="text"
              className="form-control"
              placeholder="اكتب هنا اسم مميز للمنتج الذى تريد بيعه"
            />
          </div>

          <div className="form-group">
            <label>وصف المنتج/ اختيارى </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="اكتب هنا اسم وصف مميز للمنتج الذى تريد بيعه"
            ></textarea>
          </div>

          <div className="form-group">
            <div>
              <label> حالة المنتج</label>
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox1"
                />
                جديد
              </label>

              <label className="form-check-label" htmlFor="inlineCheckbox2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox2"
                />
                مستعمل
              </label>

              <label className="form-check-label" htmlFor="inlineCheckbox3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox3"
                />
                هديه / تبرع
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>السعر</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="اكتب هنا السعر"
              />
              <span>ر.س</span>
              <div className="input-redio-price">
                <label className="form-check-label" htmlFor="inlineprice1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="inlineprice1"
                  />
                  قابل للتفاوض
                </label>

                <label className="form-check-label" htmlFor="inlineprice1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="inlineprice1"
                  />
                  غير قابل للتفاوض
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>الألوان المتاحه</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="أحمر - أزرق - أسود"
              />
            </div>
          </div>

          <div className="form-group">
            <label> المقاسات المتاحه</label>
            <div className="size">
              <span>
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  defaultValue="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  S
                </label>
              </span>

              <span>
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  M
                </label>
              </span>

              <span>
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  L
                </label>
              </span>

              <span>
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  XL
                </label>
              </span>
            </div>
          </div>

          <div className="form-group">
            <label> الماركه</label>
            <div className="price">
              <input type="text" className="form-control" placeholder="شى إن" />
            </div>
          </div>

          <div className="form-group">
            <label> المدينه / المنطقه</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="الرياض"
              />
            </div>
          </div>

          <div className="form-proudect">
            <h6>تحميل صور المنتج </h6>
            <div className="form-proudect_imgs">
              <div className="left">
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
              </div>
              <div className="righet">
                <div className="righet-img">
                  <img src={InputImgUpload} alt="" />

                  <span>
                  يمكنك تحميل واجهة الإعلان هنا
                  </span>
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SalesDetails />
      <button className="btn">نشر الاعلان</button>
    </section>
  );
}



export function BigForm() {
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
          <h2>تفاصيل الأعلان</h2>
        </div>

        <div className="details__form">
          <div className="form-group">
            <label>عنوان المنتج</label>
            <input
              type="text"
              className="form-control"
              placeholder="اكتب هنا اسم مميز للمنتج الذى تريد بيعه"
            />
          </div>

          <div className="form-group">
            <label>وصف المنتج/ اختيارى </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="اكتب هنا اسم وصف مميز للمنتج الذى تريد بيعه"
            ></textarea>
          </div>

          <div className="form-group">
            <div>
              <label> حالة المنتج</label>
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox1"
                />
                جديد
              </label>

              <label className="form-check-label" htmlFor="inlineCheckbox2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox2"
                />
                مستعمل
              </label>

              <label className="form-check-label" htmlFor="inlineCheckbox3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox3"
                />
                هديه / تبرع
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>السعر</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="اكتب هنا السعر"
              />
              <span>ر.س</span>
              <div className="input-redio-price">
                <label className="form-check-label" htmlFor="inlineprice1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="inlineprice1"
                  />
                  قابل للتفاوض
                </label>

                <label className="form-check-label" htmlFor="inlineprice1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="inlineprice1"
                  />
                  غير قابل للتفاوض
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>الألوان المتاحه</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="أحمر - أزرق - أسود"
              />
            </div>
          </div>


          <div className="form-group">
            <label> الماركه</label>
            <div className="price">
              <input type="text" className="form-control" placeholder="شى إن" />
            </div>
          </div>

          <div className="form-group">
            <label> المدينه / المنطقه</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="الرياض"
              />
            </div>
          </div>

          <div className="form-proudect">
            <h6>تحميل صور المنتج </h6>
            <div className="form-proudect_imgs">
              <div className="left">
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
              </div>
              <div className="righet">
                <div className="righet-img">
                  <img src={InputImgUpload} alt="" />

                  <span>
                  يمكنك تحميل واجهة الإعلان هنا
                  </span>
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SalesDetails />
      <button className="btn">نشر الاعلان</button>
    </section>
  );
}


export function AccessoriesForm() {
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
          <h2>تفاصيل الأعلان</h2>
        </div>

        <div className="details__form">
          <div className="form-group">
            <label>عنوان المنتج</label>
            <input
              type="text"
              className="form-control"
              placeholder="اكتب هنا اسم مميز للمنتج الذى تريد بيعه"
            />
          </div>

          <div className="form-group">
            <label>وصف المنتج/ اختيارى </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="اكتب هنا اسم وصف مميز للمنتج الذى تريد بيعه"
            ></textarea>
          </div>

          <div className="form-group">
            <div>
              <label> حالة المنتج</label>
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox1"
                />
                جديد
              </label>

              <label className="form-check-label" htmlFor="inlineCheckbox2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox2"
                />
                مستعمل
              </label>

              <label className="form-check-label" htmlFor="inlineCheckbox3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox3"
                />
                هديه / تبرع
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>السعر</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="اكتب هنا السعر"
              />
              <span>ر.س</span>
              <div className="input-redio-price">
                <label className="form-check-label" htmlFor="inlineprice1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="inlineprice1"
                  />
                  قابل للتفاوض
                </label>

                <label className="form-check-label" htmlFor="inlineprice1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="inlineprice1"
                  />
                  غير قابل للتفاوض
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>الألوان المتاحه</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="أحمر - أزرق - أسود"
              />
            </div>
          </div>


          <div className="form-group">
            <label> الماركه</label>
            <div className="price">
              <input type="text" className="form-control" placeholder="شى إن" />
            </div>
          </div>

          <div className="form-group">
            <label> المدينه / المنطقه</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="الرياض"
              />
            </div>
          </div>

          <div className="form-proudect">
            <h6>تحميل صور المنتج </h6>
            <div className="form-proudect_imgs">
              <div className="left">
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
              </div>
              <div className="righet">
                <div className="righet-img">
                  <img src={InputImgUpload} alt="" />

                  <span>
                  يمكنك تحميل واجهة الإعلان هنا
                  </span>
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SalesDetails />
      <button className="btn">نشر الاعلان</button>
    </section>
  );
}


export function OuerForm() {
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
          <h2>تفاصيل الأعلان</h2>
        </div>

        <div className="details__form">
          <div className="form-group">
            <label>عنوان المنتج</label>
            <input
              type="text"
              className="form-control"
              placeholder="اكتب هنا اسم مميز للمنتج الذى تريد بيعه"
            />
          </div>

          <div className="form-group">
            <label>وصف المنتج/ اختيارى </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="اكتب هنا اسم وصف مميز للمنتج الذى تريد بيعه"
            ></textarea>
          </div>

          <div className="form-group">
            <div>
              <label> حالة المنتج</label>
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox1"
                />
                جديد
              </label>

              <label className="form-check-label" htmlFor="inlineCheckbox2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox2"
                />
                مستعمل
              </label>

              <label className="form-check-label" htmlFor="inlineCheckbox3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stuties"
                  id="inlineCheckbox3"
                />
                هديه / تبرع
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>السعر</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="اكتب هنا السعر"
              />
              <span>ر.س</span>
              <div className="input-redio-price">
                <label className="form-check-label" htmlFor="inlineprice1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="inlineprice1"
                  />
                  قابل للتفاوض
                </label>

                <label className="form-check-label" htmlFor="inlineprice1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="price"
                    id="inlineprice1"
                  />
                  غير قابل للتفاوض
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>الألوان المتاحه</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="أحمر - أزرق - أسود"
              />
            </div>
          </div>


          <div className="form-group">
            <label> الماركه</label>
            <div className="price">
              <input type="text" className="form-control" placeholder="شى إن" />
            </div>
          </div>

          <div className="form-group">
            <label> المدينه / المنطقه</label>
            <div className="price">
              <input
                type="text"
                className="form-control"
                placeholder="الرياض"
              />
            </div>
          </div>

          <div className="form-proudect">
            <h6>تحميل صور المنتج </h6>
            <div className="form-proudect_imgs">
              <div className="left">
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
                <div className="item">
                  <span><img src={InputImgUpload} alt="" />
                  <input type="file" />
                  </span>
                </div>
              </div>
              <div className="righet">
                <div className="righet-img">
                  <img src={InputImgUpload} alt="" />

                  <span>
                  يمكنك تحميل واجهة الإعلان هنا
                  </span>
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SalesDetails />
      <button className="btn">نشر الاعلان</button>
    </section>
  );
}