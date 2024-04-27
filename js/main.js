// main.js
import { renderPokemon } from './pokemonDOM.js';

const maxPokemonNumber = 1025;
let searchPokemon = 1;

const elements = {
  pokemonName: document.querySelector('.pokemon__name'),
  pokemonNumber: document.querySelector('.pokemon__number'),
  pokemonImage: document.querySelector('.pokemon__image'),
  pokemonPts: document.querySelector('.pokemon__pts'),
  pokemonP: document.querySelector('.pokemon__p'),
  pokemonH: document.querySelector('.pokemon__h'),
  pokemonR: document.querySelector('.pokemon__r'),
  pokemonPA: document.querySelector('.pokemon__pa'),
  pokemonPM: document.querySelector('.pokemon__pm'),
  pokemonPV: document.querySelector('.pokemon__pv'),
  pokemonSkills: document.querySelector('.pokemon__skills'),
  pokemonTypes: document.querySelector('.pokemon__types'),
  pokemonPros: document.querySelector('.pokemon__pros'),
  pokemonCons: document.querySelector('.pokemon__cons'),
  form: document.querySelector('.form'),
  input: document.querySelector('.input__search'),
  buttonPrev: document.querySelector('.btn-prev'),
  buttonNext: document.querySelector('.btn-next'),
  buttonRandom: document.querySelector('.btn-random'),
};

const updateSearchPokemon = (newSearchPokemon) => {
  searchPokemon = newSearchPokemon;
};

const updateButtonState = () => {
  elements.buttonPrev.disabled = searchPokemon === 1;
  elements.buttonNext.disabled = searchPokemon >= maxPokemonNumber;
};

elements.form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await renderPokemon(elements, elements.input.value, updateSearchPokemon, maxPokemonNumber);
  updateButtonState();
});

elements.buttonPrev.addEventListener('click', async (event) => {
  event.preventDefault();
  if (searchPokemon > 1 && searchPokemon <= maxPokemonNumber) {
    searchPokemon -= 1;
    await renderPokemon(elements, searchPokemon, updateSearchPokemon, maxPokemonNumber);
    updateButtonState();
  } else {
    searchPokemon = 1;
    await renderPokemon(elements, searchPokemon, updateSearchPokemon, maxPokemonNumber);
    updateButtonState();
  }
});

elements.buttonNext.addEventListener('click', async (event) => {
  event.preventDefault();
  if (searchPokemon < maxPokemonNumber) {
    searchPokemon += 1;
    await renderPokemon(elements, searchPokemon, updateSearchPokemon, maxPokemonNumber);
    updateButtonState();
  }
});

elements.buttonRandom.addEventListener('click', async (event) => {
  event.preventDefault();
  searchPokemon = Math.floor(Math.random() * maxPokemonNumber) + 1;
  await renderPokemon(elements, searchPokemon, updateSearchPokemon, maxPokemonNumber);
  updateButtonState();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    elements.buttonPrev.click();
  } else if (event.key === 'ArrowRight') {
    elements.buttonNext.click();
  } else if (event.key === 'Tab') {
    event.preventDefault();
    elements.input.focus();
  } else if ((event.key === 'r' || event.key === 'R') && document.activeElement !== elements.input) {
    elements.buttonRandom.click();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const headerNavHeight = document.querySelector('header').offsetHeight;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - headerNavHeight,
        behavior: 'smooth',
      });
    }
  });
});

renderPokemon(elements, searchPokemon, updateSearchPokemon, maxPokemonNumber);
updateButtonState();
