import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getComunas } from "../../services/fetchComunas";

import "./Home.css";

export const Home = () => {
  const [comunas, setComunas] = useState([]);
  const [searchComuna, setSearchComuna] = useState("");
  const [st, setStreet] = useState("");
  const [numero, setNumero] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleApiResponse = async () => {
      try {
        const comunasResponse = await getComunas();
        const comunasArray = comunasResponse.content;
        setComunas(comunasArray);
      } catch (error) {
        console.error("Error fetching communes data:", error);
      }
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

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/zip`, { state: { commune: searchComuna, street: st, num: numero } });
  };

  return (
    <>
      <form className="m-50" onSubmit={handleSubmit}>
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
            value={st}
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
        <button className="btn-search" type="submit">Enviar</button>
      </form>
    </>
  );
};
