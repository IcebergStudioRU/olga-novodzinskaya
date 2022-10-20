import React, { useState, useEffect } from "react";
import Section from "./Section";
import Header2 from "./Header2";
import Review from "./Review";
import SelectingButton from "./SelectingButton";

const ReviewsSection = ({ backgroundColor }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [reviews] = useState([
    {
      id: 0,
      name: "Анна Козловская1",
      comment:
        "Отличная работа! По срокам  все получилось точно, как планировали при заключении договора.",
    },
    {
      id: 1,
      name: "Анна Козловская2",
      comment:
        "Отличная работа! По срокам  все получилось точно, как планировали при заключении договора.",
    },
    {
      id: 2,
      name: "Анна Козловская3",
      comment:
        "Отличная работа! По срокам  все получилось точно, как планировали при заключении договора.",
    },
  ]);

  useEffect(() => {
    adaptSection();
    window.addEventListener("resize", adaptSection);
  }, []);

  function adaptSection() {
    const windowWidth = document.documentElement.clientWidth;
    const mobileWidth = windowWidth <= 480;

    if (mobileWidth && !isMobile) {
      setIsMobile(true);
      setSelectedReview(reviews[0]);
    } else {
      setIsMobile(false);
      setSelectedReview(null);
    }
  }

  return (
    <Section backgroundColor={backgroundColor} className="pt-5 pb-7 gap-y-10">
      <Header2 color="text-red-300">Отзывы</Header2>
      <div className="flex flex-col">
        {isMobile && selectedReview ? (
          <>
            <Review {...selectedReview} />
            <div className="flex justify-center">
              {reviews.map((review) => (
                <SelectingButton
                  key={`review-button-${review.id}`}
                  onClick={() => setSelectedReview(review)}
                  isActive={selectedReview.id === review.id}
                  defaultColor="bg-red-200"
                  activeColor="bg-red-300"
                />
              ))}
            </div>
          </>
        ) : (
          reviews.map((review) => <Review key={review.id} {...review} />)
        )}
      </div>
    </Section>
  );
};

export default ReviewsSection;
