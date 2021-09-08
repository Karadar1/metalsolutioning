import React, { useContext } from "react";
import BtnSlider from "./BtnSlider";
import { SliderData } from "../utils/Constants";
import { SlideContext } from "../layout/Body";
export function Slider() {
  const { slideIndex, setSlideIndex } = useContext(SlideContext);

  const nextSlide = () => {
    if (slideIndex === SliderData.length - 1) return setSlideIndex(0);
    return setSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (slideIndex === 0) return setSlideIndex(SliderData.length - 1);
    return setSlideIndex((prev) => prev - 1);
  };

  //   const moveDot = (index) => {
  //     setSlideIndex(index);
  //   };

  return (
    <div className="carouselContainer">
      <h2>{SliderData[slideIndex].title}</h2>
      <div className="container-slider">
        {SliderData.map((obj, index) => {
          return (
            <div
              key={index}
              className={slideIndex === index ? "slide active-anim" : "slide"}
            >
              <img src={obj.img} />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        {/* <div className='container-dots'>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      To be implemented
      </div> */}{" "}
      </div>
    </div>
  );
}
