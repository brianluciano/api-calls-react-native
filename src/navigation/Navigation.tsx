import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Image } from "react-native";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Favorite" 
            component= {FavoriteNavigation} 
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size ={size} />
            }}
            />
            <Tab.Screen 
            name="Pokedex" 
            component= {PokedexNavigation} 
            options={{
            tabBarIcon: () => renderPokeball(),
            }}
            />
            <Tab.Screen 
            name="Account" 
            component= {AccountNavigation} 
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size ={size} />
            }}
            />
        </Tab.Navigator>
    )
}

function renderPokeball() {
    return (
        <Image 
        source={require('../assets/pokeball.png')}
        style={{width: 40, height: 40, top: -15}} 
        />
    );
}
