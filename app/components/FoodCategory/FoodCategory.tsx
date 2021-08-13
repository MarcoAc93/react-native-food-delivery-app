import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS, dummyData, FONTS } from "../../../constants";
import { styles } from "./styles";

type FoodCategoryProps = {
  selectedMenuType: number;
  handleChangeCategory: (categoryId: number, menuId: number) => void;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number>>;
  selectedCategoryId: number;
}

export const FoodCategory = ({ selectedMenuType, handleChangeCategory, setSelectedCategoryId, selectedCategoryId }: FoodCategoryProps) => {
  const handleOnPress = (itemId: number) => {
    setSelectedCategoryId(itemId);
    handleChangeCategory(selectedMenuType, itemId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleOnPress(item.id)}>
            <View
              style={{
                ...styles.categoryContainer,
                marginRight: index === dummyData.categories.length - 1 ? 0 : 18,
                backgroundColor: selectedCategoryId === item.id ? COLORS.primary : COLORS.lightGray2
              }}
            >
              <Image source={item.icon} style={styles.categoryIcon} />
              <Text
                style={{
                  ...FONTS.body3,
                  color: selectedCategoryId === item.id ? COLORS.white : COLORS.darkGray
                }}
              >{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
