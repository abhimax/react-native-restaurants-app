import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Search/>
      <CategoryItem name="Burger" imageURL={require("./src/assets/images/burger.png")}/>
      <CategoryItem name="Pizza" imageURL={require("./src/assets/images/pizza.png")}/>
      <CategoryItem name="Cake" imageURL={require("./src/assets/images/cake.png")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
