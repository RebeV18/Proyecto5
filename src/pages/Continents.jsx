import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { getNations } from "../services/fetchNations";

import Background from "../components/Background";

//Esta es la página principal de la aplicación.
export const Continents = () => {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [theContinent, setTheContinent] = useState(null);
  const [theCountry, setTheCountry] = useState(null);

  const navigate = useNavigate();

  //Se obtienen datos de la API y se organizan los países por continente usando useEffect.
  useEffect(() => {
    const handleApiResponse = async () => {
      const data = await getNations();
      setCountries(data);
      const groupCountries = [
        ...new Set(data.map((country) => country.region).filter(Boolean)),
      ];
      setContinents(groupCountries);
    };
    handleApiResponse();
  }, []);

  //Se envía a la página de países al dar click a un país.
  const handleClickCountry = (country) => {
    setTheCountry(country);
    navigate(`/country/${country.cca3}`, { state: { theCountry } });
  };

  //Se dibujan los continentes y posteriormente los países al seleccionar un Continente
  return (
    <>
      <Background />
      <div className="bg-blend-soft-light p-15 text-center">
        <h1 className="text-white text-2xl font-bold mb-4 md:text-3xl lg:text-5xl">
          Países por Continente
        </h1>
        <div className="flex flex-wrap justify-center mb-5 2xl:mt-20 gap-5 p-15 text-base md:text-1xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
          {continents.map((continent) => (
            <Button
              key={continent}
              className={`text-white px-4 py-2 border-4 border-[#DAFDBA] rounded-lg ${
                theContinent === continent ? "text-white" : "text-gray-500"
              }`}
              onClick={() => setTheContinent(continent)}
            >
              {continent}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {countries
            .filter(
              (country) =>
                country.region === theContinent &&
                country.name.common != "Antarctica"
            )
            .map((country) => (
              <div
                key={country.cca3}
                className="p-2 border-4 border-[#9AEBA3] rounded cursor-pointer"
                onClick={() => handleClickCountry(country)}
              >
                <h2 className="text-xs md:text-base text-white font-semibold lg:text-xl xl:text-2xl 2xl:text-4xl">
                  {country.name.common}
                </h2>
                <img
                  src={country.flags.svg}
                  alt={country.name.official}
                  className="w-20 h-12 mx-auto mt-2"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Continents;
