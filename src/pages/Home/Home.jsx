import { useState, useEffect } from "react";
import { getComunas } from "../../services/fetchComunas";

import "./Home.css";

export const Home = () => {
  const [comunas, setComunas] = useState([]);
  const [searchComuna, setSearchComuna] = useState("");
  const [street, setStreet] = useState("");
  const [numero, setNumero] = useState("");

  useEffect(() => {
    const handleApiResponse = async () => {
      const comunasResponse = await getComunas();
      const comunasArray = comunasResponse.content;
      setComunas(comunasArray);
    };
    handleApiResponse();
  }, []);

  const handleComuna = (event) => {
    const value = event.target.value;
    setSearchComuna(value);
    if (comunas && comunas.length > 0) {
      const filteredComuna = comunas.find(
        (c) => c.name.toLowerCase() === value.toLowerCase()
      );
      setSearchComuna(filteredComuna ? filteredComuna.name : value);
    }
  };

  const handleStreet = (event) => {
    setStreet(event.target.value);
  };

  const handleNumero = (event) => {
    setNumero(event.target.value);
  };

  return (
    <>
      <form className="m-50">
        <div className="flex flex-col p-5 bg-#0076a5 rounded-xs m-50">
          <input
            className="flex-1 p-2 rounded-xs w-full"
            type="text"
            value={searchComuna}
            onChange={handleComuna}
            placeholder="Comuna"
          />
          <p>Comuna: {searchComuna}</p>
          <input
            type="text"
            value={street}
            onChange={handleStreet}
            placeholder="Calle o Avenida"
          />
          <input
            type="text"
            value={numero}
            onChange={handleNumero}
            placeholder="Número"
          />
        </div>
      </form>
      <button className="btn-search">Enviar</button>
    </>
  );
};
