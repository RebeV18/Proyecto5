const URL_BASE = "https://restcountries.com/v3.1/all";

export const getNations = async () => {
  try {
    const response = await fetch(`${URL_BASE}`);
    if (!response.ok)
      throw new Error("Error al solicitar los información de la API");

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
