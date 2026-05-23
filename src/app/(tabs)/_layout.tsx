import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { NativeTabs } from "expo-router/build/native-tabs";

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }

  return (
    <NativeTabs>
      {/* <Text>This is tabs layout </Text> */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Chats</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="message"
          md="chat"
        ></NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="safari"
          md="explore"
        ></NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="person.fill"
          md="person"
        ></NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
