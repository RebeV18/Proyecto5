import "./CardZip.css";

export const CardZip = ({ zipCode }) => {
  if (!zipCode) {
    return null; // or return a placeholder component
  }

  return (
    <div className="card_zip">
      <h3>{zipCode.commune}</h3>
      <p>{zipCode.code}</p>
    </div>
  );
};
