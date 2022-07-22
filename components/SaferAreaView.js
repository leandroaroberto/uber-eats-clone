import React from "react";
import { Platform, View, StatusBar, SafeAreaView } from "react-native";

export function SaferAreaView({ children }) {
  if (Platform.OS == "ios") {
    StatusBar.setBarStyle('dark-content');
    return <SafeAreaView style={{ flex: 1 , backgroundColor: '#eee'}}>
        {children}
      </SafeAreaView>;
  }
  if (Platform.OS == "android") {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    return <View style={{flex: 1, backgroundColor: '#eee', paddingTop: StatusBar.currentHeight }}>{children}</View>;
  }
}