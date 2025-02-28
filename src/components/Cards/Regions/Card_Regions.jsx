import './Card_Regions.css';

export const Card_Regions = ({ regions }) => {
    return (
        <div className="card-region">
            <div className="card-region-header">
                <h3>{regions.name}</h3>
            </div>
        </div>
    )
}