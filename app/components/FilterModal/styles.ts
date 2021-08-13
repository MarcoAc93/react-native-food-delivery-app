import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack7
  },
  onCloseBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  animatedViewModal: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    padding: SIZES.padding,
    borderTopRightRadius: SIZES.padding,
    borderTopLeftRadius: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterText: {
    flex: 1,
    ...FONTS.h3
  },
  iconContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.gray2
  },
  crossStyle: {
    tintColor: COLORS.gray2,
    width: 30,
    height: 30
  },
  sectionContainer: {
    marginTop: SIZES.padding
  },
  sectionTitle: {
    ...FONTS.h3
  },
  multislideContainer: {
    alignItems: 'center',
    height: 60,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 1,
    shadowOpacity: 0.1
  }
});
