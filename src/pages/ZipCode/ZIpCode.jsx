import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getZipCode } from "../../services/fetchZipCodes";
import { CardZip } from "../../components/Cards/CardZip/CardZip";
import { ErrorMessage } from "../../components/ErrorMessage";

import "./ZipCode.css";

export const ZipCode = () => {
  const location = useLocation();
  const { commune, street, num } = location.state || {};
  const [zip, setZip] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleApiResponse = async () => {
      try {
        const zipResponse = await getZipCode(commune, street, num);
        const zipArray = zipResponse.content;
        setZip(zipArray);
      } catch (err) {
        console.error("Error fetching zip code:", err);
        setError("Failed to fetch zip code");
      }
    };
    if (commune && street && num) {
      handleApiResponse();
    }
  }, [commune, street, num]);

  return (
    <>
      <h1>Zip Code</h1>
      {error && <ErrorMessage message={error} />}
      {Array.isArray(zip) && zip.map((zip) => (
        <CardZip key={zip.id} zip={zip} />
      ))}
    </>
  );
};
