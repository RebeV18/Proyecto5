export const CardCountries = ({ Country }) => {
  if (!Country) {
    return null; // or return a placeholder component
  }

  return (
    <div className="flex flex-col justify-center items-center p-1 transition-.3s shadow-sm-var(--third-color)">
      <h3 className="text-var(--third-color)">{Country.name}</h3>
      <p className="text-var(--second-color)">{Country.capital}</p>
    </div>
  );
};
