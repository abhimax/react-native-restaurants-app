import { useEffect } from "react";
import useRestaurants from "../hooks/useRestaurants";
const { View, Text, StyleSheet } = require("react-native");


const Restaurants = () =>{
    const [{data, loading, error}, searchRestaurants] = useRestaurants();
    useEffect(()=>{
        searchRestaurants();
    },[]);
    
    console.log(data, loading, error);
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Restaurants</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        marginHorizontal: 25,
        marginVertical: 15,
        flex: 1
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
        height: 100
    }
});
export default Restaurants;