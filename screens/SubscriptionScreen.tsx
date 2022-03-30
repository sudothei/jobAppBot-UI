import * as React from "react";
import { Appbar } from "react-native-paper";
import { Dimensions, View, ScrollView } from "react-native";

export const SubscriptionScreen = ({ navigation }: any) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
      }}
    >
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        <Appbar.Content title="Subscription" />
      </Appbar.Header>
      <ScrollView style={{ padding: 16 }}></ScrollView>
    </View>
  );
};
