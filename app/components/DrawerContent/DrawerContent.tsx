import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem } from './DrawerItem';
import { constants, dummyData, icons } from '../../../constants';
import { styles } from './styles';
import { useTabs } from '../../context/tabs';

interface DrawerContentProps {
  navigation: any;
};

export const DrawerContent = ({ navigation }: DrawerContentProps) => {
  const { tabSelected, setTabSelected } = useTabs();

  const drawerItemOnPress = (tab: string, navigateTo: string) => {
    navigation.navigate(navigateTo);
    setTabSelected(tab);
  }

  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.innerContainerStyle}>
        {/* Close button */}
        <View>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Image source={icons.cross} style={styles.closeImage} />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <TouchableOpacity onPress={() => { console.log('profile section')}} style={styles.profileContainer}>
          <Image source={dummyData.myProfile.profile_image} style={styles.profileImage} />
          <View style={styles.profileIntoContainer}>
            <Text style={styles.profileName}>Marco Andrade</Text>
            <Text style={styles.viewProfile}>View your profile</Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View style={styles.drawerItemsContainer}>
          <DrawerItem
            label={constants.screens.home}
            icon={icons.home}
            onPress={() =>  { drawerItemOnPress(constants.screens.home, "MainLayout") }}
            isFocused={tabSelected === constants.screens.home}
          />
          <DrawerItem
            label="Wallet"
            icon={icons.wallet}
            onPress={() =>  { drawerItemOnPress("Wallet", "MainLayout") }}
            isFocused={tabSelected === "Wallet"}
          />
          <DrawerItem
            label="Notification"
            icon={icons.notification}
            onPress={() => { drawerItemOnPress(constants.screens.notification, "MainLayout")}}
            isFocused={tabSelected === constants.screens.notification}
          />
          <DrawerItem
            label="Favorites"
            icon={icons.favourite}
            onPress={() => { drawerItemOnPress(constants.screens.favourite, "MainLayout")}}
            isFocused={tabSelected === constants.screens.favourite}
          />

          <View style={styles.drawerItemDivider} />

          <DrawerItem
            label="Track Your Order"
            icon={icons.location}
            onPress={() =>  { drawerItemOnPress("Track Your Order", "MainLayout") }}
            isFocused={tabSelected === "Track Your Order"}
          />
          <DrawerItem
            label="Coupons"
            icon={icons.coupon}
            onPress={() =>  { drawerItemOnPress("Coupons", "MainLayout") }}
            isFocused={tabSelected === "Coupons"}
          />
          <DrawerItem
            label="Settings"
            icon={icons.setting}
            onPress={() =>  { drawerItemOnPress("Settings", "MainLayout") }}
            isFocused={tabSelected === "Settings"}
          />
          <DrawerItem
            label="Invite a Friend"
            icon={icons.profile}
            onPress={() =>  { drawerItemOnPress("Invite a Friend", "MainLayout") }}
            isFocused={tabSelected === "Invite a Friend"}
          />
          <DrawerItem
            label="Help Center"
            icon={icons.help}
            onPress={() =>  { drawerItemOnPress("Help Center", "MainLayout") }}
            isFocused={tabSelected === "Help Center"}
          />
        </View>

        <View style={styles.lastDrawerItem}>
          <DrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
