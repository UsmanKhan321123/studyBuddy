

import { COLORS } from "@/lib/theme";
import { useAuth, useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import * as Sentry from "@sentry/react-native";
import { Image } from "expo-image";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MENU_ITEMS = [
  { icon: "notifications-outline", label: "Notifications", color: COLORS.primary },
  { icon: "bookmark-outline", label: "Saved Resources", color: COLORS.accent },
  { icon: "time-outline", label: "Study History", color: COLORS.accentSecondary },
  { icon: "settings-outline", label: "Settings", color: COLORS.textMuted },
];

const ProfileScreen = () => {
  const { signOut } = useAuth();
  const { user } = useUser();

  return (<ScrollView>
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileSection}>
        <View style={styles.avatarWrapper}>
          <Image
            source={user?.imageUrl}
            style={styles.avatar}
            contentFit="contain"
          />

          <View style={styles.onlineIndicator} />
        </View>

        <Text style={styles.userName}>
          {user?.fullName || user?.username || "Student"}
        </Text>

        <Text style={styles.email}>
          {user?.primaryEmailAddress?.emailAddress}
        </Text>

        <View style={styles.streakBadge}>
          <Ionicons name="flame" size={16} color={COLORS.warning} />
          <Text style={styles.streakText}>7 day study streak</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>Sessions</Text>
        </View>

        <View style={[styles.statCard, styles.middleStatCard]}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Partners</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>48h</Text>
          <Text style={styles.statLabel}>Study Time</Text>
        </View>
      </View>

      {/* MENU ITEMS */}
      <View style={styles.menuContainer}>
        {MENU_ITEMS.map((item, i) => (
          <Pressable key={i} style={styles.menuItem}>
            <View
              style={[
                styles.menuIconWrapper,
                { backgroundColor: `${item.color}15` },
              ]}
            >
              <Ionicons name={item.icon as any} size={22} color={item.color} />
            </View>

            <Text style={styles.menuLabel}>{item.label}</Text>

            <Ionicons
              name="chevron-forward"
              size={18}
              color={COLORS.textSubtle}
            />
          </Pressable>
        ))}
      </View>

      {/* SIGN OUT BTN */}
      <Pressable
        style={styles.signOutButton}
        onPress={async () => {
          try {
            await signOut();

            Sentry.logger.info("User signed out successfully", {
              userId: user?.id,
            });
          } catch (error) {
            Sentry.logger.error("Error signing out", {
              error,
              userId: user?.id,
            });

            Sentry.captureException(error);

            Alert.alert(
              "Error",
              "An error occurred while signing out. Please try again."
            );
          }
        }}
      >
        <Ionicons
          name="log-out-outline"
          size={20}
          color={COLORS.danger}
        />

        <Text style={styles.signOutText}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
  },

  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },

  avatarWrapper: {
    marginBottom: 14,
    position: "relative",
  },

  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },

  onlineIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.accentSecondary,
    borderWidth: 3,
    borderColor: COLORS.background,
  },

  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
  },

  email: {
    marginTop: 2,
    fontSize: 16,
    color: COLORS.textMuted,
  },

  streakBadge: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: "#FDCB6E1E",
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  streakText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.warning,
  },

  statsContainer: {
    marginTop: 8,
    marginBottom: 24,
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  statCard: {
    flex: 1,
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  middleStatCard: {
    marginHorizontal: 12,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.textMuted,
  },

  menuContainer: {
    paddingHorizontal: 20,
  },

  menuItem: {
    marginBottom: 6,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  menuIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.text,
  },

  signOutButton: {
    marginTop: 24,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF6B6B33",
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  signOutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.danger,
  },
});