// pokemonDOM.js - Módulo para funções de manipulação do DOM relacionadas aos Pokémon
import { fetchPokemon } from './pokemonAPI.js';
import { unformatPokemonName, handleSpecialPokemonNames } from './pokemonUtils.js';

export const clearPokemonData = (elements) => {
  elements.pokemonNumber.textContent = '';
  elements.pokemonName.textContent = 'Buscando...';
  elements.pokemonImage.style.display = 'none';
  elements.pokemonPts.textContent = '';
  elements.pokemonP.textContent = '';
  elements.pokemonH.textContent = '';
  elements.pokemonR.textContent = '';
  elements.pokemonPA.textContent = '';
  elements.pokemonPM.textContent = '';
  elements.pokemonPV.textContent = '';
  elements.pokemonSkills.textContent = '';
  elements.pokemonTypes.textContent = '';
  elements.pokemonPros.textContent = '';
  elements.pokemonCons.textContent = '';
};

export const renderPokemon = async (elements, pokemon, updateSearchPokemon, maxPokemonNumber) => {
  clearPokemonData(elements);
  const adjustedPokemonName = handleSpecialPokemonNames(unformatPokemonName(pokemon));
  const data = await fetchPokemon(adjustedPokemonName);
  if (data) {
    elements.pokemonImage.style.display = 'block';
    elements.pokemonNumber.textContent = data.numero <= maxPokemonNumber ? `#${data.numero}` : '';
    elements.pokemonName.textContent = data.nome;
    elements.pokemonPts.textContent = data.pontos;
    elements.pokemonP.textContent = data.atributos.p;
    elements.pokemonH.textContent = data.atributos.h;
    elements.pokemonR.textContent = data.atributos.r;
    elements.pokemonPA.textContent = data.recursos.pa;
    elements.pokemonPM.textContent = data.recursos.pm;
    elements.pokemonPV.textContent = data.recursos.pv;
    elements.pokemonImage.src = data.imagem;

    elements.pokemonSkills.textContent = data.pericias ? Object.keys(data.pericias).join(', ') : '';

    elements.pokemonTypes.textContent =
      data.arquetipos && data.arquetipos.length > 0 ? data.arquetipos.join(' / ') : '';

    elements.pokemonPros.textContent = data.vantagens
      ? Object.entries(data.vantagens)
          .map(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
              return `${key}(${value.join(', ')})`;
            } else if (!Array.isArray(value)) {
              return key;
            } else {
              return '';
            }
          })
          .filter((item) => item !== '')
          .join(', ')
      : '';

    elements.pokemonCons.textContent = data.desvantagens
      ? Object.entries(data.desvantagens)
          .map(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
              return `${key}(${value.join(', ')})`;
            } else if (!Array.isArray(value)) {
              return key;
            } else {
              return '';
            }
          })
          .filter((item) => item !== '')
          .join(', ')
      : '';

    elements.input.value = '';
    updateSearchPokemon(data.numero);
  } else {
    elements.pokemonName.textContent = 'Não encontrado!';
    updateSearchPokemon(0);
  }
};
