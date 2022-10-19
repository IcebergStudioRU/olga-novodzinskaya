import React from "react";
import { useParams } from "react-router-dom";

const RealEstate = () => {
  const { id } = useParams();
  return <div>Неджвижимость №{id}</div>;
};

export default RealEstate;
