import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons } from "../../../constants";

import { styles } from "./styles";

interface HorizontalFoodCardProps {
  id: number;
  name: string;
  description: string;
  categories: Array<any>;
  price: number;
  calories: number;
  isFavourite: boolean;
  image: number;
}

export const HorizontalFoodCard = (props: HorizontalFoodCardProps) => {

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.infoSection}>
        <Text style={styles.nameStyle}>{props.name}</Text>
        <Text style={styles.descriptionStyle}>{props.description}</Text>
        <Text style={styles.priceStyle}>${props.price}</Text>
      </View>
      <View style={styles.caloriesContainer}>
        <Image source={icons.calories} style={styles.caloriesIcon} />
        <Text style={styles.caloriesText}>{props.calories} Calories</Text>
      </View>
    </TouchableOpacity>
  );
};
