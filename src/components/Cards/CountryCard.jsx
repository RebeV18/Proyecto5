import PropTypes from "prop-types";

export const CountryCard = ({ country }) => {
  const languages = Object.values(country.languages).join(", ");

  console.log(country.currency);

  return (
    <div className="flex justify-center p-25">
      <div className="flex flex-col items-center p-10 pb-10 border-4 border-sky-500 rounded-xl shadow-blue-300">
        <h2 className="text-lg font-semibold">{country.name.official}</h2>
        <div className="flex flex-row items-center gap-15 p-5">
          <img
            src={country.flags.svg}
            alt={country.name.nativeName.official}
            className="w-50 h-auto mx-auto mt-5"
          />
          <div>
            <p>Capital: {country.capital}</p>
            <p>Idiomas: {languages}</p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      </div>
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
    languages: PropTypes.object.isRequired,
  }).isRequired,
};

export default CountryCard;
