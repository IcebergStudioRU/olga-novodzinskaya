import React, { useState } from "react";
import Header2 from "./Header2";
import Section from "./Section";
import RadioButton from "./RadioButton";
import Header3 from "./Header3";
import GradientButton from "./GradientButton";

const ConsultationRegistrationSection = ({ backgroundColor }) => {
  const [serviceType, setServiceType] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Section backgroundColor={backgroundColor} className="p-10 gap-y-5">
      <Header2 color="text-red-300">Что нужно сделать?</Header2>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center gap-y-5"
      >
        <div className="flex flex-col items-center gap-y-1">
          <RadioButton
            id="advise"
            name="service-type"
            value="Проконсультировать"
            selectedValue={serviceType}
            activeColor="bg-red-300 text-white"
            defaultColor="bg-purple-100"
            onChange={(event) => setServiceType(event.target.value)}
          />

          <RadioButton
            id="buy"
            name="service-type"
            value="Купить"
            selectedValue={serviceType}
            activeColor="bg-red-300 text-white"
            defaultColor="bg-purple-100"
            onChange={(event) => setServiceType(event.target.value)}
          />

          <RadioButton
            id="sell"
            name="service-type"
            value="Продать"
            selectedValue={serviceType}
            activeColor="bg-red-300 text-white"
            defaultColor="bg-purple-100"
            onChange={(event) => setServiceType(event.target.value)}
          />

          <RadioButton
            id="take-off"
            name="service-type"
            value="Снять"
            selectedValue={serviceType}
            activeColor="bg-red-300 text-white"
            defaultColor="bg-purple-100"
            onChange={(event) => setServiceType(event.target.value)}
          />

          <RadioButton
            id="rent"
            name="service-type"
            value="Сдать"
            selectedValue={serviceType}
            activeColor="bg-red-300 text-white"
            defaultColor="bg-purple-100"
            onChange={(event) => setServiceType(event.target.value)}
          />
        </div>

        <div className="flex flex-col items-center gap-y-4 bg-red-100 border rounded-2xl border-zinc-300 px-7 pt-5 pb-8 shadow-md">
          <Header3 color="text-neutral-500" className="text-center">
            Свяжемся с вами в течении 5 минут
          </Header3>

          <div className="flex flex-col items-center gap-y-2">
            <label className="flex flex-col">
              <span className="ml-2 font-Arsenal text-xs text-neutral-400">
                Введите имя
              </span>
              <input
                type="text"
                id="name"
                className="w-48 h-10 rounded-xl shadow-md"
              />
            </label>

            <label className="flex flex-col">
              <span className="ml-2 font-Arsenal text-xs text-neutral-400">
                Введите номер телефона
              </span>
              <input
                type="text"
                id="phone"
                className="w-48 h-10 rounded-xl shadow-md"
              />
            </label>
          </div>

          <GradientButton className="w-48 h-10">
            Оставить заявку!
          </GradientButton>
        </div>
      </form>
    </Section>
  );
};

export default ConsultationRegistrationSection;
