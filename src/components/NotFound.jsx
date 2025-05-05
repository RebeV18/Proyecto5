import Background from "./Background";

//Componente que será mostrado si no se encuentra la página
export const NotFound = () => {
  return (
    <>
      <Background />
      <div className="flex flex-col justify-center">
        <h2>Ups! No pudimos encontrar la página que buscas</h2>
        <p>Tenemos un 404. D: El recurso no fue encontrado o no existe.</p>
        <Button
          className="bg-gray-100 border-4 border-sky-500 rounded-lg p-1.5 bg-esmerald-400"
          onClick={() => window.history.back()}
        >
          Volver
        </Button>
      </div>
    </>
  );
};
