import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItems from './src/data/db';
import Categories from './src/components/Categories';

export default function App() {
  const [term, setTerm] = useState("Burger");

  return (
    <View>
      <Header/>
      <Search/>
      <Categories
        categories = {CategoryItems}
        setTerm = { setTerm }
        term = {term}
      />
      <StatusBar style="auto" />
    </View>
  );
}
