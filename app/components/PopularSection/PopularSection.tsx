import React from "react";
import { View, FlatList } from 'react-native';
import { Section } from "../Section";
import { HorizontalFoodCard } from "../HorizontalFoodCard";

import { styles } from "./styles";

export const PopularSection = ({ popularItems }: { popularItems: Array<any> }) => {
  return (
    <Section title="Popular Near you" onPress={() => {}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popularItems}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item, index }) => (
          <View style={styles.width}>
            <HorizontalFoodCard {...item} />
          </View>
        )}
      />
    </Section>
  );
};
