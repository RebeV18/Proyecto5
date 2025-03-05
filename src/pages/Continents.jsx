import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button"; // Update this line

export const Continents = () => {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [theContinent, setTheContinent] = useState(null);
  const [theCountry, setTheCountry] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        const groupCountries = [
          ...new Set(data.map((country) => country.region).filter(Boolean)),
        ];
        setContinents(groupCountries);
      });
  }, []);

  const handleClickCountry = (country) => {
    setTheCountry(country)
    navigate(`/country/${theCountry}`);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Países por Continente</h1>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {continents.map((continent) => (
          <Button
            key={continent}
            className={`px-4 py-2 border-2 border-blue-300 rounded ${
              theContinent === continent
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setTheContinent(continent)}
          >
            {continent}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries
          .filter((country) => country.region === theContinent)
          .map((country) => (
            <Button
              key={country.cca3}
              className={`px-4 py-2 border-2 border-blue-300 rounded ${
                country.name.official ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleClickCountry(country)}
            >
              {country.name.official}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Continents;