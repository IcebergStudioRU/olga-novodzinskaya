import React from "react";
import Header1 from "./Header1";
import Header3 from "./Header3";
import FamilyImg from "./../assets/screen-family.png";
import GradientButton from "./GradientButton";
import Header from "./Header";
import Section from "./Section";

const GetConsultationSection = ({ backgroundColor }) => {
  return (
    <Section backgroundColor={backgroundColor} className="h-screen">
      <Header />
      <div
        className={`
          w-40
          absolute left-6 bottom-1/3 z-10
          flex flex-col items-center gap-5
          text-center
        `}
      >
        <div className="flex flex-col items-center text-center w-40 gap-1">
          <Header1 color="text-orange-400">Семейный</Header1>
          <Header3 color="text-neutral-500">риелтор</Header3>
        </div>
        <GradientButton type="button">Бесплатная консультация</GradientButton>
      </div>
      <img
        className="absolute bottom-0 right-0 mb:max-w-380 tl:max-w-650"
        src={FamilyImg}
      />
    </Section>
  );
};

export default GetConsultationSection;
