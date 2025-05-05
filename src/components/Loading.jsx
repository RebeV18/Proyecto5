import { FcAdvance } from "react-icons/fc";
import Background from "./Background";

//Componente que será mostrado mientras cargan las páginas de la aplicación.
export const Loading = () => {
  return (
    <>
      <Background />
      <div className="flex flex-col justify-center items-center text-white p-20">
        <h3>Cargando...</h3>
        <div className="p-15 resize">
          <FcAdvance />
        </div>
      </div>
    </>
  );
};
