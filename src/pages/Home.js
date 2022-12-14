import React from "react";
import GetConsultationSection from "../components/GetConsultationSection";
import IntroducingTextSection from "../components/IntroducingTextSection";
import AdvantagesSection from "../components/AdvantagesSection";
import ServicesSection from "../components/ServicesSection";
import ConsultationRegistrationSection from "../components/ConsultationRegistrationSection";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";
import FlatsPreview from "../components/FlatsPreview";

const Home = () => {
  return (
    <>
      <GetConsultationSection backgroundColor="bg-fuchsia-50" />
      <IntroducingTextSection backgroundColor="bg-rose-50" />
      <AdvantagesSection backgroundColor="bg-white" />
      <ServicesSection backgroundColor="bg-rose-50" />
      <FlatsPreview backgroundColor="bg-rose-50" />
      <ConsultationRegistrationSection backgroundColor="bg-white" />
      <ReviewsSection backgroundColor="bg-rose-50" />
      <Footer backgroundColor="bg-white" />
    </>
  );
};

export default Home;
