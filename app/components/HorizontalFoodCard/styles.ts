import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 130,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2
  },
  image: {
    marginTop: 20,
    height: 110,
    width: 110,
  },
  infoSection: {
    flex: 1
  },
  nameStyle: {
    ...FONTS.h3,
    fontSize: 17
  },
  descriptionStyle: {
    ...FONTS.body4,
    color: COLORS.darkGray2
  },
  priceStyle: {
    ...FONTS.h2,
    marginTop: SIZES.base
  },
  caloriesContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: SIZES.radius
  },
  caloriesIcon: {
    width: 30,
    height: 30
  },
  caloriesText: {
    color: COLORS.darkGray2,
    ...FONTS.body5
  }
});
