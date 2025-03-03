import "./Card_Comunas.css";

export const Card_Comunas = ({ comuna }) => {
  if (!comuna) {
    return null; // or return a placeholder component
  }

  return (
    <div className="card-comuna">
      <p>{comuna.name}</p>
    </div>
  );
};
