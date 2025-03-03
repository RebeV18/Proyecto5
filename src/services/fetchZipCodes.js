const URL_BASE = "https://api.boostr.cl/postalcode.json";

export const getZipCode = async (commune, street, number) => {
  try {
    const response = await fetch(`${URL_BASE}?commune=${commune}&street=${street}&number=${number}`);
    if (!response.ok)
      throw new Error("Error al solicitar información de las zip Codes");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Zip Codes data:", error);
    throw error;
  }
};

