import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CountryCard } from "../components/Cards/CountryCard";

const Countries = ({ continent }) => {
  const navigate = useNavigate();

  const handleCountry = (id) => {
    navigate(`/country/${id}`);
  };

  return (
    <div>
      {
        <div>
          <h2 className="flex justify-center text-6xl font-bold p-10 pb-30">
            {continent}
          </h2>
          <div className="flex flex-row flex-wrap justify-center items-center gap-10">
            {continent.map((country) => (
              <button
                key={country.id}
                onClick={() => handleCountry(country.id)}
              >
                <CountryCard country={country} />
              </button>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Countries;
