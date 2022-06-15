import React, { useRef, useState } from "react";
import Img1 from "../../images/product/img-1.webp";
import Img2 from "../../images/product/img-2.png";
import Img3 from "../../images/product/img-3.png";
import Img4 from "../../images/product/img-4.png";
import Img5 from "../../images/product/img-5.png";
import Img6 from "../../images/product/img-6.png";
import Imglist from "./Imglist";
import ProudectContent from "./proudectcontent";

function Proudectitem() {
  const Images = [Img1, Img2, Img3, Img4, Img5, Img6];

  const imgDiv=useRef();
  const handleMouseMove=e=>{
      const {left,top,width,height}=e.target.getBoundingClientRect();
      const x = (e.pageX - left) / width * 100;
      const y = (e.pageY - top) / height * 100;
      imgDiv.current.style.backgroundPosition=`${x}% ${y}%`;
      imgDiv.current.style.backgroundSize=`auto`;
  }
  const handleMouseLeave=()=>{
      imgDiv.current.style.backgroundSize=`cover`;
      imgDiv.current.style.backgroundPosition=`center`;
  }
  const [index, setindex] = useState(0);

  return (
    <section className="proudect__item">
      <Imglist Images={Images} setindex={setindex} />
      <div
        className="proudect__cover"
        onMouseMove={handleMouseMove} ref={imgDiv} 
        onMouseLeave={()=>handleMouseLeave()}
           style={{backgroundImage:`url(${Images[index]})`}}/>
      <ProudectContent
        Title={"فستان برباط امامى باكمام فانوس بعنق مربع"}
        Price={"76.00"}
      />
    </section>
  );
}

export default Proudectitem;
