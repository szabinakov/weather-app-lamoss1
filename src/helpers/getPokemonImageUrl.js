function getPokemonImageUrl() {
  const pokemonIndex = Math.floor(Math.random() * 151) + 1;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
  return imageUrl;
}

export default getPokemonImageUrl;
