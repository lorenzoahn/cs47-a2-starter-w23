import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={style.header}>
      <Image source={Icons.menu.light} style={style.headerIcons} />
      <Text style={style.title}>ensom</Text>
      <Image source={Icons.sun} style={style.headerIcons} />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: windowWidth * 0.05,
    // flex: 1,
  },
  headerIcons: {
    height: windowWidth * 0.12,
    width: windowWidth * 0.12,
  },
  title: {
    fontFamily: "Sydney-Bold",
    fontSize: windowWidth * 0.09,
  },
});
export default Header;
