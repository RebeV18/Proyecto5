import { useState, useEffect } from "react";
import { getAllDigimons } from "../../services/fetchDigimon";
import { CardDigimon } from "../../components/Card/CardDigimon";

export const DigimonList = () => {
    const [ digimons, setDigimons ] = useState([]);

    useEffect(() => {
        const handleApiResponse = async () => {
            const digimonResponse = await getAllDigimons();
            const digimonArray = digimonResponse.content;
            setDigimons(digimonArray);
        }
        handleApiResponse();
    }, [contador]);

  return (
    <>
      <h1>Lista de Digimon</h1>
      {
      digimons.map(digimon => (
        <CardDigimon key={digimon.id} digimon={digimon} />
      ))
      }
    </>
  );
};