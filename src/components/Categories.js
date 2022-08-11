import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = ({categories, setTerm, term}) => {
    return(
        <View>
            <FlatList 
            data={categories}
            renderItem={({item, index})=>{
                    return <CategoryItem 
                    name={item.name}
                    imageURL={item.mageURL}
                    index={index}
                    isActive={ item.name === term}
                    handlePress={ ()=> setTerm(item.name)}
                />
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(category)=> category.name}
      />
        </View>

    );
}
export default Categories;