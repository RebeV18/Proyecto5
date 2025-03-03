import { useState, useEffect } from "react";

import { getZipCode } from "../../services/fetchZipCodes";
import { CardZip } from "../../components/Cards/CardZip/CardZip";
import { ErrorMessage } from "../../components/ErrorMessage";

import "./ZipCode.css";

export const ZipCode = ({ commune, street, num }) => {
  const [zip, setZip] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleApiResponse = async () => {
      const zipResponse = await getZipCode(commune, street, num);
      const zipArray = zipResponse.content;
      setZip(zipArray);
    };
    handleApiResponse();
  }, []);

  return (
    <>
      <h1>Zip Code</h1>
      {zip.map((zip) => (
        <CardZip key={zip.id} zip={zip} />
      ))}
    </>
  );
};
