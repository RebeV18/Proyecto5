import { useState, useEffect } from "react";
import { getRegions } from "../../services/fetchChile";
import { Card_Regions } from "../../components/Cards/Regions/Card_Regions";

export const Home = () => {
    const [ regions, setRegions ] = useState([]);

    useEffect(() => {
        const handleApiResponse = async () => {
            const regionsResponse = await getRegions();
            const regionsArray = regionsResponse.content;
            setRegions(regionsArray);
        }
        handleApiResponse();
    }, []);

  return (
    <>
      <h1>Regiones de Chile</h1>
      {
      regions.map(region => (
        <Card_Regions key={region.id} region={region} />
      ))
      }
    </>
  );
};
