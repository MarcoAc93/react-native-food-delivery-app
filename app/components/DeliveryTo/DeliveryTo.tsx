import React from "react";
import { View, Text, Image } from 'react-native';
import { icons } from "../../../constants";
import { styles } from "./styles";

export const DeliveryTo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.delivery}>DELIVERY TO</Text>
      <View style={styles.textIconContainer}>
        <Text style={styles.address}>Quebrada 2380, int #3, Guadalajara Jal</Text>
        <Image source={icons.down_arrow} style={styles.image} />
      </View>
    </View>
  );
};
