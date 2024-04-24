// pokemonUtils.js - Módulo para funções de manipulação de Pokémon

export const calcP = (Atk, SAtk) => Math.floor((Atk + SAtk + 2 * Math.max(Atk, SAtk)) / 80);

export const calcH = (SAtk, Spd) => Math.floor((3 * Spd + SAtk) / 80);

export const calcR = (HP, Def, SDef) => Math.floor((HP + Def + SDef + Math.max(HP, Def, SDef)) / 80);

export const calcPts = (atributos, arquetipos, perícias, vantagens, desvantagens) => {
  const { p, h, r } = atributos;

  let ptsAtributos = p > 5 ? 5 + 2 * (p - 5) : p;
  ptsAtributos += h > 5 ? 5 + 2 * (h - 5) : h;
  ptsAtributos += r > 5 ? 5 + 2 * (r - 5) : r;

  const ptsArquetipos = arquetipos.length;

  const ptsPericias = perícias ? Object.values(perícias).reduce((total, perícia) => total + perícia.pts, 0) : 0;

  const ptsVantagens = vantagens
    ? typeof vantagens === 'object'
      ? Object.values(vantagens).reduce((total, vantagem) => {
          if (vantagem.pts) {
            return total + vantagem.pts;
          }
          return total;
        }, 0)
      : 0
    : 0;

  const ptsDesvantagens = desvantagens
    ? typeof desvantagens === 'object'
      ? Object.values(desvantagens).reduce((total, desvantagem) => {
          if (desvantagem.pts) {
            return total + desvantagem.pts;
          }
          return total;
        }, 0)
      : 0
    : 0;

  const totalPts = ptsAtributos + ptsArquetipos + ptsPericias + ptsVantagens + ptsDesvantagens;

  return totalPts;
};

export const formatPokemonName = (str) => {
  str = str.toString();
  return str
    .split('-')
    .map((word) => {
      if (word === 'm') return '♂';
      if (word === 'f') return '♀';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export const unformatPokemonName = (str) => {
  str = str.toString();
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .map((word) => {
      if (word === '♂') return 'm';
      if (word === '♀') return 'f';
      return word;
    })
    .join('-')
    .toLowerCase();
};

export const handleSpecialPokemonNames = (pokemonName) => {
  switch (pokemonName) {
    case 'nidoran-macho':
      return 'nidoran-m';
    case 'nidoran-femea':
      return 'nidoran-f';
    case 'nidoran':
      return 'nidoran-f';
    default:
      return pokemonName;
  }
};

export const types_ptBR = {
  Bug: 'Inseto',
  Dark: 'Sombrio',
  Dragon: 'Dragão',
  Electric: 'Elétrico',
  Fairy: 'Fada',
  Fighting: 'Lutador',
  Fire: 'Fogo',
  Flying: 'Voador',
  Ghost: 'Fantasma',
  Grass: 'Grama',
  Ground: 'Terra',
  Ice: 'Gelo',
  Normal: 'Normal',
  Poison: 'Venenoso',
  Psychic: 'Psíquico',
  Rock: 'Pedra',
  Steel: 'Aço',
  Water: 'Água',
};

export const translateTypes = (originalTypes, translatedTypes) => {
  return originalTypes.map((type) => translatedTypes[type.charAt(0).toUpperCase() + type.slice(1)]);
};
