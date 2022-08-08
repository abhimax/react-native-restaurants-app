import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";

const CategoryItem = ({ name, imageURL, index, isActive, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          isActive
            ? { backgroundColor: "#f2700f" }
            : { backgroundColor: "white" },
        ]}
      >
        <Image style={styles.image} source={imageURL} />
        <Text
          style={[
            styles.header,
            isActive ? { color: "white" } : { color: "black" },
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 70,
    height: 70,
  },
  header: {
    fontWeight: "bold",
  },
});
export default CategoryItem;
