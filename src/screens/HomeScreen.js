import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";
import CategoryItems from "../data/db";

export default function HomeScreen(){
    const [term, setTerm] = useState("Burger");
    return(
        <View>
        <Header/>
        <Search setTerm={setTerm}/>
        <Categories
          categories = {CategoryItems}
          setTerm = { setTerm }
          term = {term}
        />
        <Restaurants term={term}/>
        <StatusBar style="auto" />
      </View>
    );
}