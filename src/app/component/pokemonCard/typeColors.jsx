export const typeColors = {
    normal: "bg-gray-300",
    flying: "bg-gray-500",
    fire: "bg-orange-400",
    water: "bg-blue-400",
    grass: "bg-green-500",
    bug: "bg-lime-400",
    poison: "bg-violet-400",
    electric: "bg-yellow-400",
    ground: "bg-amber-600",
    fairy: "bg-pink-200",
    dark: "bg-neutral-800",
    fighting: "bg-red-500",
    psychic: "bg-rose-400",
    rock: "bg-orange-200",
    ghost: "bg-indigo-400",
    ice: "bg-sky-300",
    dragon: "bg-blue-500",
  }
  export const getBackgroundColor = (types) =>{
    return types.length > 0 ? typeColors[types[0].type.name] || "bg-gray-200" : "bg-gray-200";
  }