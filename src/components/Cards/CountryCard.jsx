import PropTypes from "prop-types";

export const CountryCard = ({ country }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-semibold">{country.name.official}</h2>
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-20 h-12 mx-auto mt-2"
      />
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    cca3: PropTypes.string.isRequired,
    name: PropTypes.shape({
      official: PropTypes.string.isRequired,
      common: PropTypes.string.isRequired,
    }).isRequired,
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired,
    }).isRequired,
    capital: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryCard;
