import { SafeAreaView, Text} from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getPokemonsApi } from "../api/pokemon";
import { getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from '../components/PokemonList';


export type pokemonsType = {
  id: string,
  name: string,
  type: string,
  order: number,
  image: string
}

export type paramProps = {
  pokemonList: pokemonsType[];
  loadPokemons: () => void;
  isNext: string;
  isLoading: boolean;
};

const Pokedex = () => {
  const navigation = useNavigation();
  //const pokemons : pokemonsType[] = [];
  const [pokemons, setPokemons] = useState<pokemonsType[]>([]);
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

  (async () => {
      await loadPokemons();
    })();
  }, []);

    const loadPokemons = async () => {
      try {
        setLoading(true);
        const response = await getPokemonsApi(nextUrl);
        setNextUrl(response.next);

        const pokemonsArray : pokemonsType[] = [];
   
        for await (const pokemon of response.results) {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other['official-artwork'].front_default
        });
        }

        setPokemons([...pokemons, ...pokemonsArray]);        
      } catch (error) {
        console.error(error); 
      }
       finally {
      // regresamos loading a false
          setLoading(false);
      }
    }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    
    <SafeAreaView>
      <PokemonList pokemons= {pokemons} 
      loadPokemons={loadPokemons}
      isNext={nextUrl}
      isLoading={loading}
      /> 
    </SafeAreaView>
  );
};

export default Pokedex ;