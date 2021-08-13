import React, { Ref, useEffect, useRef } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTabs } from '../context/tabs';
import { Cart, Favourite, Home, Notifications, Search } from './';

import { MainLayoutHeader } from '../components/MainLayoutHeader';
import { Footer } from '../components/Footer';
import { COLORS, constants, SIZES } from '../../constants';

interface MainLayoutProps {
  route: any;
  navigation: any;
  animatedStyles: {
    borderRadius: Animated.Node<number>;
    transform: { scale: Animated.Node<number>; }[];
  }
}

export const MainLayout = ({ animatedStyles, navigation }: MainLayoutProps) => {
  const { setTabSelected, tabSelected } = useTabs();
  const flatListRef = useRef();

  useEffect(() => {
    setTabSelected('Home');
  }, []);

  useEffect(() => {
    if (tabSelected === constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });
    } else if (tabSelected === constants.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });
    } else if (tabSelected === constants.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });
    } else if (tabSelected === constants.screens.favourite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });
    } else if (tabSelected === constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });
    }

  }, [tabSelected])

  return (
    <Animated.View style={{ ...styles.animatedViewContainer, ...animatedStyles }}>
      <MainLayoutHeader navigation={navigation} />

      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item, index}) => {
            return (
              <View style={{ width: SIZES.width }}>
                {item.label === constants.screens.home && <Home />}
                {item.label === constants.screens.cart && <Cart />}
                {item.label === constants.screens.favourite && <Favourite />}
                {item.label === constants.screens.notification && <Notifications />}
                {item.label === constants.screens.search && <Search />}
              </View>
            )
          }}
        />
      </View>

      <Footer
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedViewContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  }
})
