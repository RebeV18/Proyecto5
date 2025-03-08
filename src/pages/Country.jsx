import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CountryCard } from "../components/Cards/CountryCard";
import { getNations } from "../services/fetchNations";
import Button from "../components/Button";

//Página para dibujar tarjeta del país seleccionado.
export const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  //Se obtienen países de la API y se busca país seleccionado
  useEffect(() => {
    const handleApiResponse = async () => {
      const data = await getNations();
      const theCountry = data.find((c) => c.cca3 === id);
      setCountry(theCountry);
    };
    handleApiResponse();
  }, [id]);

  //Si no se encuentra información de país muestra mensaje.
  if (!country) {
    return <div>Información no encontrada.</div>;
  }

  //Se dibuja la tarjeta de país y botón para volver a página anterior.
  return (
    <div className="p-4 text-center">
      <CountryCard key={country.cca3} country={country} />
      <Button
        className="bg-gray-100 border-4 border-sky-500 rounded-lg p-1.5 bg-esmerald-400"
        onClick={() => window.history.back()}
      >
        Volver
      </Button>
    </div>
  );
};

export default Country;
