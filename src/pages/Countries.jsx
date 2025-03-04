import { useState, useEffect } from "react";
import { getCountries } from "../services/fetchCountries";
import { CardCountries } from "../components/Cards/CardCountries";
import { ErrorMessage } from "../components/ErrorMessage";

const Countries = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleApiResponse = async () => {
      try {
        const countryResponse = await getCountries();
        const arrayCountries = countryResponse.content;
        setCountry(arrayCountries);
      } catch (err) {
        console.error("Error fetching zip code:", err);
        setError("Failed to fetch zip code");
      }
      handleApiResponse();
    };
  }, []);

  return (
    <>
      <h1>Countries</h1>
      {
        country.map(c => (
          <CardCountries key={c.id} country={c} />
        ))
      }
    </>
  );
};

export { Countries };