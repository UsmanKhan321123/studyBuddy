import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSocialAuth from "../hooks/useSocialAuth";
export default function AuthScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();
  const isLoading = loadingStrategy !== null;

  return (
    <SafeAreaView>
    
        <Text className="text" style={styles.text}>
          Auth Screen
        </Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 30,
    color: "purple",
    textAlign: "center",
    flex: 1,
  },
});
