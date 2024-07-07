import { useState, SyntheticEvent } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center px-5 my-5 bg-silver">
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false}>
        <Carousel.Item>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center">
            <div className="font-inter" data-aos="fade-right">
              <h1 className="text-gray-900 fw-semibold" style={{ fontSize: '3rem' }}>
                Lessons and insights&nbsp; <br />
                <span className="text-primary">from 8 years</span>
              </h1>
              <p className="text-gray-200 fw-light fs-6" style={{ paddingTop: "7px" }}>
                Where to grow your business as a photographer: site or social media?
              </p>
              <Button variant="primary text-white mt-4" size="lg">
                Register
              </Button>
            </div>
            <Image
              src="/HeroImg.svg"
              alt="Hero"
              height={0}
              width={0}
              className="h-auto w-auto mb-2 px-2"
              priority={true}
              data-aos="fade-left"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center">
            <div className="font-inter" data-aos="fade-right">
              <h1 className="text-gray-900 fw-semibold" style={{ fontSize: '3rem' }}>
                Another Insight&nbsp; <br />
                <span className="text-primary">from our experience</span>
              </h1>
              <p className="text-gray-200 fw-light fs-6" style={{ paddingTop: "7px" }}>
                Discover the best strategies for business growth.
              </p>
              <Button variant="primary text-white mt-4" size="lg">
                Learn More
              </Button>
            </div>
            <Image
              src="/HeroImg2.svg"
              alt="Hero"
              height={0}
              width={0}
              className="h-auto w-auto mb-2 px-2"
              priority={true}
              data-aos="fade-left"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center">
            <div className="font-inter" data-aos="fade-right">
              <h1 className="text-gray-900 fw-semibold" style={{ fontSize: '3rem' }}>
                Join our Community&nbsp; <br />
                <span className="text-primary">and Grow</span>
              </h1>
              <p className="text-gray-200 fw-light fs-6" style={{ paddingTop: "7px" }}>
                Connect with like-minded professionals and expand your network.
              </p>
              <Button variant="primary text-white mt-4" size="lg">
                Join Now
              </Button>
            </div>
            <Image
              src="/HeroImg3.svg"
              alt="Hero"
              height={0}
              width={0}
              className="h-auto w-auto mb-2 px-2"
              priority={true}
              data-aos="fade-left"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="d-flex justify-content-center mt-3">
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            onClick={() => setIndex(idx)}
            className={`circle-indicator ${index === idx ? 'active' : ''}`}
          />
        ))}
      </div>
      <style jsx>{`
        .circle-indicator {
          width: 10px;
          height: 10px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
        }
        .circle-indicator.active {
          background-color: #717171;
        }
      `}</style>
    </Container>
  );
};

export default Hero;
