import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { getNations } from "../services/fetchNations";

export const Continents = () => {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [theContinent, setTheContinent] = useState(null);
  const [theCountry, setTheCountry] = useState(null);

  const navigate = useNavigate();

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

  const handleClickCountry = (country) => {
    setTheCountry(country);
    navigate(`/country/${country.cca3}`, { state: { country } });
  };

  return (
    <div className="p-15 text-center">
      <h1 className="text-2xl font-bold mb-4">Países por Continente</h1>
      <div className="mb-4 flex flex-wrap justify-center gap-5 p-15">
        {continents.map((continent) => (
          <Button
            key={continent}
            className={`px-4 py-2 border-2 border-blue-300 rounded ${
              theContinent === continent
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
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
            <div
              key={country.cca3}
              className="p-2 border rounded cursor-pointer bg-gray-100"
              onClick={() => handleClickCountry(country)}
            >
              <h2 className="text-lg font-semibold">{country.name.common}</h2>
              <img
                src={country.flags.svg}
                alt={country.name.official}
                className="w-20 h-12 mx-auto mt-2"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Continents;
