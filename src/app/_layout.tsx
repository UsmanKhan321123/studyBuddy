import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import * as WebBrowser from "expo-web-browser";
import * as Sentry from "@sentry/react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { AppProvider } from "./contexts/AppProvider";
import ChatWrapper from "./components/ChatWrapper";
import VideoProvider from "./components/VideoProvider";

WebBrowser.maybeCompleteAuthSession();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if (!publishableKey) {
  throw new Error("Add your Clerk Publishable key ");
}

Sentry.init({
  dsn: "https://123768982cea0b1d1e40e6301cd0278d@o4511438326071296.ingest.us.sentry.io/4511438328102912",
  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [
    Sentry.mobileReplayIntegration(),
    Sentry.feedbackIntegration(),
  ],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});
export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <GestureHandlerRootView style={styles.container}>
        <ChatWrapper>
          <VideoProvider>
            <AppProvider>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(tabs)" />
              </Stack>
            </AppProvider>
          </VideoProvider>
        </ChatWrapper>
      </GestureHandlerRootView>
    </ClerkProvider>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
