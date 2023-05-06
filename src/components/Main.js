  import React from "react";
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  import SampleResume1 from './assets/sample1.jpg';
  import SampleResume2 from "./assets/sample2.jpg";
  import SampleResume3 from "./assets/sample3.jpg";

  function Main() {
    return (
      <main className="main">
        <div className="carousel-root">
          <Carousel showArrows={true} autoPlay={true} interval={1500} infiniteLoop={true}  showThumbs={false} style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
          {/* transitionTime={0} */}
            <div>
              <img src={SampleResume1} alt="Sample Resume 1" />
            </div>
            <div>
              <img src={SampleResume2} alt="Sample Resume 2" />
            </div>
            <div>
              <img src={SampleResume3} alt="Sample Resume 3" />
            </div>
          </Carousel>
        </div>

        <div className="main-content">
          <h1>Welcome to the Resume Builder</h1>
          <p>Create your resume in minutes</p>
          <button className="cta-btn">Create a new CV</button>
        </div>
      </main>
    );
  }


  export default Main;
