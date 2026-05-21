import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
  const [loadingStrategy, setLoadingStrategy] = useState<String | null>(null);
  const { startSSOFlow } = useSSO();
  
  let handleSocialAuth = async (startegy: "oauth_google" | "oauth_github") => {
    if (loadingStrategy) return; // guard against concurrent flows
    setLoadingStrategy(startegy);
    try {
      let { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (!createdSessionId || !setActive) {
        const provider = strategy === "oauth_google" ? "Google" : "Github";

        Alert.alert(
          "Sign-In Incomplete",
          `${provider} Sign-In did not complete. Please try again.`,
        );

        return;
      }

      await setActive({ session: createdSessionId });
    } catch (error) {}
    finally {
        setLoadingStrategy(null)
    }
  };
  return {handleSocialAuth, loadingStrategy};
};

export default useSocialAuth;
