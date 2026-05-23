import { Text, StyleSheet, View, ActivityIndicator,Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useSocialAuth from "../hooks/useSocialAuth";
import {Ionicons} from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function AuthScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();
  const isLoading = loadingStrategy !== null;

  return (
  <View style={styles.container}>
    {/* gradient background */}
    <View style={styles.gradientWrapper}>
      <LinearGradient
        colors={["#0F0E17", "#1A1A2E", "#2D1B69", "#1A1A2E", "#0F0E17"]}
        locations={[0, 0.25, 0.5, 0.75, 1]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
    </View>

    <SafeAreaView style={styles.safeArea}>
      {/* TOP SECTION */}
      <View>
        <View style={styles.logoSection}>
          <View style={styles.logoWrapper}>
            <Ionicons name="school" size={30} color="#A29BFE" />
          </View>

          <Text style={styles.appTitle}>StudyBuddy</Text>

          <Text style={styles.appSubtitle}>
            Learn together, grow together
          </Text>
        </View>

        <View style={styles.heroImageWrapper}>
          <Image
            source={require("@/assets/images/auth.png")}
            style={styles.heroImage}
            contentFit="cover"
          />
        </View>

        {/* feature chips */}
        <View style={styles.chipsContainer}>
          {[
            {
              icon: "videocam" as const,
              label: "Video Calls",
              color: "#A29BFE",
              bgColor: "rgba(162,155,254,0.12)",
              borderColor: "rgba(162,155,254,0.20)",
            },
            {
              icon: "chatbubbles" as const,
              label: "Study Rooms",
              color: "#FF6B6B",
              bgColor: "rgba(255,107,107,0.12)",
              borderColor: "rgba(255,107,107,0.20)",
            },
            {
              icon: "people" as const,
              label: "Find Partners",
              color: "#00B894",
              bgColor: "rgba(0,184,148,0.12)",
              borderColor: "rgba(0,184,148,0.20)",
            },
          ].map((chip) => (
            <View
              key={chip.label}
              style={[
                styles.chip,
                {
                  backgroundColor: chip.bgColor,
                  borderColor: chip.borderColor,
                },
              ]}
            >
              <Ionicons name={chip.icon} size={14} color={chip.color} />

              <Text style={styles.chipText}>{chip.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* bottom section */}
      <View style={styles.bottomSection}>
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />

          <Text style={styles.dividerText}>Continue with</Text>

          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtonsRow}>
          {/* GOOGLE */}
          <Pressable
            style={({ pressed }) => [
              styles.googleButton,
              { opacity: pressed ? 0.85 : 1 },
            ]}
            disabled={isLoading}
            accessibilityRole="button"
            accessibilityLabel="Continue with Google"
            onPress={() => !isLoading && handleSocialAuth("oauth_google")}
          >
            {loadingStrategy === "oauth_google" ? (
              <ActivityIndicator size={"small"} color={"#6C5CE7"} />
            ) : (
              <Image
                source={require("../../../assets/images/google.png")}
                style={styles.socialIcon}
                contentFit="contain"
              />
            )}
          </Pressable>

       

          {/* GITHUB */}
          <Pressable
            style={({ pressed }) => [
              styles.socialButton,
              { opacity: pressed ? 0.85 : 1 },
            ]}
            disabled={isLoading}
            accessibilityRole="button"
            accessibilityLabel="Continue with GitHub"
            onPress={() => !isLoading && handleSocialAuth("oauth_github")}
          >
            {loadingStrategy === "oauth_github" ? (
              <ActivityIndicator size="small" color="#6C5CE7" />
            ) : (
              <Ionicons name="logo-github" size={28} color="#FFFFFE" />
            )}
          </Pressable>
        </View>

        <Text style={styles.footerText}>
          By continuing, you agree to our{" "}
          <Text style={styles.footerLink}>Terms of Service</Text> and{" "}
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0E17",
  },

  gradientWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  gradient: {
    width: "100%",
    height: "100%",
  },

  safeArea: {
    flex: 1,
    justifyContent: "space-between",
  },

  logoSection: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 8,
  },

  logoWrapper: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "rgba(162,155,254,0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(162,155,254,0.20)",
  },

  appTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFE",
    marginTop: 12,
    letterSpacing: -0.5,
  },

  appSubtitle: {
    fontSize: 15,
    color: "#A7A9BE",
    marginTop: 3,
    letterSpacing: 0.5,
  },

  heroImageWrapper: {
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 10,
  },

  heroImage: {
    width: 320,
    height: 350,
  },

  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 15,

  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
  },

  chipText: {
    color: "#A7A9BE",
    fontSize: 8,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  bottomSection: {
    marginTop:15,
    paddingHorizontal: 32,
    paddingBottom: 16,
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#2A2A3C",
  },

  dividerText: {
    color: "#7F849C",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  socialButtonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginBottom: 20,
  },

  googleButton: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#1E1E2E",
    borderWidth: 1,
    borderColor: "#2A2A3C",
    justifyContent: "center",
    alignItems: "center",
  },

  socialIcon: {
    width: 28,
    height: 28,
  },

  footerText: {
    color: "#7F849C",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 16,
  },

  footerLink: {
    color: "#A29BFE",
  },
});
