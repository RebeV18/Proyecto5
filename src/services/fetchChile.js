const URL_BASE = "https://api.boostr.cl/geography/regions.json";

export const getRegions = async () => {
    try {
        const response = await fetch(`${URL_BASE}`);
        if(!response.ok) throw new Error('Error al solicitar información de las regiones');

        const data = await response.json();
        return data;  
    } catch (error) {
        throw new Error(error);
    }
}