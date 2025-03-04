import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Continents = () => {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState({});
  const [theContinent, setTheContinent] = useState(null);
  const navigate = useNavigate();

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
    navigate(`/country/${theContinent}`);
  };

  return (
    <div>
      <h1 className="flex justify-center text-6xl font-bold p-10 pb-30">
        Continentes
      </h1>
      <div className="flex flex-row flex-wrap justify-center shadow-xs gap-30">
        {Object.keys(continents).map((continent) => (
          <button
            className="border-2 border-solid shadow-green-100 rounded-xl p-2 w-30"
            key={continent}
            onClick={() => handleContinent(continent)}
          >
            {continent}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Continents;
