import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  footerContainer: {
    justifyContent: 'flex-end',
  },
  linearGradientStyles: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 25
  },
  bottomTabs: {
    height: 100,
    flexDirection: 'row',
    paddingBottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white
  },
  outterAnimatedView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerAnimatedView: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  imageStyles: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray
  },
  labelText: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.h4
  }
});
