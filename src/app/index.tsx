import { Image } from "expo-image";
import { Link, Redirect } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import "../../global.css";
import { useAuth } from "@clerk/expo";

export default function Index() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }
  return (
    <View style={styles.container} className="">
      <Text className="text-3xl  text-red-500 px-11 m-4">
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Text className="text-3xl">This is the dummy text</Text>
      <Link style={styles.link} href="/about">
        About
      </Link>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  text: {
    color: "blue",
    fontSize: 23,
    textAlign: "center",
  },
  link: {
    fontSize: 34,
    color: "black",
    borderColor: "white",
    borderWidth: 2,
    padding: 6,
    borderRadius: 4,
  },
  image: {
    width: 170,
    height: 150,
    margin: 30,
  },
});
