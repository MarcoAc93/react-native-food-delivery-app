import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.padding
  },
  itemContainer: {
    width: 180,
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    paddingHorizontal: 10,
    paddingVertical: 12
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  caloriesIcon: {
    width: 28,
    height: 28
  },
  loveIcon: {
    width: 18,
    height: 18
  },
  image: {
    width: 100,
    height: 120,
    alignSelf: 'center'
  },
  name: {
    ...FONTS.h3,
    textAlign: 'center'
  },
  description: {
    ...FONTS.body5,
    color: COLORS.gray,
    textAlign: 'center'
  },
  price: {
    ...FONTS.body3,
    textAlign: 'center'
  }
});
