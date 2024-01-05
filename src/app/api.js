import axios from "axios";

export const fetchPokemons = async () => {
  const endPoints = Array.from({ length: 200 }, (_, i) =>
    `https://pokeapi.co/api/v2/pokemon/${i + 1}/`
  );

  try {
    const response = await axios.all(endPoints.map((endPoint) => axios.get(endPoint)));
    return response;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw error;
  }
};
