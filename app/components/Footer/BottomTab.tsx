import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Animated from "react-native-reanimated";
import { COLORS } from "../../../constants";
import { styles } from "./styles";

interface BottomTabProps {
  label: string;
  icon: any;
  isFocused: boolean;
  onPress: () => void;
  outerContainerStyle: {
    flex: number;
  }
  innerContainerStyle: {
    backgroundColor: string;
  }
};

export const BottomTab = ({ label, icon, isFocused, onPress, outerContainerStyle, innerContainerStyle }: BottomTabProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.outterAnimatedView, outerContainerStyle]}>
        <Animated.View style={[styles.innerAnimatedView, innerContainerStyle]}>
          <Image source={icon} style={{ ...styles.imageStyles, tintColor: isFocused ? COLORS.white : COLORS.gray }} />
          {isFocused && <Text numberOfLines={1} style={styles.labelText}>{label}</Text>} 
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
