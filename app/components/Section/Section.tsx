import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { FONTS } from "../../../constants";

import { styles } from "./styles";

type SectionProps = {
  title: string;
  onPress: () => void;
  children: JSX.Element;
};

export const Section = ({ title, onPress, children }: SectionProps) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.showAll}>Show All</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};
