import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20
  },
  title: {
    flex: 1,
    ...FONTS.h3,
  },
  showAll: {
    color: COLORS.primary,
    ...FONTS.body3
  }
});
