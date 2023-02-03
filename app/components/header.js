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
    padding: 20,
    // flex: 1,
  },
  headerIcons: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
  },
  title: {
    fontFamily: "Sydney-Bold",
    fontSize: windowHeight * 0.05,
  },
});
export default Header;
