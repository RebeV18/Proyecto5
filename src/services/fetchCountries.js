const URL_BASE = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
    try {
        const response = await fetch(`${URL_BASE}/all`);
        if(!response.ok) throw new Error('Error al solicitar la información de los países');

        const data = await response.json();
        return data;  
    } catch (error) {
        throw new Error(error);
    }
}