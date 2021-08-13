import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { DrawerContent } from '../components/DrawerContent';
import { COLORS } from '../../constants';
import Animated from 'react-native-reanimated';
import { TabProvider } from '../context/tabs';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26]
  });

  const animatedStyles = {
    borderRadius,
    transform: [{ scale }]
  };

  return (
    <TabProvider>
      <View style={styles.customDrawerContainer}>
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          initialRouteName="MainLayout"
          sceneContainerStyle={styles.transparent}
          drawerStyle={{ ...styles.drawerStyles, ...styles.transparent }}
          drawerContent={props => {
            setTimeout(() => {
              // @ts-ignore
              setProgress(props.progress);
            }, 0)
            return (
              <DrawerContent navigation={props.navigation} />
            )
          }}
        >
          <Drawer.Screen name="MainLayout">
            {props => <MainLayout {...props} animatedStyles={animatedStyles} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </View>
    </TabProvider>
  );
};

export default CustomDrawer;


const styles = StyleSheet.create({
  customDrawerContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  drawerStyles: {
    flex: 1,
    width: "65%",
    paddingRight: 20,
  },
  transparent: {
    backgroundColor: "transparent"
  }
});
