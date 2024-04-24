// pokemonAPI.js - Módulo para funções de interação com a API de Pokémon
import { formatPokemonName, calcP, calcH, calcR, calcPts, types_ptBR, translateTypes } from './pokemonUtils.js';

const fetchTypeData = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  if (!response.ok) throw new Error(`Failed to fetch type ${type}`);
  return await response.json();
};

const extractTypeRelations = (typeData, relationType) => {
  return typeData.damage_relations[relationType].map((relation) => {
    return translateTypes([relation.name], types_ptBR)[0];
  });
};

const filterAndSortTypes = (types, typesData) => {
  let advantages = new Set();
  let immunities = new Set();
  let disadvantages = new Set();

  typesData.forEach((typeData) => {
    extractTypeRelations(typeData, 'half_damage_from').forEach((advantage) => advantages.add(advantage));
    extractTypeRelations(typeData, 'no_damage_from').forEach((immunity) => immunities.add(immunity));
    extractTypeRelations(typeData, 'double_damage_from').forEach((disadvantage) => disadvantages.add(disadvantage));
  });

  const advantagesDisadvantages = new Set([...advantages].filter((type) => disadvantages.has(type)));
  const advantagesImmunities = new Set([...advantages].filter((type) => immunities.has(type)));
  const disadvantagesImmunities = new Set([...disadvantages].filter((type) => immunities.has(type)));

  advantages = new Set(
    [...advantages].filter((type) => !advantagesDisadvantages.has(type) && !advantagesImmunities.has(type))
  );
  disadvantages = new Set(
    [...disadvantages].filter((type) => !advantagesDisadvantages.has(type) && !disadvantagesImmunities.has(type))
  );

  const sortedAdvantages = Array.from(advantages).sort();
  const sortedImmunities = Array.from(immunities).sort();
  const sortedDisadvantages = Array.from(disadvantages).sort();

  return { sortedAdvantages, sortedImmunities, sortedDisadvantages };
};

export const fetchPokemon = async (pokemon) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();

    const types = data.types.map((typeData) => typeData.type.name);
    const translatedTypes = translateTypes(types, types_ptBR);

    const poder = calcP(data.stats[1].base_stat, data.stats[3].base_stat);
    const habilidade = calcH(data.stats[3].base_stat, data.stats[5].base_stat);
    const resistencia = calcR(data.stats[0].base_stat, data.stats[2].base_stat, data.stats[4].base_stat);

    const ptsdeAcao = Math.max(poder, 1);
    const ptsdeMana = Math.max(habilidade * 5, 1);
    const ptsdeVida = Math.max(resistencia * 5, 1);

    const typesData = await Promise.all(types.map(fetchTypeData));

    const { sortedAdvantages, sortedImmunities, sortedDisadvantages } = filterAndSortTypes(types, typesData);

    const formattedName = formatPokemonName(data.name);

    const pokemonData = {
      numero: data.id,
      nome: formattedName,
      imagem: data.sprites.other['official-artwork']['front_default'],
      atributos: {
        p: poder,
        h: habilidade,
        r: resistencia,
      },
      recursos: {
        pa: ptsdeAcao,
        pm: ptsdeMana,
        pv: ptsdeVida,
      },
      pericias: {
        Luta: { pts: 1 },
      },
      arquetipos: translatedTypes,
      vantagens: {
        Resistente: sortedAdvantages,
        Imune: sortedImmunities,
      },
      desvantagens: {
        Vulnerável: sortedDisadvantages,
        Diferente: { pts: -1 },
        Inculto: { pts: -1 },
      },
    };

    const pontos = calcPts(
      pokemonData.atributos,
      pokemonData.arquetipos,
      pokemonData.pericias,
      pokemonData.vantagens,
      pokemonData.desvantagens
    );
    pokemonData.pontos = pontos;

    return pokemonData;
  } catch (error) {
    console.error('Failed to fetch Pokémon data:', error);
    return null;
  }
};
