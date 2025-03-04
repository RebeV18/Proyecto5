import { useState, useEffect } from "react";
import { CountryCard } from "../components/Cards/CountryCard";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState({});
  const [theContinent, setTheContinent] = useState(null);
  const [theCountry, setTheCountry] = useState(null);

  const arrangeTheContinent = (countries) => {
    const group = countries.reduce((accum, country) => {
      const continent = country.region;
      if (!accum[continent]) accum[continent] = [];
      accum[continent].push(country);
      return accum;
    }, {});
    setContinents(group);
  };

  const handleContinent = (continent) => {
    setTheContinent(continent);
    setTheCountry(null);
  };

  const handleCountry = (country) => {
    setTheCountry(country);
  };

  return (
    <div>
      <h1>Continentes</h1>
      <div>
        {Object.keys(continents).map((continent) => (
          <button key={continent} onClick={() => handleContinent(continent)}>
            {continent}
          </button>
        ))}
      </div>
      {theContinent && (
        <div>
          <h2>{theContinent}</h2>
          <ul>
            {continents[theContinent].map((country) => (
              <li key={country.cca3}>
                <button onClick={() => handleCountryClick(country)}>
                  {country.name.common}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {theCountry && (
        <div>
          <h2 className="text-3xl font-bold text-sky-800">
            {theCountry.name.common}
          </h2>
          <p>
            <strong>Capital:</strong>{" "}
            {theCountry.capital ? theCountry.capital[0] : "N/A"}
          </p>
          <p>
            <strong>Población:</strong> {theCountry.population.toLocaleString()}
          </p>
          <p>
            <strong>Región:</strong> {theCountry.region}
          </p>
          <p>
            <strong>Zona Horaria:</strong> {theCountryTimezone}
          </p>
          <p>
            <strong>Bandera:</strong>{" "}
            <img
              src={theCountry.flags.png}
              alt={`Bandera de ${theCountry.name.common}`}
              style={{ width: "100px", height: "auto" }}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default Country;
