import React, { Dispatch, SetStateAction } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, dummyData, FONTS, SIZES } from "../../../constants";

import { styles } from "./styles";

type MenuTypesProps = {
  selectedMenuType: number;
  setSelectedMenuType: React.Dispatch<React.SetStateAction<number>>;
  handleChangeCategory: (categoryId: number, menuId: number) => void;
}

export const MenuTypes = ({ setSelectedMenuType, handleChangeCategory, selectedMenuType }: MenuTypesProps) => {
  
  const handleChange = (itemId: number, categoryId: number) => {
    setSelectedMenuType(itemId);
    handleChangeCategory(categoryId, itemId);
  };
  
  return (
    <FlatList
      horizontal
      data={dummyData.menu}
      keyExtractor={item => `${item.id}`}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            ...styles.renderItemContainer,
            marginRight: index === dummyData.menu.length - 1 ? SIZES.padding : 0,
          }}
          onPress={() => handleChange(item.id, selectedMenuType)}
        >
          <Text style={{ color: selectedMenuType === item.id ? COLORS.primary : COLORS.black, ...FONTS.h3 }}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
