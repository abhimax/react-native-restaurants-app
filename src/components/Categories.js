import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = ({categories, setTerm, term}) => {
    return(
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
    );
}
export default Categories;