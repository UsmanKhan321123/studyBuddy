import { useAuth } from "@clerk/expo";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function SsoCallbackScreen() {
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace("/(tabs)");
      return;
    }

    const timeout = setTimeout(() => {
      router.replace("/(auth)");
    }, 1200);

    return () => clearTimeout(timeout);
  }, [isLoaded, isSignedIn]);

  return (
    <View style={styles.container}>
      <ActivityIndicator color="#A29BFE" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F0E17",
  },
});
