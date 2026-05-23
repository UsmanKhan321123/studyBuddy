import { useSSO } from "@clerk/expo";
import * as AuthSession from "expo-auth-session";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";

const APP_SCHEME = "studybuddysdk55";
const nativeRedirectUrl = AuthSession.makeRedirectUri({
  scheme: APP_SCHEME,
  path: "/sso-callback",
});
type SocialStrategy = "oauth_google" | "oauth_github";

const useSocialAuth = () => {
  const [loadingStrategy, setLoadingStrategy] = useState<SocialStrategy | null>(null);
  const { startSSOFlow } = useSSO();

  useEffect(() => {
    if (Platform.OS !== "android") return;

    void WebBrowser.warmUpAsync();

    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);

  const handleSocialAuth = async (strategy: SocialStrategy) => {
    if (loadingStrategy) return; // guard against concurrent flows
    setLoadingStrategy(strategy);

    const provider = strategy === "oauth_google" ? "Google" : "GitHub";

    try {
      const { createdSessionId, setActive, signIn, signUp, authSessionResult } =
        await startSSOFlow({
          strategy,
          redirectUrl: Platform.OS === "web" ? undefined : nativeRedirectUrl,
        });

      if (!createdSessionId || !setActive) {
        console.warn("Social auth did not create a session", {
          provider,
          authSessionResult,
          signInStatus: signIn?.status,
          signUpStatus: signUp?.status,
        });

        Alert.alert(
          "Sign-In Incomplete",
          `${provider} sign-in did not complete. Please try again.`,
        );

        return;
      }

      await setActive({
        session: createdSessionId,
        navigate: async () => {
          router.replace("/(tabs)");
        },
      });
    } catch (error) {
      console.error(`${provider} sign-in failed`, error);

      Alert.alert(
        "Sign-In Failed",
        `${provider} sign-in could not be started. Please check your OAuth setup and try again.`,
      );
    } finally {
      setLoadingStrategy(null);
    }
  };

  return { handleSocialAuth, loadingStrategy };
};

export default useSocialAuth;
