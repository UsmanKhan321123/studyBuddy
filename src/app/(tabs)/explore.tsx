// import ExploreUserCard from "../components/ExploreUserCard"
// import ListEmptyComponent from "../components/ListEmptyComponent";
// import { useAppContext } from "../contexts/AppProvider";
// import useStartChat from "../hooks/userStartChat";
// import useStreamUsers from "../hooks/useStreamUsers";
// import { COLORS } from "@/lib/theme";
// import { useUser } from "@clerk/expo";
// import { Ionicons } from "@expo/vector-icons";
// import { useState } from "react";
// import { ActivityIndicator, FlatList, Pressable, Text, TextInput, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import type { UserResponse } from "stream-chat";
// import { useChatContext } from "stream-chat-expo";

// const ExploreScreen = () => {
//   const { setChannel } = useAppContext();
//   const { user } = useUser();
//   const { client } = useChatContext();
//   const userId = user?.id ?? "";

//   const [creating, setCreating] = useState<string | null>(null);
//   const [search, setSearch] = useState("");

//   const { loading, users } = useStreamUsers(client, userId);

//   const { handleStartChat } = useStartChat({ client, userId, setChannel, setCreating });

//   const filteredUsers = !search.trim()
//     ? users
//     : users.filter(
//         (u) =>
//           u.name?.toLowerCase().includes(search.toLowerCase()) ||
//           u.id.toLowerCase().includes(search.toLowerCase()),
//       );

//   const renderUserItem = ({ item }: { item: UserResponse }) => (
//     <ExploreUserCard item={item} creating={creating} onStartChat={handleStartChat} />
//   );

//   return (
//     <SafeAreaView className="flex-1 bg-background">
//       {/* Header */}
//       <View className="px-5 pt-3 pb-1">
//         <Text className="text-[28px] font-bold text-foreground">Explore</Text>
//         <Text className="text-sm text-foreground-muted mt-1">Find people and start chatting</Text>
//       </View>

//       {/* Search bar */}
//       <View className="flex-row items-center bg-surface mx-5 my-4 px-3.5 py-3 rounded-[14px] gap-2.5 border border-border">
//         <Ionicons name="search" size={18} color={COLORS.textMuted} />

//         <TextInput
//           className="flex-1 text-[15px] text-foreground"
//           placeholder="Search people..."
//           placeholderTextColor={COLORS.textMuted}
//           value={search}
//           onChangeText={setSearch}
//           autoCapitalize="none"
//           autoCorrect={false}
//         />

//         {search.length > 0 && (
//           <Pressable onPress={() => setSearch("")}>
//             <Ionicons name="close-circle" size={18} color={COLORS.textMuted} />
//           </Pressable>
//         )}
//       </View>

//       {/* USERS LISTS */}
//       {loading ? (
//         <View className="flex-1 justify-center items-center">
//           <ActivityIndicator size="large" color={COLORS.primary} />
//         </View>
//       ) : (
//         <FlatList
//           data={filteredUsers}
//           keyExtractor={(item) => item.id}
//           renderItem={renderUserItem}
//           contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={<ListEmptyComponent />}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// export default ExploreScreen;



import ExploreUserCard from "../components/ExploreUserCard";
import ListEmptyComponent from "../components/ListEmptyComponent";
import { useAppContext } from "../contexts/AppProvider";
import useStartChat from "../hooks/userStartChat";
import useStreamUsers from "../hooks/useStreamUsers";
import { COLORS } from "@/lib/theme";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { UserResponse } from "stream-chat";
import { useChatContext } from "stream-chat-expo";

const ExploreScreen = () => {
  const { setChannel } = useAppContext();

  const { user } = useUser();

  const { client } = useChatContext();

  const userId = user?.id ?? "";

  const [creating, setCreating] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const { loading, users } = useStreamUsers(client, userId);

  const { handleStartChat } = useStartChat({
    client,
    userId,
    setChannel,
    setCreating,
  });

  const filteredUsers = !search.trim()
    ? users
    : users.filter(
        (u) =>
          u.name?.toLowerCase().includes(search.toLowerCase()) ||
          u.id.toLowerCase().includes(search.toLowerCase())
      );

  const renderUserItem = ({
    item,
  }: {
    item: UserResponse;
  }) => (
    <ExploreUserCard
      item={item}
      creating={creating}
      onStartChat={handleStartChat}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Explore
        </Text>

        <Text style={styles.subtitle}>
          Find people and start chatting
        </Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={18}
          color={COLORS.textMuted}
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Search people..."
          placeholderTextColor={COLORS.textMuted}
          value={search}
          onChangeText={setSearch}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Ionicons
              name="close-circle"
              size={18}
              color={COLORS.textMuted}
            />
          </Pressable>
        )}
      </View>

      {/* USERS LIST */}
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
          />
        </View>
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={renderUserItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<ListEmptyComponent />}
        />
      )}
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    paddingHorizontal: 20, // px-5
    paddingTop: 12, // pt-3
    paddingBottom: 4, // pb-1
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.textSubtle,
  },

  subtitle: {
    fontSize: 14, // text-sm
    color: COLORS.textMuted,
    marginTop: 4, // mt-1
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: COLORS.surface,

    marginHorizontal: 20, // mx-5
    marginVertical: 16, // my-4

    paddingHorizontal: 14, // px-3.5
    paddingVertical: 12, // py-3

    borderRadius: 14,

    gap: 10, // gap-2.5

    borderWidth: 1,
    borderColor: COLORS.border,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textMuted,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});