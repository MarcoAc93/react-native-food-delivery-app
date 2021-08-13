import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
export const styles = StyleSheet.create({
  container: {
    marginLeft: SIZES.padding,
    marginTop: SIZES.padding
  },
  delivery: {
    color: COLORS.primary,
    ...FONTS.h3
  },
  address: {
    ...FONTS.h4
  },
  textIconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: SIZES.radius
  }
});
