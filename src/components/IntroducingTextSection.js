import React from "react";
import { ReactComponent as OlgaPhoto } from "./../assets/olga.svg";
import Section from "./Section";

const IntroducingTextSection = ({ backgroundColor }) => {
  return (
    <Section
      id="introducing-text-section"
      backgroundColor={backgroundColor}
      className="gap-y-10 px-6 pt-2"
    >
      <p className="font-Arsenal text-base text-neutral-500">
        Меня зовут <b>Ольга Новодзинская</b>. <br />Я профессиональный{" "}
        <b>частный риелтор</b> в Москве. <br />
        Рада приветствовать вас на своём официальном сайте!
      </p>

      <blockquote className="font-Arsenal text-base text-neutral-500">
        <b>"Моя задача...</b>
      </blockquote>

      <OlgaPhoto className="mb:w-2/5 h-auto" />
    </Section>
  );
};

export default IntroducingTextSection;
