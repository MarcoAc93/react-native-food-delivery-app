import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuIconContainer: {
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2,
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  tabName: {
    color: COLORS.black,
    ...FONTS.body2
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius
  }
});
