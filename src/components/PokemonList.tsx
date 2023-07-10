import { StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { pokemonsType, paramProps } from '../screens/Pokedex';
import PokemonCard from './PokemonCard';

export default function PokemonList(props: paramProps) {
    const { pokemons, loadPokemons, isNext, isLoading } = props;

    const loadMore = () => {
        loadPokemons();
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReachedThreshold={0.1}
            onEndReached={!isLoading && isNext && loadMore}           
            ListFooterComponent={
                isNext && (
                <ActivityIndicator 
                size="large"
                style={styles.spinner}
                color= "#AEAEAE"
                />
                )
            }
        />
    );
}

const styles = StyleSheet.create({
    flatListContentContainer : {
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    }
})