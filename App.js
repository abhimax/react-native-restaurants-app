import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItems from './src/data/db';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Search/>
      <FlatList 
        data={CategoryItems}
        renderItem={({item, index})=>{
        return <CategoryItem name={item.name} imageURL={item.mageURL} index={index}/>
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category)=> category.name}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
