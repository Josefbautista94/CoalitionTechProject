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
      <div id="main-container" className="main-container">
        <div className="navbar">
          <div className="left-side">
            <div src="icon" className="icon" />
            <a href="#main-container ">
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

        <ul className="home-container">
          <li className="home-title">Minnewaska</li>
          <li className="home-title">State Park Preserve</li>
        </ul>
      </div>

      <div id="history-container" className="history-container">
        <div className="navbar">
          <div className="left-side">
            <div src="icon" className="icon" />
            <a href="#main-container ">
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
          Discover Minnewaska State Park Preserve, a stunning 22,000-acre park
          in New York's Shawangunk Mountains. Since 1957, it has provided
          endless outdoor activities for hikers, rock climbers, swimmers, and
          fishermen. Alfred Smiley's early 19th-century land donation created
          this natural gem, drawing visitors from around the world.
        </p>

        <Slider className="carousel" {...settings}>
          <div>
            <img
              src="https://www.travelingfoundlove.com/wp-content/uploads/2021/10/Hiking-in-Hudson-Valley-18.jpg"
              alt="Carousel Image 1"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI01GM33uqaiBJh4eBBQHqStm-1QyNhxHPauwEFr9Fng&usqp=CAU&ec=48600113"
              alt="Carousel Image 2"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="https://scenichudson.org/wp-content/uploads/2020/03/scenichudson_72373420-1400x1019.jpg"
              alt="Carousel Image 3"
              className="carousel-image"
            />
          </div>

          <div>
            <img
              src="https://weekendwanderer2016.files.wordpress.com/2019/11/dsc04052-2_hdr_marked.jpg"
              alt="Carousel Image 3"
              className="carousel-image"
            />
          </div>

          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5b46c539f79392287e58d958/1561602927555-SWZS68BI582G5ML9MIE7/IMG_1552.jpg"
              alt="Carousel Image 3"
              className="carousel-image"
            />
          </div>

          <div>
            <img
              src="https://townsquare.media/site/706/files/2022/03/attachment-Sams-Featured.jpg"
              alt="Carousel Image 3"
              className="carousel-image"
            />
          </div>

          <div>
            <img
              src="https://hikethehudsonvalley.com/images/stories/Sams_Point/samspoint33.jpg"
              alt="Carousel Image 3"
              className="carousel-image"
            />
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5sIQvV6gjV3xd1HcsPJ-jmpwRgOZ9AaZjyFBRN7LqA&usqp=CAU&ec=48600113"
              alt="Carousel Image 3"
              className="carousel-image"
            />
          </div>
        </Slider>
      </div>

      <div className="climb-container">
  <h1 className="climb">
    <span>02.</span> CLIMB
  </h1>
  <p className="climb-info">
    Gertrude's Nose and Sam's Point are two popular rock formations
    located in the Shawangunk Mountains in New York. Here are some short
    climbing-related facts about each:
  </p>
  <div className="climb-facts">
    <div className="climb-facts-section">
      <h2>Gertrude's Nose:</h2>
      <ul>
        <li>Gertrude's Nose is a prominent rock formation that offers panoramic views of the Hudson Valley.</li>
        <li>The cliff face is about 180 feet tall and offers a range of routes for climbers of different skill levels.</li>
        <li>Climbers often use traditional protection techniques such as cams and nuts to secure themselves while climbing.</li>
        <li>Some of the popular climbing routes on Gertrude's Nose include Wrist, Feather and Knee, Airy Aria, and City Lights.</li>
      </ul>
    </div>
    <div className="climb-facts-section">
      <h2>Sam's Point:</h2>
      <ul>
        <li>Sam's Point is another popular rock formation in the Shawangunk Mountains that offers challenging climbing routes.</li>
        <li>The cliffs here are much taller than those at Gertrude's Nose, with some sections reaching up to 400 feet.</li>
        <li>The routes at Sam's Point require advanced climbing skills and equipment such as ropes, harnesses, and anchors.</li>
        <li>Some of the popular climbing routes at Sam's Point include the Arrow, Old Route, and High Exposure.</li>
      </ul>
    </div>
  </div>
</div>
    </Fragment>
  );
};

export default SkillTest;
