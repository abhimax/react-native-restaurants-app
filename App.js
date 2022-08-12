
 import { useState } from 'react';
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
 import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [term, setTerm] = useState("Burger");

  return (
    <HomeScreen/>
  ); 
}


// const navigator = createStackNavigator({
//   Home: HomeScreen
// },{
//   initialRouteName: "Home",
//   defaultNavigationOptions: {
//     title: "BusinessSearch"
//   }
// });

// export default createAppContainer(navigator);
