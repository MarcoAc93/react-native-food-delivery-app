import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.padding,
    paddingHorizontal: 10,
    borderRadius: SIZES.radius
  },
  categoryIcon: {
    width: 45,
    height: 45,
    marginTop: 5
  }
});
