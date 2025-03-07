import { FcAdvance } from "react-icons/fc";

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h3>Cargando...</h3>
      <div className="p-15 resize">
        <FcAdvance />
      </div>
    </div>
  );
};
