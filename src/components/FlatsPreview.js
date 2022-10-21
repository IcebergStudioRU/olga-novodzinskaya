import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FlatsPreview.css";
//CONTEXT
import { GlobalContext } from "../GlobalContextComponent";
import { useSwiperTouch } from "../hooks/Swiper";
//SVG
import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import { ReactComponent as Bed } from "../assets/bed.svg";
import { ReactComponent as Door } from "../assets/door.svg";
import { ReactComponent as Bath } from "../assets/bath.svg";
import { ReactComponent as ViewAll } from "../assets/viewAllicon.svg";

const FlatsPreview = () => {
  const { realEstate, viewPort } = useContext(GlobalContext);
  const [activeRealEstateNumber, setActiveRealEstateNumber] = useState(0);
  const [sliderContainerPx, setSliderContainerPx] = useState(0);
  const [
    realEstateNumber,
    touchStart,
    touchMove,
    moveRealEstate,
    changeRealEstateNumber,
    changeObjectRight,
    changeObjectLeft,
  ] = useSwiperTouch(realEstate.length - activeRealEstateNumber);

  useEffect(() => {
    let px;
    let number;
    if (viewPort === "mobile") {
      px = -240;
      number = 0;
    } else if (viewPort === "tablet") {
      px = -340;
      number = 1;
    } else {
      px = -370;
      number = 2;
    }
    setSliderContainerPx(px);
    setActiveRealEstateNumber(number);
  }, [viewPort]);
  return (
    <div id="FlatsPrewiew">
      <div className="mx-auto mb:pt-10 mb:px-5 mb:pb-10 mb:flex mb:flex-col mb:max-w-mobileContainer  mb:items-center tl:max-w-none tl:w-768 dt:w-1200">
        <h2 className="font-medium text-black font-Montserrat mb:text-2xl mb:text-center mb:mb-8 tl:text-3xl tl:text-left tl:mb-12 dt:text-4xl">
          Объекты
        </h2>
        <div className="relative">
          <div
            onClick={changeObjectLeft}
            className="absolute w-12 h-12 -left-14 top-48 mb:hidden dt:block"
          >
            <ArrowLeft />
          </div>
          <div className="relative overflow-hidden mb:w-240 mb:h-320 mb:mb-3 tl:w-640 tl:h-400 tl:mb-5 dt:w-1070 dt:h-440 dt:mb-8">
            <ul
              onTouchStart={(e) => touchStart(e)}
              onTouchMove={(e) => touchMove(e)}
              onTouchEnd={() => moveRealEstate()}
              className="absolute flex"
              style={{
                left: `${sliderContainerPx * realEstateNumber}px`,
                transition: "0.8s",
              }}
            >
              {realEstate.map((realEstate, index) => (
                <li
                  key={index}
                  className="card mb:w-240 mb:h-320 tl:w-300 tl:h-400 tl:mr-10 dt:w-330 dt:h-440"
                  id={`flatNumber${index}`}
                >
                  <div className="wrapper overflow-hidden relative mb:h-320 tl:h-400 dt:h-440">
                    <img
                      src={realEstate.images[0]}
                      alt="flat1"
                      className="w-100% h-100% object-cover"
                    />

                    <div className="overlay absolute bg-flatsAddressBg w-100% h-100% left-0 mb:top-240 tl:top-300 dt:top-330">
                      <div className="mb:pt-6 tl:pt-8 dt:pt-9 mb-10">
                        <p className="text-white font-Montserrat text-center mb:text-2xl tl:text-3xl dt:text-4xl  ">
                          {realEstate.address.city}
                        </p>
                      </div>
                      <p className="text-white font-Montserrat text-center mb:text-xl mb:mb-6 tl:text-2xl dt:text-3xl tl:mb-12">
                        {realEstate.price}$
                      </p>

                      <div className="flex justify-center">
                        <div className="flex flex-col items-center mb:mr-4 tl:mr-6 dt:mr-8">
                          <Bed className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16 " />
                          <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                            {realEstate.rooms} bed
                          </p>
                        </div>
                        <div className="flex flex-col items-center mb:mr-4 tl:mr-6 dt:mr-8">
                          <Door className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16" />
                          <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                            {realEstate.rooms} rooms
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <Bath className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16" />
                          <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                            {realEstate.rooms} bath
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 flex justify-center items-center w-full ">
                        <Link
                          to={`/flat/${realEstate.id}`}
                          className="seeMoreLink"
                        >
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center items-center">
            {realEstate
              .filter(
                (item, index, array) =>
                  index + activeRealEstateNumber < array.length
              )
              .map((bullet, index) => (
                <div
                  className={
                    index === realEstateNumber
                      ? "flatsPreview_active-bullet"
                      : "flatsPreview_bullet"
                  }
                  onClick={() => {
                    changeRealEstateNumber(index);
                  }}
                ></div>
              ))}
          </div>
          <div
            onClick={changeObjectRight}
            className="absolute w-12 h-12 -right-14 top-48 mb:hidden dt:block"
          >
            <ArrowRight />
          </div>
        </div>

        <div className="mb:pt-10 tl:pt-14 dt:pt-18">
          <a
            className="font-Montserrat mb:text-2xl tl:text-3xl flex flex-col items-center"
            id="Review"
          >
            View All
            <ViewAll />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlatsPreview;
