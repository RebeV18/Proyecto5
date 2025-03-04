export const CountryCard = ({ country }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-wrap gap-.8 p-1 rounded-lg shadow-sm duration-.3s hover:scale-1.05 shadow-md z-1">
      <div className="card">
        <h2 className="flex justify-center text-3xl font-bold text-sky-800">
          {theCountry.name.common}
        </h2>
        <img
          className="w-90% h-auto z-1"
          src={theCountry.flags.png}
          alt={`Bandera de ${country.name.common}`}
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
