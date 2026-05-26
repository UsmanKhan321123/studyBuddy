// import { COLORS } from "../../lib/theme";
// import { ActivityIndicator, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export function FullScreenLoader({ message }: { message: string }) {
//   return (
//     <SafeAreaView className="flex-1 bg-background">
//       <View className="flex-1 items-center justify-center">
//         <ActivityIndicator size="large" color={COLORS.primary} className="mb-2" />
//         <Text className="text-foreground-muted">{message}</Text>
//       </View>
//     </SafeAreaView>
//   );
// }


import { COLORS } from "../../lib/theme";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function FullScreenLoader({ message }: { message: string }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          style={styles.loader}
        />

        <Text style={styles.message}>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loader: {
    marginBottom: 8,
  },

  message: {
    color: COLORS.textSubtle,
  },
});