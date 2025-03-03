const URL_BASE = "https://api.boostr.cl";

export const getComunas = async () => {
try {
  const response = await fetch(`${URL_BASE}/geography/communes.json`);
  if (!response.ok)
    throw new Error("Error al solicitar información de las comunas");
  
    const data = await response.json();
return data;
  } catch (error) {
    console.error("Error fetching communes data:", error);
    throw error;
  }
};

