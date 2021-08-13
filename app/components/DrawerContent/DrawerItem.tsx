import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { COLORS } from '../../../constants';

import { styles } from './styles';

export const DrawerItem = ({ label, icon, onPress, isFocused }: { label: string; icon: ImageSourcePropType; onPress: () => void; isFocused?: boolean }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.drawerItemContainer,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : COLORS.primary
        }}
        onPress={onPress}
      >
      <Image source={icon} style={{ width: 25, height: 25, tintColor: 'white' }} />
      <Text style={styles.drawerItemLabel}>{label}</Text>
    </TouchableOpacity>
  );
};
