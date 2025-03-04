const URL_BASE = "https://restcountries.com/v3.1/all";

export const getCountries = async () => {
  try {
    const response = await fetch(`${URL_BASE}`);
    if (!response.ok)
      throw new Error("Error al solicitar información de las zip Codes");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Zip Codes data:", error);
    throw error;
  }
};

