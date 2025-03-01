import './Card_Regions.css';

export const Card_Regions = ({ region }) => {
    if (!region) {
        return null; // or return a placeholder component
    }

    return (
        <div className="card-region">
            <div className="card-region-header">
                <h3>{region.name}</h3>
            </div>
        </div>
    )
}