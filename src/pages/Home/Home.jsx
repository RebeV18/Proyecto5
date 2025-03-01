import { useState, useEffect } from "react";
import { getRegions } from "../../services/fetchChile";
import { Card_Regions } from "../../components/Cards/Regions/Card_Regions";

export const Home = () => {
    const [regions, setRegions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleApiResponse = async () => {
            try {
                const regionsResponse = await getRegions();
                if (regionsResponse && Array.isArray(regionsResponse)) {
                    setRegions(regionsResponse);
                } else if (regionsResponse && regionsResponse.content && Array.isArray(regionsResponse.content)) {
                    setRegions(regionsResponse.content);
                } else if (regionsResponse && regionsResponse.data && Array.isArray(regionsResponse.data)) {
                    setRegions(regionsResponse.data);
                } else {
                    setError("Unexpected data format");
                }
            } catch (err) {
                console.error("Error fetching regions:", err);
                setError("Failed to fetch regions");
            }
        };
        handleApiResponse();
    }, []);

    return (
        <>
            <h1>Regiones de Chile</h1>
            {error && <p>{error}</p>}
            {regions.map(region => (
                <Card_Regions key={region.id} region={region} />
            ))}
        </>
    );
};
