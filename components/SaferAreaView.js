import React from "react";
import { Platform, View, StatusBar, SafeAreaView } from "react-native";

export function SaferAreaView({ children }) {
  if (Platform.OS == "ios") {
    return <SafeAreaView style={{ flex: 1 , backgroundColor: '#eee'}}>{children}</SafeAreaView>;
  }
  if (Platform.OS == "android") {
    return <View style={{flex: 1, backgroundColor: '#eee', paddingTop: StatusBar.currentHeight }}>{children}</View>;
  }
}