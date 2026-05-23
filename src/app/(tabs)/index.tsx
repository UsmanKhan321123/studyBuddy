import { Button } from "react-native";
import { Text, View } from "react-native";
import * as Sentry from "@sentry/react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatsScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>
          This is chat screen which is serving as a index screen for(tabs)
        </Text>
         <Button
          title="Try!"
          onPress={() => {
            Sentry.captureException(new Error("First error"));
          }}
        />
      </View>
    </SafeAreaView>
  );
}
