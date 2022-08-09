import yelp from '../api/yelp';
const { View, Text, StyleSheet } = require("react-native");

const Restaurants = () =>{

    const searchRestaurants = async () => {
        const response = await yelp.get('/search',{
            params : {
                limit : 15,
                term : "Dessert",
                location: "Toronto"
            }
        });
        console.log(response);
    }
    searchRestaurants();
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