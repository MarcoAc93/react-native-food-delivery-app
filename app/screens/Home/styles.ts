import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS, icons } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2
  },
  searchBarSearchIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  },
  searchBarText: {
    flex: 1,
    marginLeft: SIZES.radius,
    ...FONTS.body3
  },
  searchBarFilterIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  }
});
