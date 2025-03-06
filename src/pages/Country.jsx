import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CountryCard } from "../components/Cards/CountryCard";
import { getNations } from "../services/fetchNations";

export const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const handleApiResponse = async () => {
      const data = await getNations();
      const theCountry = data.find((c) => c.cca3 === id);
      setCountry(theCountry);
    };
    handleApiResponse();
  }, [id]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <div className="p-4 text-center">
        <CountryCard key={country.cca3} country={country} />
      </div>
    </ErrorBoundary>
  );
};

export default Country;
