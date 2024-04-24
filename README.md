# 3DeT Victory Pokédex

## Sobre a 3DeT Victory Pokédex

A 3DeT Victory Pokédex surge como uma solução para um dilema comum entre mestres de RPG: como adaptar e equilibrar as fichas de personagens para os mais de 1000 Pokémon existentes em suas campanhas? Para responder a essas perguntas e facilitar a vida dos mestres, eu, Jean "Painho" Fernandes, criei esse projeto de fã para fã, a 3DeT Victory Pokédex. Sem fins lucrativos, nosso objetivo é fornecer uma ferramenta que simplifique a adaptação dos adoráveis monstrinhos de bolso da franquia Pokémon para o sistema de RPG brasileiro 3DeT Victory da Jambô Editora.

Este projeto pode ser considerado uma evolução espiritual da Pokédex Victory, desenvolvida por Arthur Eilert Letona e Pedro Rodrigues do grupo de 3DeT Victory no Whatsapp. Além disso, ele faz uso da PokéAPI, uma API de Pokémon desenvolvida por Paul Hallett e uma equipe de colaboradores. Embora existam semelhanças entre os projetos, as fórmulas para calcular os atributos e o número de pontos utilizados na criação das fichas são diferentes.

A 3DeT Victory Pokédex não busca replicar integralmente a vivência dos jogos da franquia Pokémon em sua adaptação. Em vez disso, visa proporcionar uma imersão acessível aos fãs do universo Pokémon, tanto aqueles que acompanham outras mídias, como a série animada, filmes e quadrinhos, quanto os jogadores dos próprios jogos. Com uma abordagem adaptativa e flexível, oferece aos participantes a oportunidade de explorar e vivenciar aventuras únicas no mundo dos Pokémon.

## Regras Especiais

### Como são calculados os atributos e pontos?

Os atributos de cada Pokémon são calculados com referência nos "Base Stats" oficiais de cada um:

- Poder é calculado como (Atk + S.Atk + 2 x o maior entre Atk e S.Atk) / 80
- Habilidade é calculada como (3 x Spd + S.Atk) / 80
- Resistência é calculada como (HP + Def + S.Def + o maior entre HP, Def e S.Def) / 80

Esses valores são sempre arredondados para baixo.

Para calcular os Pontos (total de pontos utilizados na criação da ficha do personagem), o processo adotado é o seguinte:

1. Soma-se todos os atributos, sendo que cada valor acima de 5 tem peso 2.
2. Acrescenta-se +1 ponto por Tipo de Pokémon presente no Arquétipo.
3. Por fim, somam-se ou subtraem-se os pontos de Perícias, Vantagens e Desvantagens, lembrando que as Vantagens e Desvantagens concedidas pelo Arquétipo não devem ser contabilizadas.

### Faça sempre os ajustes necessários

Por padrão, todos os Pokémon listados na 3DeT Victory Pokédex recebem a perícia Luta[+1pt] e as desvantagens Diferente[-1pt] e Inculto[-1pt]. No entanto, reconhecemos que certos Pokémon, como Arceus, um Meowth falante ou até mesmo um Detetive Pikachu, não se encaixam na desvantagem Inculto, já que são capazes de se comunicar facilmente com humanos. Da mesma forma, a maioria dos Pokémon do tipo Voador deveriam receber a vantagem Voo[+1pt]. Além disso, com o passar do tempo e o fortalecimento do vínculo entre Pokémon e treinador, existe a possibilidade de gastar 10XP para remover a desvantagem Inculto. Isso permite uma comunicação mais fluída e sem dificuldades com o seu Pokémon. Portanto, sinta-se à vontade para fazer quaisquer ajustes necessários em suas fichas de personagem.

### Arquétipos e os Tipos de Pokémon

Os Tipos de Pokémon funcionam como arquétipos na mecânica do 3DeT Victory, concedendo algumas vantagens e desvantagens específicas. Na 3DeT Victory Pokédex, o arquétipo é responsável por conceder as vantagens: Resistente e Imune, e a desvantagem: Vulnerável, sempre atrelados a uma tipagem. Cada Tipo de Pokémon adiciona 1 ponto ao custo do arquétipo.

Vamos ao exemplo: um Jigglypuff tem o arquétipo "Normal / Fada", que lhe concede as vantagens: Resistente(Inseto, Sombrio) e Imune (Dragão, Fantasma), e a desvantagem: Vulnerável (Aço, Venenoso). Isso significa que ao sofrer um ataque do tipo Inseto, por ter a vantagem Resistente(Inseto), Jigglypuff só sofrerá metade do dano. Já ao receber um ataque do tipo Venenoso, Jigglypuff receberá o dobro do dano por ser Vulnerável(Venenoso). Ataques do tipo Dragão ou Fantasma não causam dano algum a Jigglypuff.

### E os ataques do Pokémon?

Os ataques de um Pokémon podem ser tratados de diferentes maneiras no contexto do 3DeT Victory. Ataques comuns, como uma bicada, cabeçada ou um arranhão, podem ser considerados apenas como um Ataque do sistema.

No entanto, para criar movimentos mais poderosos ou com mais personalidade, é possível utilizar as regras de Vantagens e Técnicas do 3DeT Victory. Por exemplo, se você deseja que seu Jigglypuff tenha um movimento do tipo Fada que coloque o alvo para dormir ao cantar, você pode adaptar isso utilizando a vantagem Paralisia[+1pt].

Dessa forma, você pode criar a vantagem "Canção de Ninar (Fada)" Paralisia[+1pt]. Em efeitos práticos, ela segue a mesma regra da vantagem Paralisia do 3DeT Victory: realiza um ataque do tipo Fada e gasta 2PM. Se bem-sucedido, o alvo fica indefeso até o fim da cena ou até sofrer dano. A cada turno, o alvo pode fazer um teste de R (6 + Poder do atacante) para cancelar o efeito.

### Como evoluir o Pokémon?

Um Pokémon estará apto a evoluir quando acumular experiência suficiente. O cálculo para determinar a quantidade de experiência necessária para a evolução é o seguinte:

Experiência necessária = (Pontos do Próximo Estágio - Pontos do Estágio Atual) × 10XP

Por exemplo, um Jigglypuff(8pts) evoluindo para Wigglytuff(12pts) precisaria acumular 40XP + Pedra da Lua para evoluir. Se durante a criação da ficha do seu Jigglypuff, além das sugestões da 3DeT Victory Pokédex , você adicionou a perícia Arte[+1pt] e uma Vantagem "Canção de Ninar (Fada)" Paralisia[+1pt], você estará criando um Jigglypuff(10pts). No entanto, sua necessidade de 40XP + Pedra da Lua continuará a mesma para sua evolução. Perceba que Pokémon como Jigglypuff que têm uma condição especial para evolução (ex: portar uma Pedra da Lua), mantêm a necessidade de XP para evolução + a condição especial.

Como alternativa, e com a aprovação do Mestre, caso alguma vantagem, desvantagem ou perícia, não faça mais sentido para o estágio evoluído, você pode substituí-las (desde que mantenha o mesmo número de pontos utilizados).

Caso tenha utilizado XP para comprar Poder, Habilidade ou Resistência, lembre-se de anotar essa diferença para o estágio evoluído.

## Fale Conosco

Se surgirem dúvidas, se precisar de suporte ou se quiser contribuir com sugestões ou de qualquer outra forma para o projeto, não hesite em nos contatar através do email [3detvictorypokedex@gmail.com](mailto:3detvictorypokedex@gmail.com).

Estamos prontos para ajudar!

---

Todos os direitos relacionados aos Pokémon, incluindo nomes, imagens e propriedades, são reservados à The Pokémon Company, Nintendo e Game Freak. A 3DeT Victory Pokédex é um projeto criado por fãs, sem fins lucrativos, e não possui qualquer afiliação oficial com as mencionadas empresas. Além disso, o sistema de RPG 3DeT Victory é propriedade da Editora Jambô, responsável por sua criação e publicação. Qualquer uso desses nomes, imagens e conceitos deve ser feito de acordo com as políticas e diretrizes estabelecidas pelas respectivas empresas e editora.
