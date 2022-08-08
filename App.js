import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItems from './src/data/db';

export default function App() {
  const [term, setTerm] = useState("Burger");

  return (
    <View style={styles.container}>
      <Header/>
      <Search/>
      <FlatList 
        data={CategoryItems}
        renderItem={({item, index})=>{
        return <CategoryItem name={item.name} imageURL={item.mageURL} index={index} isActive={ item.name === term}/>
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
