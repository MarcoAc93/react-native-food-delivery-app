import React from 'react';
import { View, Text } from 'react-native';
import { BottomTab } from './BottomTab';
import { COLORS, constants, icons } from '../../../constants';

import { styles } from './styles';
import { tabContextProps } from '../../context/tabs';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';

export const Footer = ({ tabSelected, setTabSelected }: tabContextProps) => {

    // TAB FLEX
    const homeTabFlex = useSharedValue(1);
    const homeTabColor = useSharedValue(COLORS.white);

    const searchTabFlex = useSharedValue(1);
    const searchTabColor = useSharedValue(COLORS.white);

    const cartTabFlex = useSharedValue(1);
    const cartTabColor = useSharedValue(COLORS.white);

    const favouriteTabFlex = useSharedValue(1);
    const favouriteTabColor = useSharedValue(COLORS.white);

    const notificationTabFlex = useSharedValue(1);
    const notificationTabColor = useSharedValue(COLORS.white);

    // TAB STYLES
    const homeFlexStyle = useAnimatedStyle(() => ({ flex: homeTabFlex.value }));
    const homeColorStyle = useAnimatedStyle(() => ({ backgroundColor: homeTabColor.value }));

    const searchFlexStyle = useAnimatedStyle(() => ({ flex: searchTabFlex.value }));
    const searchColorStyle = useAnimatedStyle(() => ({ backgroundColor: searchTabColor.value }));

    const cartFlexStyle = useAnimatedStyle(() => ({ flex: cartTabFlex.value }));
    const cartColorStyle = useAnimatedStyle(() => ({ backgroundColor: cartTabColor.value }));

    const favouriteFlexStyle = useAnimatedStyle(() => ({ flex: favouriteTabFlex.value }));
    const favouriteColorStyle = useAnimatedStyle(() => ({ backgroundColor: favouriteTabColor.value }));

    const notificationFlexStyle = useAnimatedStyle(() => ({ flex: notificationTabFlex.value }));
    const notificationColorStyle = useAnimatedStyle(() => ({ backgroundColor: notificationTabColor.value }));

    useEffect(() => {
      if (tabSelected === constants.screens.home) {
        homeTabFlex.value = withTiming(3, { duration: 500 });
        homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });
      } else {
        homeTabFlex.value = withTiming(1, { duration: 500 });
        homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
      }

      if (tabSelected === constants.screens.search) {
        searchTabFlex.value = withTiming(3, { duration: 500 });
        searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
      } else {
        searchTabFlex.value = withTiming(1, { duration: 500 });
        searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
      }

      if (tabSelected === constants.screens.cart) {
        cartTabFlex.value = withTiming(3, { duration: 500 });
        cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
      } else {
        cartTabFlex.value = withTiming(1, { duration: 500 });
        cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
      }

      if (tabSelected === constants.screens.favourite) {
        favouriteTabFlex.value = withTiming(3, { duration: 500 });
        favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 });
      } else {
        favouriteTabFlex.value = withTiming(1, { duration: 500 });
        favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 });
      }

      if (tabSelected === constants.screens.notification) {
        notificationTabFlex.value = withTiming(3, { duration: 500 });
        notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 });
      } else {
        notificationTabFlex.value = withTiming(1, { duration: 500 });
        notificationTabColor.value = withTiming(COLORS.white, { duration: 500 });
      }
    }, [tabSelected]);
  return (
    <View style={styles.footerContainer}>
      <View style={styles.bottomTabs}>
        <BottomTab
          label={constants.screens.home}
          icon={icons.home}
          isFocused={tabSelected === constants.screens.home}
          onPress={() => setTabSelected(constants.screens.home)}
          outerContainerStyle={homeFlexStyle}
          innerContainerStyle={homeColorStyle}
        />

        <BottomTab
          label={constants.screens.search}
          icon={icons.search}
          isFocused={tabSelected === constants.screens.search}
          onPress={() => setTabSelected(constants.screens.search)}
          outerContainerStyle={searchFlexStyle}
          innerContainerStyle={searchColorStyle}
        />

        <BottomTab
          label={constants.screens.cart}
          icon={icons.cart}
          isFocused={tabSelected === constants.screens.cart}
          onPress={() => setTabSelected(constants.screens.cart)}
          outerContainerStyle={cartFlexStyle}
          innerContainerStyle={cartColorStyle}
        />

        <BottomTab
          label={constants.screens.favourite}
          icon={icons.favourite}
          isFocused={tabSelected === constants.screens.favourite}
          onPress={() => setTabSelected(constants.screens.favourite)}
          outerContainerStyle={favouriteFlexStyle}
          innerContainerStyle={favouriteColorStyle}
        />

        <BottomTab
          label={constants.screens.notification}
          icon={icons.notification}
          isFocused={tabSelected === constants.screens.notification}
          onPress={() => setTabSelected(constants.screens.notification)}
          outerContainerStyle={notificationFlexStyle}
          innerContainerStyle={notificationColorStyle}
        />
      </View>
    </View>
  );
};
