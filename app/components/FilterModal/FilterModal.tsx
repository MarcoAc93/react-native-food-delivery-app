import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState, useRef, useEffect } from "react";
import { View, Text, Animated, ScrollView, TouchableWithoutFeedback, Modal, Image, TouchableOpacity } from 'react-native';
import { COLORS, icons, SIZES } from "../../../constants";
import { styles } from "./styles";

type FilterModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Section = ({ title, children }: { title: string; children: JSX.Element }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

export const FilterModal = ({ isVisible, onClose }: FilterModalProps) => {
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - (SIZES.height * 0.85)]
  });

  return (
    <Modal animationType='fade' transparent visible={isVisible}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View style={styles.onCloseBackground} />
        </TouchableWithoutFeedback>

        <Animated.View style={{ ...styles.animatedViewModal, top: modalY }}>
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={styles.filterText}>Filter Your Search</Text>
            <TouchableOpacity onPress={() => setShowFilterModal(false)}>
              <View style={styles.iconContainer}>
                <Image source={icons.cross} style={styles.crossStyle} />
              </View>
            </TouchableOpacity>
          </View>

          {/* ScrollView */}
          <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 250 }} scrollEnabled={scrollEnabled}>
            {/* Distance */}
            <Section title="Distance">
              <View style={styles.multislideContainer}>
                <MultiSlider
                  values={[3, 10]}
                  min={1}
                  max={30}
                  markerOffsetY={13}
                  selectedStyle={{
                    backgroundColor: COLORS.primary
                  }}
                  trackStyle={{
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray2
                  }}
                  onValuesChangeStart={() => setScrollEnabled(false)}
                  onValuesChangeFinish={() => setScrollEnabled(true)}
                  sliderLength={SIZES.width - (SIZES.padding * 2) - 20}
                  minMarkerOverlapDistance={50}
                  customMarker={(e) => (
                    <View style={{ height: 60, alignItems: 'center', justifyContent: 'center'}}>
                      <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 4, borderColor: COLORS.white, backgroundColor: COLORS.primary, ...styles.shadow }} />
                      <Text>{e.currentValue}</Text>
                    </View>
                  )}
                />
              </View>
            </Section>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};
