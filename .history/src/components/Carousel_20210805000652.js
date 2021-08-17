import React, { useState } from "react";
import BtnSlider from "./BtnSlider";

export function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const SliderData = [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1623589510521-9f79d23a96f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1622495546323-5dac33dedb01?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1623786044920-98362da7a0f4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const nextSlide = () => {
    if (slideIndex !== SliderData.length) {
      setSlideIndex(slideIndex + 1);
    }
    //if the index equals to the photo array length set it to the first element in the array
    setSlideIndex(0);
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex((prev) => prev - 1);
    }
    setSlideIndex(SliderData.length - 1);
  };

  //   const moveDot = (index) => {
  //     setSlideIndex(index);
  //   };

  return (
    <div className="container-slider">
      {SliderData.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index ? "slide active-anim" : "slide"}
          >
            <img src={SliderData[slideIndex].img} />
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
  );
}
