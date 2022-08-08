import { Image, Text, View, StyleSheet } from "react-native";
import { elevation } from "../common/styles";

const CategoryItem = ({ name, imageURL }) => {
    return(
        <View style={[styles.container, styles.elevation]}>
            <Image style={styles.image} source={imageURL}/>
             
            <Text style={styles.header}>{name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        width: 70,
        height: 100,
        backgroundColor: "white",
        borderRadius: 6,
        marginVertical: 15,
        marginHorizontal: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    elevation,
    image: {
        width: 70,
        height: 70,
    },
    header: {
        fontWeight: "bold"
    }
});
export default CategoryItem;