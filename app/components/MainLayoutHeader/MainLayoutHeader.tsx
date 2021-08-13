import {  } from "@react-navigation/drawer";
import React from "react";
import {
  View, Text, SafeAreaView,
  Image, Platform, TouchableOpacity,
} from 'react-native';
import { dummyData, icons } from "../../../constants";
import { useTabs } from "../../context/tabs";

import { styles } from "./styles";

export const MainLayoutHeader = ({ navigation }: { navigation: any }) => {
  const { tabSelected } = useTabs();

  return ( 
    <View style={{ ...styles.headerContainer, marginTop: Platform.OS === 'android' ? 20 : 55 }}>
      <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
        <View style={styles.menuIconContainer}>
          <Image source={icons.menu} style={styles.menuIcon} />
        </View>
      </TouchableOpacity>

      <View>
        <Text style={styles.tabName}>{tabSelected}</Text>
      </View>

      <View>
        <Image source={dummyData.myProfile.profile_image} style={styles.profileImage} />
      </View>
    </View>
  );
};
