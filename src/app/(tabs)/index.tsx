

// import { useAppContext } from "../contexts/AppProvider.js";
// import { COLORS } from "@/lib/theme";
// import { getGreetingForHour } from "../../lib/utils.js";
// import { useUser } from "@clerk/expo";
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import { useState } from "react";
// import { Text, TextInput, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import type { Channel } from "stream-chat";
// import { ChannelList } from "stream-chat-expo";

// const ChatsScreen = () => {
//   const router = useRouter();
//   const { setChannel } = useAppContext();
//   const { user } = useUser();
//   const [search, setSearch] = useState("");

//   const filters = { members: { $in: [user?.id!] }, type: "messaging" };

//   const firstName = user?.firstName || "there";

//   const channelRenderFilterFn = (channels: Channel[]) => {
//     if (!search.trim()) return channels;

//     const q = search.toLowerCase();

//     return channels.filter((channel) => {
//       const name = (channel.data?.name as string | undefined)?.toLowerCase() ?? "";
//       const cid = channel.cid.toLowerCase();
//       return name.includes(q) || cid.includes(q);
//     });
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-background">
//       {/* HEADER */}
//       <View className="px-5 pt-3 pb-2">
//         <Text className="text-sm text-foreground-muted mb-0.5">
//           {getGreetingForHour()}, {firstName}
//         </Text>
//       </View>

//       {/* SEARCH BAR */}
//       <View className="flex-row items-center bg-surface mx-5 mb-3 px-3.5 py-3 rounded-[14px] gap-2.5 border border-border">
//         <Ionicons name="search" size={18} color={COLORS.textMuted} />
//         <TextInput
//           className="flex-1 text-[15px] text-foreground"
//           placeholder="Search study rooms..."
//           placeholderTextColor={COLORS.textMuted}
//           value={search}
//           onChangeText={setSearch}
//         />
//       </View>

//       {/* SECTION LABEL */}
//       <View className="flex-row items-center px-5 my-1.5 gap-2">
//         <Ionicons name="chatbubbles" size={16} color={COLORS.primaryLight} />
//         <Text className="text-[15px] font-semibold text-primary-light">Your Study Sessions</Text>
//       </View>

//       {/* CHANNEL LIST */}

//       <ChannelList
//         filters={filters}
//         // state:true will fetch initial full data of the channel and watch:true will keep the channel updated with the latest data
//         options={{ state: true, watch: true }}
//         sort={{ last_updated: -1 }}
//         channelRenderFilterFn={channelRenderFilterFn}
//         onSelect={(channel) => {
//           setChannel(channel);
//           router.push(`/channel/${channel.id}`);
//         }}
//         additionalFlatListProps={{
//           contentContainerStyle: { flexGrow: 1 },
//         }}
//         // EmptyStateIndicator={() => <Text className="flex-1 text-white">Hey start chatting</Text>}
//       />
//     </SafeAreaView>
//   );
// };

// export default ChatsScreen;


import { useAppContext } from "../contexts/AppProvider";
import { COLORS } from "@/lib/theme";
import { getGreetingForHour } from "../../lib/utils";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Channel } from "stream-chat";
import { ChannelList } from "stream-chat-expo";

type ChannelWithOptionalName = Channel & {
  data?: Channel["data"] & {
    name?: string;
  };
};

const ChatsScreen = () => {
  const router = useRouter();

  const { setChannel } = useAppContext();

  const { user } = useUser();

  const [search, setSearch] = useState("");

  const filters = {
    members: { $in: [user?.id!] },
    type: "messaging",
  };

  const firstName = user?.firstName || "there";

  const channelRenderFilterFn = (channels: Channel[]) => {
    if (!search.trim()) return channels;

    const q = search.toLowerCase();

    return channels.filter((channel) => {
      const namedChannel = channel as ChannelWithOptionalName;
      const name =
        namedChannel.data?.name?.toLowerCase() ?? "";

      const cid = channel.cid.toLowerCase();

      return name.includes(q) || cid.includes(q);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>
          {getGreetingForHour()}, {firstName}
        </Text>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={18}
          color={COLORS.textMuted}
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Search study rooms..."
          placeholderTextColor={COLORS.textMuted}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* SECTION LABEL */}
      <View style={styles.sectionContainer}>
        <Ionicons
          name="chatbubbles"
          size={16}
          color={COLORS.primaryLight}
        />

        <Text style={styles.sectionText}>
          Your Study Sessions
        </Text>
      </View>

      {/* CHANNEL LIST */}
      <ChannelList
        filters={filters}

        // state:true will fetch initial full data of the channel and watch:true will keep the channel updated with the latest data
        options={{
          state: true,
          watch: true,
        }}

        sort={{ last_updated: -1 }}

        channelRenderFilterFn={channelRenderFilterFn}

        onSelect={(channel) => {
          setChannel(channel);
          router.push({
            pathname: "/channel/[cid]",
            params: { cid: channel.cid },
          });
        }}

        additionalFlatListProps={{
          contentContainerStyle: {
            flexGrow: 1,
          },
        }}

        // EmptyStateIndicator={() => <Text style={{ flex: 1, color: "white" }}>Hey start chatting</Text>}
      />
    </SafeAreaView>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  headerContainer: {
    paddingHorizontal: 20, // px-5
    paddingTop: 12, // pt-3
    paddingBottom: 8, // pb-2
  },

  greetingText: {
    fontSize: 14, // text-sm
    color: COLORS.textMuted, // text-foreground-muted
    marginBottom: 2, // mb-0.5
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: COLORS.surface,

    marginHorizontal: 20, // mx-5
    marginBottom: 12, // mb-3

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

  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20, // px-5
    marginVertical: 6, // my-1.5

    gap: 8, // gap-2
  },

  sectionText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.primaryLight,
  },
});
