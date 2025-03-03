import { useState, useEffect } from "react";
import { getComunas } from "../../services/fetchComunas";

import "./ZipCode.css";

export const ZipCode = () => {
  const [comunas, setComunas] = useState([]);
  const [searchComuna, setSearchComuna] = useState('');
  const [street, setStreet] = useState ('');
  const [numero, setNumero] = useState ('');

  useEffect(() => {
    const handleApiResponse = async () => {
      const comunasResponse = await getComunas();
      const comunasArray = comunasResponse.content;
      setComunas(comunasArray);
    };
    handleApiResponse();
  }, []);

  const handleComuna = (event) => {
    const value = event.target.value.toLowerCase();
    if (comunas && comunas.length > 0) {
      const filteredComuna = comunas.find(c => c.name.toLowerCase() === value);
      setSearchComuna(filteredComuna ? filteredComuna.name : '');
    }
  }

  const handleStreet = (event) => {
    setStreet(event.target.value);
  }

  const handleNumero = (event) => {
    setNumero(event.target.value);
  }

  return (
    <>
      <input 
        type='text'
        value={searchComuna}
        onChange={handleComuna}
        placeholder="Comuna"
      />
      <p>Comuna: {searchComuna}</p>
      <input 
        type='text'
        value={street}
        onChange={handleStreet}
        placeholder="Calle o Avenida"
      />
      <input 
        type='text'
        value={numero}
        onChange={handleNumero}
        placeholder="Número"
      />
      <button>Enviar</button>
    </>
  )
}