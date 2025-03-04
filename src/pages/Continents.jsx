import { useState, useEffect } from "react";

export const Continents = () => {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState({});
  const [theContinent, setTheContinent] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        arrangeTheContinent(data);
      });
  }, []);

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

  return (
    <div>
      <h1>Continentes</h1>
      <div className='flex flex-col flex-wrap shadow-xs'>
        {Object.keys(continents).map((continent) => (
          <button className='shadow-xs-var(--second-color p-1 )' key={continent} onClick={() => handleContinent(continent)}>
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
    </div>
  );
};

export default Continents;
