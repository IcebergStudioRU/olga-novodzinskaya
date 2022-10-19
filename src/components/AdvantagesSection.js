import React from "react";
import Section from "./Section";
import Advantage from "./Advantage";
import { ReactComponent as UserArrowsIcon } from "./../assets/user-arrows.svg";
import { ReactComponent as BackPackIcon } from "./../assets/backpack.svg";
import { ReactComponent as RocketIcon } from "./../assets/rocket.svg";

const AdvantagesSection = ({ backgroundColor }) => {
  return (
    <Section backgroundColor={backgroundColor} className="py-6 gap-y-6">
      <Advantage SVGIconComponent={UserArrowsIcon}>
        90% клиентов <br />
        приходят <br />
        по рекомендациям
      </Advantage>
      <Advantage SVGIconComponent={BackPackIcon}>
        Гибкость <br />
        и индивидуальный <br />
        подход
      </Advantage>
      <Advantage SVGIconComponent={RocketIcon}>
        14 дней занимает <br />
        покупка или продажа <br />
        квартиры
      </Advantage>
    </Section>
  );
};

export default AdvantagesSection;
