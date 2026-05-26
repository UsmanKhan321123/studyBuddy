// import { COLORS } from "../../lib/theme";
// import { Ionicons } from "@expo/vector-icons";
// import { Text, View } from "react-native";

// type EmptyStateProps = {
//   icon: keyof typeof Ionicons.glyphMap;
//   title: string;
//   subtitle: string;
// };

// export function EmptyState({ icon, title, subtitle }: EmptyStateProps) {
//   return (
//     <View className="flex-1 items-center justify-center bg-surface-light px-5">
//       <View className="mb-4">
//         <Ionicons name={icon} size={64} color={COLORS.textSubtle} />
//       </View>
//       <Text className="text-center text-base text-foreground-muted">{title}</Text>
//       <Text className="mt-1 text-center text-sm text-foreground-subtle">{subtitle}</Text>
//     </View>
//   );
// }


import { COLORS } from "../../lib/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type EmptyStateProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
};

export function EmptyState({ icon, title, subtitle }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons name={icon} size={64} color={COLORS.textSubtle} />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surfaceLight,
    paddingHorizontal: 20,
  },

  iconWrapper: {
    marginBottom: 16,
  },

  title: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.textMuted,
  },

  subtitle: {
    marginTop: 4,
    textAlign: "center",
    fontSize: 14,
    color: COLORS.textSubtle,
  },
});