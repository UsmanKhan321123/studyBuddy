// import { COLORS } from "../../lib/theme";
// import { Ionicons } from "@expo/vector-icons";
// import { Image } from "expo-image";
// import { ActivityIndicator, Pressable, Text, View } from "react-native";
// import type { UserResponse } from "stream-chat";

// type ExploreUserCardProps = {
//   item: UserResponse;
//   creating: string | null;
//   onStartChat: (targetId: string) => void;
// };

// const ExploreUserCard = ({ item, creating, onStartChat }: ExploreUserCardProps) => {
//   return (
//     <Pressable
//       className="flex-row items-center bg-surface rounded-2xl p-3.5 mb-2.5 border border-border gap-3.5"
//       onPress={() => onStartChat(item.id)}
//       disabled={creating !== null}
//     >
//       <Image
//         source={item.image}
//         style={{ width: 48, height: 48, borderRadius: 24 }}
//         contentFit="cover"
//       />

//       {item.online && (
//         <View className="w-3 h-3 rounded-full bg-accent-secondary absolute left-[50px] top-[46px] border-2 border-surface" />
//       )}

//       {/* User info */}
//       <View className="flex-1">
//         <Text className="text-base font-semibold text-foreground" numberOfLines={1}>
//           {item.name || item.id}
//         </Text>
//         <Text className="text-xs text-foreground-muted mt-0.5">
//           {item.online ? "Online" : "Offline"}
//         </Text>
//       </View>

//       {creating === item.id ? (
//         <ActivityIndicator size="small" color={COLORS.primary} />
//       ) : (
//         <View className="w-9 h-9 rounded-xl bg-primary/20 justify-center items-center">
//           <Ionicons name="chatbubble" size={16} color={COLORS.primary} />
//         </View>
//       )}
//     </Pressable>
//   );
// };

// export default ExploreUserCard;



import { COLORS } from "../../lib/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { UserResponse } from "stream-chat";

type ExploreUserCardProps = {
  item: UserResponse;
  creating: string | null;
  onStartChat: (targetId: string) => void;
};

const ExploreUserCard = ({
  item,
  creating,
  onStartChat,
}: ExploreUserCardProps) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() => onStartChat(item.id)}
      disabled={creating !== null}
    >
      <Image
        source={item.image}
        style={styles.avatar}
        contentFit="cover"
      />

      {item.online && <View style={styles.onlineIndicator} />}

      {/* User info */}
      <View style={styles.userInfo}>
        <Text
          style={styles.username}
          numberOfLines={1}
        >
          {item.name || item.id}
        </Text>

        <Text style={styles.status}>
          {item.online ? "Online" : "Offline"}
        </Text>
      </View>

      {creating === item.id ? (
        <ActivityIndicator
          size="small"
          color={COLORS.primary}
        />
      ) : (
        <View style={styles.chatButton}>
          <Ionicons
            name="chatbubble"
            size={16}
            color={COLORS.primary}
          />
        </View>
      )}
    </Pressable>
  );
};

export default ExploreUserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 14,
    position: "relative",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 999,
    backgroundColor: COLORS.accentSecondary,
    position: "absolute",
    left: 50,
    top: 46,
    borderWidth: 2,
    borderColor: COLORS.surface,
  },

  userInfo: {
    flex: 1,
  },

  username: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },

  status: {
    fontSize: 12,
    color: COLORS.textSubtle,
    marginTop: 2,
  },

  chatButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "rgba(0, 122, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
});