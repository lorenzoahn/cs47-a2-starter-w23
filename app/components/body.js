import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
} from "react-native";
import Icons from "../../assets/Icons";
import Profiles from "../../assets/Profiles";
import { Themes } from "../../assets/Themes";
import themes from "../../assets/Themes/themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Body = () => {
  return (
    <View style={style.body}>
      <ImageBackground
        source={Profiles.mtl.image}
        style={style.profileImage}
        imageStyle={style.profileImageStyle}
      >
        <Text style={style.profileName}>{Profiles.mtl.name}</Text>
        <Text style={style.profileDistance}>{Profiles.mtl.caption}</Text>
      </ImageBackground>

      <View style={style.audio}>
        <View>
          <Text style={style.audioLabel}>My hottest take</Text>
        </View>
        <View style={style.audioIcons}>
          <Image source={Icons.player.light} style={style.audioPlayer} />
          <Image source={Icons.audioWave.light} style={style.audioWave} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    position: "relative",
  },
  audio: {
    backgroundColor: Themes.light.bgSecondary,
    width: windowHeight * 0.4,
    height: undefined,
    borderRadius: 30,
    padding: 20,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadowRadius,
  },
  audioIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -15,
    marginTop: -15,
  },
  audioLabel: {
    fontFamily: "Sydney",
    fontSize: 32,
    color: Themes.light.text,
  },
  audioPlayer: {
    width: "20%",
    height: undefined,
    aspectRatio: 1 / 1,
    marginRight: 20,
  },
  audioWave: {
    flex: 1,
    resizeMode: "contain",
    margin: -10,
  },
  profileImageStyle: {
    borderRadius: 8,
  },
  profileImage: {
    width: windowHeight * 0.4,
    height: undefined,
    aspectRatio: 1 / 1.1,
    position: "relative",
    padding: 8,
    marginBottom: 25,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadowRadius,
  },
  profileName: {
    fontFamily: "Sydney",
    fontSize: 32,
    color: Themes.light.textSecondary,
    position: "absolute",
    top: 8,
    left: 8,
  },
  profileDistance: {
    fontFamily: "Sydney",
    fontSize: 18,
    color: Themes.light.textSecondary,
    position: "absolute",
    bottom: 8,
    left: 8,
  },
});

export default Body;
