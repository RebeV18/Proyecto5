import PropTypes from "prop-types";
import Background from "../Background";

//Componente para dibujar tarjetas del país seleccionado.
export const CountryCard = ({ country }) => {
  const languages = Object.values(country.languages).join(", ");
  return (
    <>
      <Background />
      <div className="flex justify-center pt-35 pb-10 2xl:pt-50 pb-20">
        <div className="flex flex-col items-center p-10 pb-10 border-4 border-amber-500 rounded-xl shadow-blue-300 lg:p-15 2xl:p-25">
          <h2 className="text-white text-lg font-semibold md:text-3xl lg:text-4xl 2xl:text-6xl">
            {country.name.official}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-15 p-5">
            <img
              src={country.flags.svg}
              alt={country.name.nativeName.official}
              className="w-50 h-auto mx-auto mt-5"
            />
            <div>
              <p className="text-white text-sm p-1 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl xl:p-2">
                Capital: {country.capital}
              </p>
              <p className="text-white text-sm p-1 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl xl:p-2">
                Idiomas: {languages}
              </p>
              <p className="text-white text-sm p-1 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl xl:p-2">
                Population: {country.population}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//PropTypes requeridos para contruir tarjeta del país seleccionado.
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
