import { useState } from "react";

export const useSwiperTouch = (length) => {
  const [touch, setTouch] = useState(0);
  const [untouch, setUntouch] = useState(0);
  const [objectNumber, setObjectNumber] = useState(0);

  const moveObject = () => {
    if (untouch === 0) {
      return;
    }
    if (touch > untouch) {
      if (touch - untouch < 30) {
        return;
      } else if (length - 1 > objectNumber) {
        setObjectNumber((prev) => {
          return prev + 1;
        });
      } else {
        setObjectNumber(0);
      }
    }
    if (touch < untouch) {
      if (touch - untouch > -30) {
        return;
      } else if (0 < objectNumber) {
        setObjectNumber((prev) => {
          return prev - 1;
        });
      } else {
        setObjectNumber(length - 1);
      }
    }
    setTouch(0);
    setUntouch(0);
  };

  const touchStart = (e) => {
    const x1 = Math.round(e.touches[0].clientX);
    setTouch(x1);
  };

  const touchMove = (e) => {
    const x2 = Math.round(e.touches[0].clientX);
    setUntouch(x2);
  };

  const changeObjectNumber = (imageNumber) => {
    setObjectNumber(imageNumber);
  };

  const changeObjectRight = () => {
    if (length - 1 > objectNumber) {
      setObjectNumber((prev) => {
        return prev + 1;
      });
    } else {
      setObjectNumber(0);
    }
  };

  const changeObjectLeft = () => {
    if (0 < objectNumber) {
      setObjectNumber((prev) => {
        return prev - 1;
      });
    } else {
      setObjectNumber(length - 1);
    }
  };

  return [
    objectNumber,
    touchStart,
    touchMove,
    moveObject,
    changeObjectNumber,
    changeObjectRight,
    changeObjectLeft,
  ];
};
