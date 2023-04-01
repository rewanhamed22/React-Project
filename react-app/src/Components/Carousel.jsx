import React from "react";

const Carousel = () => {
  return (
    <>
       <div className="carousel  carousel-center  h-80 rounded-box">
        <div className="carousel-item">
          <img src="src/assets/1.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/3.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/4.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/1.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/3.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/4.jpg" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="src/assets/3.jpg" alt="Pizza" />
        </div>
      </div>
      {/* <div className="carousel w-full h-81">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="src/assets/1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="src/assets/3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="src/assets/4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-vector/introversion-agoraphobia-public-spaces-phobia-mental-illness-stress-social-anxiety-disorder-anxiety-screening-test-anxiety-attack-concept-pinkish-coral-bluevector-isolated-illustration_335657-1502.jpg?w=900&t=st=1679972119~exp=1679972719~hmac=da2f9c4e25b460451d5bbf91efc73ff5f5c662b13f24f832f161b5e83b20f354"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Carousel;
