import React, { Fragment } from "react";
import "./SkillTest.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SkillTest.css";

const SkillTest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <div className="main-container">
        <div className="navbar">
          <div className="left-side">
            <div src="icon" className="icon" />
            <a href="#home-container ">
              <ul className="title">
                <li>Minnewaska</li>
                <li>State Park Preserve</li>
              </ul>{" "}
            </a>
          </div>
          <div className="right-side">
            <a href="#history-container">
              <button className="history">01. History</button>
            </a>
            <button className="team">02. Team</button>
          </div>
        </div>

        <ul id="home-container" className="home-container">
          <li className="home-title">Minnewaska</li>
          <li className="home-title">State Park Preserve</li>
        </ul>
      </div>

      <div id="history-container" className="history-container">
        <div className="navbar">
          <div className="left-side">
            <div src="icon" className="icon" />
            <a href="#home-container ">
              <ul className="title">
                <li>Minnewaska</li>
                <li>State Park Preserve</li>
              </ul>{" "}
            </a>
          </div>

          <div className="right-side">
            <a href="#history-container">
              <button className="history">01. History</button>
            </a>
            <button className="team">02. Team</button>
          </div>
        </div>
        <h2 class="history-title">
          <span>01.</span>
          <span class="history-text">HISTORY</span>
        </h2>
        <p className="history-bio">
          "Discover Minnewaska State Park Preserve, a stunning 22,000-acre park
          in New York's Shawangunk Mountains. Since 1957, it has provided
          endless outdoor activities for hikers, rock climbers, swimmers, and
          fishermen. Alfred Smiley's early 19th-century land donation created
          this natural gem, drawing visitors from around the world."
        </p>

        
        <Slider className="carousel" {...settings}>
          <div>
            <img src="https://www.travelingfoundlove.com/wp-content/uploads/2021/10/Hiking-in-Hudson-Valley-18.jpg" alt="Carousel Image 1" className="carousel-image" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI01GM33uqaiBJh4eBBQHqStm-1QyNhxHPauwEFr9Fng&usqp=CAU&ec=48600113" alt="Carousel Image 2"  className="carousel-image"/>
          </div>
          <div>
            <img src="https://scenichudson.org/wp-content/uploads/2020/03/scenichudson_72373420-1400x1019.jpg" alt="Carousel Image 3" className="carousel-image"/>
          </div>

          <div>
            <img src="https://scenichudson.org/wp-content/uploads/2020/03/scenichudson_72373420-1400x1019.jpg" alt="Carousel Image 3" className="carousel-image"/>
          </div>

          <div>
            <img src="https://scenichudson.org/wp-content/uploads/2020/03/scenichudson_72373420-1400x1019.jpg" alt="Carousel Image 3" className="carousel-image"/>
          </div>

          <div>
            <img src="https://scenichudson.org/wp-content/uploads/2020/03/scenichudson_72373420-1400x1019.jpg" alt="Carousel Image 3" className="carousel-image"/>
          </div>

          <div>
            <img src="https://scenichudson.org/wp-content/uploads/2020/03/scenichudson_72373420-1400x1019.jpg" alt="Carousel Image 3" className="carousel-image"/>
          </div>

          <div>
            <img src="https://scenichudson.org/wp-content/uploads/2020/03/scenichudson_72373420-1400x1019.jpg" alt="Carousel Image 3" className="carousel-image"/>
          </div>

        </Slider>
      </div>

      <div className="climb-container">
        {" "}
        <h1 className="climb">
          <span>02.</span> CLIMB
        </h1>
      </div>
    </Fragment>
  );
};

export default SkillTest;
