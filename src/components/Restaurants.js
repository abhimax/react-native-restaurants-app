import { useEffect } from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsItem from "./RestaurentItem";
const { View, Text, StyleSheet, ActivityIndicator, FlatList } = require("react-native");

const Restaurants = ({term}) =>{
    const [{data, loading, error}, searchRestaurants] = useRestaurants();
    useEffect(()=>{
        searchRestaurants(term);
    },[term]);

    if(loading) return <ActivityIndicator size="large" marginVertical={30}/>

    if(error) return (
        <View style={styles.container}>
            <Text style={styles.header}>Something wrong!</Text>
        </View>
    );
    console.log(data, loading, error);
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Restaurants</Text>
            <FlatList
                data = {data}
                keyExtractor = {(restaurant) => restaurant.id}
                renderItem = {({item})=><RestaurantsItem restaurant={item}/>
                }
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        marginHorizontal: 25,
        marginVertical: 15,
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
    }
});
export default Restaurants;