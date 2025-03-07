import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CountryCard } from "../components/Cards/CountryCard";
import { getNations } from "../services/fetchNations";
import Button from "../components/Button";

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
    <div className="p-4 text-center">
      <CountryCard key={country.cca3} country={country} />
      <Button className="bg-gray-100 border-4 border-sky-500 rounded-lg p-1.5 bg-esmerald-400" 
        onClick={() => window.history.back()}>
        Volver
      </Button>
    </div>
  );
};

export default Country;
