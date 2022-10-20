import React, { useState, useEffect } from "react";
import Section from "./Section";
import Service from "./Service";
import Header2 from "./Header2";
import SelectingButton from "./SelectingButton";

const ServicesSection = ({ backgroundColor }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [services] = useState([
    {
      id: 0,
      name: "Продажа объектов1",
      description:
        "Подробная информацияяя ллаалдмьвдлтвдтвадптвадптдватдмлвждьаыы",
      buttonText: "Заказать услугу",
    },
    {
      id: 1,
      name: "Продажа объектов2",
      description:
        "Подробная информацияяя ллаалдмьвдлтвдтвадптвадптдватдмлвждьаыы",
      buttonText: "Заказать услугу",
    },
    {
      id: 2,
      name: "Продажа объектов3",
      description:
        "Подробная информацияяя ллаалдмьвдлтвдтвадптвадптдватдмлвждьаыы",
      buttonText: "Заказать услугу",
    },
    {
      id: 3,
      name: "Продажа объектов4",
      description:
        "Подробная информацияяя ллаалдмьвдлтвдтвадптвадптдватдмлвждьаыы",
      buttonText: "Заказать услугу",
    },
    {
      id: 4,
      name: "Продажа объектов5",
      description:
        "Подробная информацияяя ллаалдмьвдлтвдтвадптвадптдватдмлвждьаыы",
      buttonText: "Заказать услугу",
    },
  ]);

  useEffect(() => {
    adaptSection();
    window.addEventListener("resize", adaptSection);
  }, []);

  const adaptSection = () => {
    const windowWidth = document.documentElement.clientWidth;
    const mobileWidth = windowWidth <= 480;

    if (mobileWidth && !isMobile) {
      setIsMobile(true);
      setSelectedService(services[0]);
    } else {
      setIsMobile(false);
      setSelectedService(null);
    }
  };

  return (
    <Section
      id="services-section"
      backgroundColor={backgroundColor}
      className="py-5 gap-8"
    >
      <Header2 color="text-red-300">Мои услуги</Header2>
      {isMobile && selectedService ? (
        <>
          <Service {...selectedService} />
          <div className="flex justify-center">
            {services.map((service) => (
              <SelectingButton
                key={`service-button-${service.id}`}
                onClick={() => setSelectedService(service)}
                isActive={selectedService.id === service.id}
                defaultColor="bg-red-200"
                activeColor="bg-red-300"
              />
            ))}
          </div>
        </>
      ) : (
        services.map((service) => <Service key={service.id} {...service} />)
      )}
    </Section>
  );
};

export default ServicesSection;
