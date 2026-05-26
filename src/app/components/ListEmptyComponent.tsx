// import { COLORS } from "../../lib/theme";
// import { Ionicons } from "@expo/vector-icons";
// import { Text, View } from "react-native";

// export default function ListEmptyComponent() {
//   return (
//     <View className="items-center pt-20 gap-2">
//       <Ionicons name="people-outline" size={48} color={COLORS.textSubtle} />
//       <Text className="text-[17px] font-semibold text-foreground">No users found</Text>
//     </View>
//   );
// // 


import { COLORS } from "../../lib/theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

export default function ListEmptyComponent() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="people-outline"
        size={48}
        color={COLORS.textSubtle}
      />

      <Text style={styles.text}>
        No users found
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 80, // pt-20
    gap: 8, // gap-2
  },

  text: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.textSubtle
  },
});