import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  // DrawerContent Styles
  contentContainerStyle: {
    flex: 1
  },
  innerContainerStyle: {
    flex:1,
    paddingHorizontal: SIZES.radius,
  },
  closeImage: { width: 30,
    height: 30,
    tintColor: COLORS.white,
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    alignItems: 'center'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius
  },
  profileIntoContainer: {
    marginLeft: SIZES.padding * 0.5
  },
  profileName: {
    color: COLORS.white,
    ...FONTS.h3
  },
  viewProfile: {
    color: COLORS.white,
    ...FONTS.h4
  },
  drawerItemsContainer: {
    flex: 1,
    marginTop: SIZES.padding
  },

  // DrawerItem Styles
  drawerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: SIZES.base,
    paddingLeft: SIZES.radius,
    borderRadius: SIZES.radius
  },
  drawerItemLabel: {
    marginLeft: 15,
    color: COLORS.white,
    ...FONTS.h3
  },
  drawerItemDivider: {
    height: 1,
    marginVertical: SIZES.radius,
    marginLeft: SIZES.radius,
    backgroundColor: COLORS.lightGray1
  },
  lastDrawerItem: {
    marginBottom: SIZES.padding
  }
});
