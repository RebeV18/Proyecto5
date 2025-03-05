export const CountryCard = ({ country }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-wrap gap-.8 p-1 rounded-lg shadow-sm duration-.3s hover:scale-1.05 shadow-md z-1">
      <div className="card">
        <h2 className="flex justify-center text-3xl font-bold text-sky-800">
          {country.name.official}
        </h2>
        <img
          src={country.flags.svg}
          alt={country.name.official}
          className="w-20 h-12 mx-auto mt-2"
        />
        <p>
          <strong>Capital:</strong>{" "}
          {country.capital ? country.capital[0] : "N/A"}
        </p>
        <p>
          <strong>Población:</strong> {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
