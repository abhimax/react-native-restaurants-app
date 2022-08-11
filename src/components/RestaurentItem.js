import { Image, Text, View, StyleSheet } from "react-native";
import { elevation } from "../common/styles";

const RestaurantsItem = ({restaurant}) => {
    console.log('RESTAUREBNT >>>', restaurant);
    return(
        <View style={[styles.elevation, styles.container]}>
            <Image source={{ uri:restaurant.image_url}} style={ styles.image}/>
            <View style={[styles.infoContainer]}>
                <Text style={[styles.header]}>{restaurant.name}</Text>
                <View style={[styles.info]}>
                    <Text style={[styles.rating]}>{restaurant.rating}</Text>
                    <Text style={[styles.money]}>{restaurant.price}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        backgroundColor: "white",
        marginVertical:10,
        height:100,
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: 5,
        flexDirection: "row"
    },
    elevation,
    image : {
        width :75,
        height:75,
        marginLeft:10
    },
    infoContainer : {
        flex: 1,
        paddingHorizontal: 10
    },
    header : {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom:10
    },
    info: {
        display: "flex",
        flexDirection: "row"
    },
    rating : {
        marginRight: 20
    },
    money : {
        color: "gold"
    }
});
export default RestaurantsItem;