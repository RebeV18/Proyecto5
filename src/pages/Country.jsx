import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CountryCard } from "../components/Cards/CountryCard";
import { getNations } from "../services/fetchNations";
import Button from "../components/Button";

import Background from "../components/Background";
import { Loading } from "../components/Loading";

// Página para dibujar tarjeta del país seleccionado.
export const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga

  // Se obtienen países de la API y se busca país seleccionado
  useEffect(() => {
    const handleApiResponse = async () => {
      setLoading(true);
      const data = await getNations();
      const theCountry = data.find((c) => c.cca3 === id);
      setCountry(theCountry);
      setLoading(false);
    };
    handleApiResponse();
  }, [id]);

  // Si está cargando, muestra un indicador de carga
  if (loading) {
    return <Loading />;
  }

  // Si no se encuentra información del país, muestra un mensaje
  if (!country) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p>Información no encontrada.</p>
      </div>
    );
  }

  // Se dibuja la tarjeta de país y botón para volver a la página anterior
  return (
    <>
      <Background />

      <div className="p-4 text-center">
        <CountryCard key={country.cca3} country={country} />
        <Button
          className="border-4 border-amber-500 rounded-lg text-white p-1.5 text-base lg:text-lg xl:text-xl 2xl:text-4xl"
          onClick={() => window.history.back()}
        >
          Volver
        </Button>
      </div>
    </>
  );
};

export default Country;
