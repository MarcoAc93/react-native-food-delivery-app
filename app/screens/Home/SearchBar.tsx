import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { icons } from '../../../constants';

import { styles } from './styles';

export const SearchBar = ({ showFilterModal }: { showFilterModal: () => void }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Image source={icons.search} style={styles.searchBarSearchIcon} />
      <TextInput
        style={styles.searchBarText}
        placeholder="search food..."
      />
      <TouchableOpacity onPress={showFilterModal}>
        <Image source={icons.filter} style={styles.searchBarFilterIcon} />
      </TouchableOpacity>
    </View>
  );
};
