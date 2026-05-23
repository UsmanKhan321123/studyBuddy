import { useAuth } from '@clerk/expo'
import { Redirect, Stack } from 'expo-router'
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return null
  }

  if (isSignedIn) {
    return <Redirect href={'/(tabs)'} />
  }

  return <Stack screenOptions={{headerShown:false }}/>
} 
