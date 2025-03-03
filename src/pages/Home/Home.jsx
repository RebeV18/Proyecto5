import { useState, useEffect } from "react";
import { getComunas } from "../../services/fetchComunas";
import { Card_Comunas } from "../../Cards/Comunas/Card_Comunas"

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
      <div className="form-search">
        <input
          type="text"
          value={searchComuna}
          onChange={handleComuna}
          placeholder="Comuna"
        />
        {comunas.map((com) => (
          <Card_Comunas key={com.id} comuna={com} />
        ))}
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
      <div className="form-btn">
        <button className="btn-search">Enviar</button>
      </div>
    </>
  );
};
