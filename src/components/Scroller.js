import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Scroller.css";
import { Navigation } from "swiper";

export default function Scroller() {
  return (
    <div className="scroller-container">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            Phase 0 <br/><br/>
            - Initial MVPs<br/>  - Website + socials<br/> - Token Stealth launch<br/>
        </SwiperSlide>
        <SwiperSlide>
            Phase 1 <br/><br/>
            - New Token finder powered by AI<br/>  - Community activations<br/>  - Partnerships with existing crypto<br/>    communities<br/>  - Utility token integration<br/>
        </SwiperSlide> <SwiperSlide>
            Phase 2 <br/><br/>
            - Major brand partnerships<br/> - AI powered NFT bot<br/> - Full scale degen web application<br/> - Expand revenue model<br/>
        </SwiperSlide> <SwiperSlide>
            Phase 3 <br/><br/>
            - Increase business revenue<br/>- More major partnerships<br/>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
