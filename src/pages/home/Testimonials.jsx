import capterra from "/capterra-logo.png";
import blueStar from "/blue-star.png";
import user1 from "/user1.png";
import user2 from "/user2.png";
import user3 from "/user3.png";

import { Rating } from "../../components";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="site-width">
        <h2>What people are saying about LeadCRM</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p>
              “Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“
            </p>
            <div className="logo-rating">
              <span>
                <img src={capterra} alt="capterra logo" />
              </span>
              <span>
                <Rating count="5" src={blueStar} />
              </span>
            </div>
            <div className="user-info">
              <img src={user1} alt="user 1" />
              <span>
                <h6>David Fincher</h6>
                <p>On Capterra</p>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              “My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”
            </p>
            <div className="logo-rating">
              <span>
                <img src={capterra} alt="capterra logo" />
              </span>
              <span>
                <Rating count="5" src={blueStar} />
              </span>
            </div>
            <div className="user-info">
              <img src={user2} alt="user 2" />
              <span>
                <h6>Lillian Williams</h6>
                <p>On Capterra</p>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              “Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“
            </p>
            <div className="logo-rating">
              <span>
                <img src={capterra} alt="capterra logo" />
              </span>
              <span>
                <Rating count="5" src={blueStar} />
              </span>
            </div>
            <div className="user-info">
              <img src={user3} alt="user 3" />
              <span>
                <h6>Michael</h6>
                <p>On Capterra</p>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              “It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.“
            </p>
            <div className="logo-rating">
              <span>
                <img src={capterra} alt="capterra logo" />
              </span>
              <span>
                <Rating count="4" src={blueStar} />
              </span>
            </div>
            <div className="user-info">
              <img src={user1} alt="user 1" />
              <span>
                <h6>John Doe</h6>
                <p>On Capterra</p>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              “It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It has survived not only five centuries, also the leap into electronic typesetting”
            </p>
            <div className="logo-rating">
              <span>
                <img src={capterra} alt="capterra logo" />
              </span>
              <span>
                <Rating count="5" src={blueStar} />
              </span>
            </div>
            <div className="user-info">
              <img src={user2} alt="user 2" />
              <span>
                <h6>Donald Vance</h6>
                <p>On Capterra</p>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section >
  )
}
