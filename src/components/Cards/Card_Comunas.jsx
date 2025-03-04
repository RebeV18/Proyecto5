export const Card_Comunas = ({ comuna }) => {
  if (!comuna) {
    return null; // or return a placeholder component
  }

  return (
    <div className="card-comuna flex flex-col justify-center items-center p-1 transition-.3s">
      <p className="text-blue-300 text-sm hover:shadow-sm shadow-red-200 scale-1.05">{comuna.name}</p>
    </div>
  );
};
