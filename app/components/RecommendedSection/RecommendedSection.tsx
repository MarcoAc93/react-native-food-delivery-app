import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text, FlatList } from 'react-native';
import { icons, SIZES } from "../../../constants";
import { Section } from "../Section";

import { styles } from "./styles";

export const RecommendedSection = ({ recommendedItems }: { recommendedItems: Array<any> }) => {
  return (
    <Section title="Recommended" onPress={() => {}}>
      <View style={styles.container}>
        <FlatList
          horizontal
          data={recommendedItems}
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{ ...styles.itemContainer, marginRight: SIZES.padding }}>
              <TouchableOpacity>
                <View style={styles.iconsContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={icons.calories} style={styles.caloriesIcon} />
                    <Text>{item.calories} Calories</Text>
                  </View>
                  <Image source={icons.love} style={styles.loveIcon} />
                </View>

                <Image source={item.image} style={styles.image} />

                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Section>
  );
};
